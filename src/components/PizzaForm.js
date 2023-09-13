import React, { useState, useEffect } from "react";

function PizzaForm({ pizza, onSubmitPizza }) {
  const [topping, setTopping] = useState("");
  const [size,setSize] = useState('Small');
  const [vegetarian,setVegetarian] = useState(false);

  useEffect(() => {
    if (pizza) {
      setTopping(pizza.topping);
      setSize(pizza.size);
      setVegetarian(pizza.vegetarian);
    } else {
      setTopping("");
      setSize("Small");
      setVegetarian(false);
    }
  }, [pizza]);

  const isItVegetarian = (e) => {
    if(e.target.value === 'Vegetarian'){
      setVegetarian(true);
    }else{
      setVegetarian(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {topping,size,vegetarian};
    onSubmitPizza(formData)
    setTopping("");
    setSize("Small");
    setVegetarian(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e)=>setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={(e)=>setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" onChange={isItVegetarian}> 
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>
            {pizza ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
