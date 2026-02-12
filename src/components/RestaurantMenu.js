import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menuData, error } = useRestaurantMenu(resId);

  if (error) {
    return (
      <h2 style={{ marginTop: "120px", textAlign: "center" }}>
        🍽 Menu not available for this restaurant
      </h2>
    );
  }

  if (!menuData) return <Shimmer />;

  // ✅ Restaurant Info
  const infoCard = menuData?.cards
    ?.map((c) => c?.card?.card)
    ?.find((c) => c?.info)?.info;

  // ✅ Menu Items (robust extraction)
  const menuCards = menuData?.cards
    ?.map((c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    ?.flat()
    ?.map((c) => c?.card?.card)
    ?.filter((c) => c?.itemCards);

  const items = menuCards?.[0]?.itemCards || [];

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <h1>{infoCard?.name}</h1>
      <p>{infoCard?.cuisines?.join(", ")}</p>

      <h2 style={{ marginTop: "20px" }}>Menu</h2>

      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} – ₹
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
