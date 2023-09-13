import React from "react";

function Pizza({pizza, onDeletePizza, onSelectPizza}) {
  const { id, topping, size, vegetarian} = pizza

  const handleDeletePizza = () => {
    onDeletePizza(pizza)
  }

  const handleSelect = () => {
    onSelectPizza(pizza)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes': 'No'}</td>
      <td>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={handleSelect}
        >
          Edit Pizza
        </button>
      </td>
      <td>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={handleDeletePizza}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
