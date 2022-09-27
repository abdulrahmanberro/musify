import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => (
  <form
    autoComplete="off"
    className="focus-within:text-gray-600 p-2 text-gray-400"
  >
    <label htmlFor="search-field" className="sr-only">
      Search All Songs
    </label>
    <div className="flex felx-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4" />
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="search"
        value=""
        type="serach"
        onChange={() => {}}
        className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-whiet p-4"
      />
    </div>
  </form>
);

export default Searchbar;
