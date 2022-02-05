import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";



function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const [searchText, setSearchText] = useState("")

  const [finalList, setList] = useState(items)




  const handleSearch = ({target}) => {
    setSearchText(target.value)
  }

  const handleCategoryNameChange = ({target}) => {
    setSelectedCategory(target.value);
  }

  const onItemFormSubmit = (newItem) => {
    return setList([...items, newItem])
    console.log(finalList)
  }
  

  const itemsToDisplay = finalList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  

  let searchResults = itemsToDisplay.filter((item) => {
      return(
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryNameChange} onSearchChange ={handleSearch} search = {searchText}/>
      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;