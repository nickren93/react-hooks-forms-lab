import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [item, setItem] = useState({name: "", category: "Produce"})
  
  function handleItem(event){
    const name = event.target.name;
    const value = event.target.value;

    const newItem = {
      ...item,
      id: uuid(), // the `uuid` library can be used to generate a unique id
      [name]: value,
    };

    setItem(newItem)
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit(item)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={item.name} onChange={handleItem}/>
      </label>

      <label>
        Category:
        <select name="category" value = {item.category} onChange={handleItem}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
