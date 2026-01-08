import searchIcon from "../assets/images/icon-search.svg";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto gap-2 mb-10">
      <div className="relative flex-1">
        <img 
          src={searchIcon} 
          alt="Search icon" 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
        />
        <input 
          type="text" 
          placeholder="Search for a place..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full pl-12 pr-4 py-3 bg-[hsl(243,27%,20%)] rounded-xl text-white shadow-sm"
          aria-label="Search for a location"
        />
      </div>

      <button 
        onClick={handleSearch}
        disabled={!query.trim()}
        className="mx-3 px-6 py-3 bg-[hsl(233,67%,56%)] text-white font-medium rounded-xl shadow-sm whitespace-nowrap"
        aria-label="Search"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;