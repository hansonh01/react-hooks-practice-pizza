import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onDeletePizza, onSelectPizza}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map((pizza)=>(
            <Pizza 
            key={pizza.id} 
            pizza={pizza}
            onDeletePizza={onDeletePizza}
            onSelectPizza={onSelectPizza}
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
