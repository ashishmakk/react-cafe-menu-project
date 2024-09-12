import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuData, categories, filterItems }) => {
  return (
    <div>
      {categories.map((categoryName) => {
        return (
          <button type='button' className="btn" onClick={() => filterItems(categoryName)}>
            {categoryName}
          </button>
        );
      })}
      <div className='menu'>
        {menuData.map((menuItem) => {
          return <MenuItem key={menuItem.id} {...menuItem} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
