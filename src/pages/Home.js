import axios from "axios";
import React from "react";
import CockTailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

function Home() {
  const [apiData, setApiData] = React.useState([]);

  const getMocktailName =(name) =>{
    console.log(name)
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then(data => setApiData(data.data.drinks)).
    catch(err=> console.log(err))

  }

 


  React.useEffect(
    ()=>{  axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((data) => {
        setApiData(data.data.drinks);
      }).catch(err=> console.log(err))}
    ,
    []
  );

 
  
  return (
    <div>
      <SearchForm getMocktailName={getMocktailName}/>
      <CockTailList apiData= {apiData}/>
    </div>
  );
}

export default Home;
