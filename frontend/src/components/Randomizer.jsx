/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import RecipeCards from "./RecipeCards";

export default function Randomizer() {
  const [randomizer, setRandomizer] = useState();

  const getRandom = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((response) => setRandomizer(response.meals))
      .catch((err) => console.error(err));
    console.warn(randomizer);
  };

  useEffect(() => {
    getRandom();
  }, []);

  return randomizer ? (
    <div className="flex justify-center m-50 text-center">
      <div className="flex-col mt-6">
        <h3 className="">If you don't have a recipe idea?</h3>
        <button
          className="bg-bluetitle text-backgroundMain font-bold py-2 px-4 mt-6 mb-6 rounded"
          onClick={getRandom}
        >
          Randomizer
        </button>
        <RecipeCards randomizer={randomizer} />
      </div>
    </div>
  ) : null;
}