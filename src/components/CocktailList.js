import "./Cocktail.css";

function CockTailList(props) {


  return (
    <section>
      <h2 className="cocktailTitle">Cocktails</h2>
      <div className="cocktail-center">
        <p> {props.apiData.map(mocktailData =>{
          return <li key = {mocktailData.idDrink}>
            {mocktailData.strDrink}
            <img src = {mocktailData.strDrinkThumb}/>
          </li>
        })}</p>
      </div>
    </section>
  );
}

export default CockTailList;
