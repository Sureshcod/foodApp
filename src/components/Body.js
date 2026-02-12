import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9634&lng=77.5855&page_type=DESKTOP_WEB_LISTING",
      );
      const json = await res.json();

      // IMPORTANT: extract restaurants safely
      const cards = json?.data?.cards || [];
      let allRestaurants = [];

      cards.forEach((card) => {
        const resData =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (resData) {
          allRestaurants = allRestaurants.concat(resData);
        }
      });

      setRestaurants(allRestaurants);
    } catch (error) {
      console.error("Swiggy API failed", error);
      setRestaurants([]);
    }
  };

  if (restaurants.length === 0) return <Shimmer />;

  const filteredRestaurants = restaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((res, index) => (
          <Link
            key={res.info.id + "-" + index}
            to={"/restaurants/" + res.info.id}
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
