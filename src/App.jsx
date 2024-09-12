import { useState } from "react";
import "./index.css";
import data from "./data";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuData, setMenuData] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categoryName) => {
    if (categoryName === "all") {
      setMenuData(data);
      return;
    }

    const filteredMenu = data.filter((item) => item.category === categoryName);
    setMenuData(filteredMenu);
    return;
  };

  return (
    <main>
      <section className='menu-container'>
        <h2>React Cafe Menu</h2>
        <Menu
          menuData={menuData}
          categories={categories}
          filterItems={filterItems}
        />
      </section>
    </main>
  );
}

export default App;
