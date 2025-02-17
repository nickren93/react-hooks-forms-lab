import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [addedItemArray, setAddedItemArray] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    //const newSearch = event.target.value.charAt(0).toUpperCase() + 
    //event.target.value.slice(1).toLowerCase()
    //setSearch(newSearch)
    setSearch(event.target.value)
  }

  function handleItemArray(item){
    setAddedItemArray([...addedItemArray, item])
  }

  const itemsToDisplay = addedItemArray.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    return item.name.includes(search)
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleItemArray}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
