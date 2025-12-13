import searchIcon from "../assets/images/icon-search.svg";

function SearchBar() {
  return (
    <div className="justify-center align-middle text-center">
      <div>
        <img 
          src={searchIcon} 
          alt="Search" 
          className=""
        />
        <input type="text" placeholder="Search for a place..." className="" />
      </div>

      <button className="">Search</button>
    </div>
  );
}

export default SearchBar;
