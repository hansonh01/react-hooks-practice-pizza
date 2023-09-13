import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  
  useEffect(()=>{
    fetch('http://localhost:3001/pizzas')
      .then(r=>r.json())
      .then(setPizzas)
  },[])

  const handlePizzaForm = (newPizza) => {
    if(selectedPizza){
      fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPizza),
      })
        .then(r=>r.json())
        .then(()=>{
          const updatedPizzas = pizzas.map((pizza) =>
            pizza.id === selectedPizza.id ? { ...pizza, ...newPizza } : pizza
          );
          setPizzas(updatedPizzas);
          setSelectedPizza(null);
        })
    }else{
      fetch('http://localhost:3001/pizzas',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newPizza)
    })
      .then(r=>r.json())
      .then(()=>{
        setPizzas([...pizzas,newPizza])
      })
    }
  };

  const handleDeletePizza = (deleteThisPizza) => {
    fetch(`http://localhost:3001/pizzas/${deleteThisPizza.id}`,{
      method:'DELETE'
    })
      .then(r=>r.json())
      .then(()=>{
        const updatePizza = pizzas.filter((pizza)=>pizza.id !== deleteThisPizza.id)
        setPizzas(updatePizza)
      })
  };

  return (
    <>
      <Header />
      <PizzaForm 
      pizza={selectedPizza}
      onSubmitPizza={handlePizzaForm}
      />
      <PizzaList 
      pizzas={pizzas} 
      onDeletePizza={handleDeletePizza}
      onSelectPizza={setSelectedPizza}
      />
    </>
  );
}

export default App;
