/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { useEffect } from "react";

function SearchBar({ countries, setCountries, setSearch, search }) {
  const getSearchMealByCountry = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countries}`) // fetch when choice of food is made
      .then((response) => response.json())
      .then((result) => {
        setSearch(result.meals);
      })
      .catch((err) => console.error(err));
  };

  console.log(search);

  return (
    <form>
      <label
        htmlFor="search-dropdown"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      />

      <div className="relative w-full">
        <input
          className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  searchbar"
          required
          type="text"
          placeholder="Indicate type of food"
          onChange={(event) => setCountries(event.target.value)}
          onBlur={getSearchMealByCountry} // indicate the function to active onClick
          // indicates if the key Enter was pressed
        />
        <button
          type="submit"
          className="absolute top-2 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg  b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="#F6F6F6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>

    /* Ancienne version a supprimer quand verification  *
        <div className="flex  rounded">
          <input
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Indicate type of food"
            onChange={(event) => setCountries(event.target.value)} // indicate the function to active onClick
            onKeyDown={handleEnterSubmit} // indicates if the key Enter was pressed
          />
          <button
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => {
              getSearchMealByCountry(); // onClick, fetch is made with the type of food selected
            }}
          >
            Let's go !
          </button>
        </div> */
  );
}

export default SearchBar;
