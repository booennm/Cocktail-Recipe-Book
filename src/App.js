import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

const URL = "https://www.thecocktaildb.com/api/json/v1/";
const API_KEY = "1";

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let address = URL + API_KEY + "/filter.php?c=Ordinary_Drink";

    axios.get(address)
      .then((response) => {
        console.log(response)
        setData(response.data.drinks);
      }).catch(error => {
        alert(error);
      })
  }, []);
  
  function goBack() {
    setSelected(null);
  }

  if(selected != null) {
    return <Recipe
    name={data.strDrink}
    image={data.strDrinkThumb}
    i1={data.strIngredient1}
    i2={data.strIngredient2}
    i3={data.strIngredient3}
    i4={data.strIngredient4}
    i5={data.strIngredient5}
    i6={data.strIngredient6}
    i7={data.strIngredient7}
    i8={data.strIngredient8}
    i9={data.strIngredient9}
    i10={data.strIngredient10}
    i11={data.strIngredient11}
    i12={data.strIngredient12}
    i13={data.strIngredient13}
    i14={data.strIngredient14}
    i15={data.strIngredient15}
    instructions={data.strInstructions}/>
  }else {
    return (
      <>
      <h1>Cocktail Recipes</h1>
      <div className='grid-container'>
        {
          data.map(drink => (
            <div className='grid-item' key={drink.idDrink} onClick={e => setSelected(drink)}>
              <img src={drink.strDrinkThumb}></img>
              <p>{drink.strDrink}</p>
            </div>
          ))
        }
      </div>
      </>
    );
  }
}

export default App;
