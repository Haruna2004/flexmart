import { search } from "../../../assets";

function Search() {
  return (
    <div className="flex w-full items-center gap-[0.3em] rounded-3xl bg-white py-1 pl-[0.3em] xl:h-[2.8em] tablet:ml-[3.2em] tablet:w-[26.5em] tablet:rounded-[0.3em] tablet:py-0">
      <img src={search} alt="search" className="h-[1.5em] w-[1.5em]" />
      <input
        type="text"
        className="flex-1 bg-transparent text-[14.4px] outline-none"
        placeholder="Search Products, brands and categories"
      />
      <div className=" hidden h-full  cursor-pointer items-start justify-center rounded-r-[0.3em] bg-[#FF7C00] px-2 py-2.5 text-white tablet:flex">
        <p className="text-center text-[0.9em] font-bold">SEARCH</p>
      </div>
    </div>
  );
}

export default Search;
