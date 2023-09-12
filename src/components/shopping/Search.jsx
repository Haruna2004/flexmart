import { search } from "../../assets";

function Search() {
  return (
    <div className="bg-white ml-[3.2em] flex items-center gap-[0.3em] rounded-[0.3em] w-[26.5em] h-[2.8em] pl-[0.3em]">
      <img src={search} alt="search" className="w-[1.5em] h-[1.5em]" />
      <input
        type="text"
        className="outline-none flex-1 text-[14.4px]"
        placeholder="Search Products, brands and categories"
      />
      <div className=" bg-[#FF7C00] h-full text-white flex justify-center items-start rounded-r-[0.3em] py-2.5 px-2">
        <p className="text-[0.9em] text-center font-bold">SEARCH</p>
      </div>
    </div>
  );
}

export default Search;
