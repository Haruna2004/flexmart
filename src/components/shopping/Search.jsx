import { search } from "../../assets";

function Search() {
  return (
    <div className="bg-white flex items-center gap-[0.3em] rounded-[0.3em] w-[20.7em] h-[2.2em] pl-[0.3em]">
      <img src={search} alt="search" className="w-[1.2em] h-[1.2em]" />
      <input
        type="text"
        className="outline-none flex-1 text-[0.7em]"
        placeholder="Search Products, brands and categories"
      />
      <div className=" bg-[#FF7C00] h-full text-white flex justify-center items-start rounded-r-[0.3em] py-2 px-2">
        <p className="text-[0.7em] text-center font-bold">SEARCH</p>
      </div>
    </div>
  );
}

export default Search;
