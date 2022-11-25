/* eslint-disable react/prop-types */
import RecipeCardsResults from "../components/RecipeCardsResults";
// import React from "react";

function Results({ search, countries }) {
  return (
    <div className="flex justify-center align-center">
      <div className="flex-col ">
        <h1 className="text-center text-3xl mt-5 py-3  mb-5 text-randomize">
          {countries} food !{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#A6122D"
            className="bi bi-airplane-fill inline-block ml-2 transform rotate-45"
            viewBox="0 0 16 16"
          >
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
          </svg>
        </h1>
        <div className=" md:flex md:align-center md:justify-center m-5  gap-10 md:flex-row md:flex-wrap">
          {search?.map((recipe) => (
            <RecipeCardsResults
              key={recipe.idMeal}
              recipe={recipe}
              countries={countries}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
