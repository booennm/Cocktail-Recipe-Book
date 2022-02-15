import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';

const URL = "https://www.thecocktaildb.com/api/json/v1/";
const API_KEY = "1";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(null);
  const [category, setCategory] = useState([]);
  const [stage, setStage] = useState(0);
  //0 = choosing category
  //1 = choosing drink
  //2 = viewing recipe

  function getData() {
    if(!loaded) {
      let address = URL + API_KEY + url;

      axios.get(address)
        .then((response) => {
          console.log(response)
          setData(response.data.drinks);
        }).catch(error => {
          alert(error);
        })

      setLoaded(true);
    }
  }

  function move(stage, url, category) {
    setStage(stage);
    setUrl(url);
    setCategory(category);
    setLoaded(false);
  }


  if(stage == 0) {
    return (
      <>
      <h1>Cocktail Recipe Book</h1>
      <div className='categories'>
        <button className="ordinary" onClick={e => move(1, "/filter.php?c=Ordinary_Drink", ["Ordinary Drinks", "/filter.php?c=Ordinary_Drink"])}>Ordinary</button>
        <button className="cocktail" onClick={e => move(1, "/filter.php?c=Cocktail", ["Cocktails", "/filter.php?c=Cocktail"])}>Cocktail</button>
        <button className="shake" onClick={e => move(1, "/filter.php?c=Shake", ["Shakes", "/filter.php?c=Shake"])}>Shake</button>
        <button className="cocoa" onClick={e => move(1, "/filter.php?c=Cocoa", ["Cocoa Drinks", "/filter.php?c=Cocoa"])}>Cocoa</button>
        <button className="shot" onClick={e => move(1, "/filter.php?c=Shot", ["Shots", "/filter.php?c=Shot"])}>Shot</button>
        <button className="coffee" onClick={e => move(1, "/filter.php?c=Coffee_/_Tea", ["Coffee and Tea Drinks", "/filter.php?c=Coffee_/_Tea"])}>Coffee</button>
        <button className="liqueur" onClick={e => move(1, "/filter.php?c=Homemade_Liqueur", ["Homemade Liqueur", "/filter.php?c=Homemade_Liqueur"])}>Homemade Liqueur</button>
        <button className="party" onClick={e => move(1, "/filter.php?c=Punch_/_Party_Drink", ["Punch and Party Drinks", "/filter.php?c=Punch_/_Party_Drink"])}>Party</button>
        <button className="beer" onClick={e => move(1, "/filter.php?c=Beer", ["Beer Drinks", "/filter.php?c=Beer"])}>Beer</button>
        <button className="softdrink" onClick={e => move(1, "/filter.php?c=Soft_Drink", ["Soft Drinks", "/filter.php?c=Soft_Drink"])}>Soft Drink</button>
        <button className="other" onClick={e => move(1, "/filter.php?c=Other/Unknown", ["Other and Unknown Drinks", "/filter.php?c=Other/Unknown"])}>Other</button>
      </div>
      </>
    );
  }else if(stage == 1) {
    getData();
    return (
      <>
      <button className='back' onClick={e => move(0, null, null)}>Go back</button>
      <h1>{category[0]}</h1>
      <div className='grid-container'>
        {
          data.map(drink => (
            <div className='grid-item' key={drink.idDrink} onClick={e => move(2, "/lookup.php?i=" + String(drink.idDrink), category)}>
              <img src={drink.strDrinkThumb}></img>
              <p>{drink.strDrink}</p>
            </div>
          ))
        }
      </div>
      </>
    );
  }else if(stage == 2) {
    getData()
    return (
      <>
      <button className='back' onClick={e => move(1, category[1], category)}>Go back</button>
      <Recipe
        name={data[0].strDrink}
        image={data[0].strDrinkThumb}
        i1={data[0].strIngredient1}
        i2={data[0].strIngredient2}
        i3={data[0].strIngredient3}
        i4={data[0].strIngredient4}
        i5={data[0].strIngredient5}
        i6={data[0].strIngredient6}
        i7={data[0].strIngredient7}
        i8={data[0].strIngredient8}
        i9={data[0].strIngredient9}
        i10={data[0].strIngredient10}
        i11={data[0].strIngredient11}
        i12={data[0].strIngredient12}
        i13={data[0].strIngredient13}
        i14={data[0].strIngredient14}
        i15={data[0].strIngredient15}
        instructions={data[0].strInstructions}/>
      </>
    );
  }else {
    alert("data not found");
  }
}


export default App;
