import "./SearchForm.css";
import React from "react";

function SearchForm(props) {
  const [mocktailName,setmocktailName] = React.useState('')

  const inputChangeHandler = (e) => {
    let input = e.target.value;
    setmocktailName(input)
    props.getMocktailName(input)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <h4>Search Your Favorite Cocktail</h4>
          <input
            type="text"
            className="input-form"
            placeholder="Search the Drink"
            value = {mocktailName}
            onChange = {inputChangeHandler}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
