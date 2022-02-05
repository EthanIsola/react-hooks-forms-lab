import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("")
  const [newCategory, setCategory] = useState("Produce")
  
  const handleNameChange = ({target})=>{
    setItemName(target.value)
  }

  const handleCategoryChange = ({target})=>{
    setCategory(target.value)
  }
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: newCategory,
  };

  const onSubmit=()=>{
    return onItemFormSubmit(newItem)
    console.log("hi")
  }

  const prevDefault = (e) => {
    e.preventDefault();
  };

  return (
    <form className="NewItem" onSubmit = {prevDefault}>
      
      <label>
        Name:
        <input type="text" name="name" onChange = {handleNameChange} value = {itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick = {onSubmit} onSubmit={onSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;










// function ItemForm({}) {

//   const newItem = {
//     id: uuid(), // the `uuid` library can be used to generate a unique id
//     name: newItemName,
//     category: formCategory,
//   };
  

//   return (
//     <form className="NewItem" onSubmit = {prevSubmit}>
      
//       <label>
//         Name:
//         <input type="text" name="name" onChange = {onNewName} value = {newItemName}/>
//       </label>

//       <label>
//         Category:
//         <select name="category" onChange={onItemCategoryChange}>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit" onSubmit={onItemFormSubmit(newItem)}>Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;
