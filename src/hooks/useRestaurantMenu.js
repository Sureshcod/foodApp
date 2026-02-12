import { useEffect, useState } from "react";

const MENU_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634&lng=77.5855&restaurantId=";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API + resId);

      const text = await res.text(); // 🔴 IMPORTANT
      if (!text) throw new Error("Empty response");

      const json = JSON.parse(text);

      setMenuData(json?.data);
    } catch (err) {
      console.error("Menu API error:", err);
      setError("Menu not available");
    }
  };

  return { menuData, error };
};

export default useRestaurantMenu;
