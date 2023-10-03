import { categories } from "../../../constants";

function AllCategories() {
  return (
    <div className="space-y-3 p-5">
      {categories.map(({ title, icon }) => (
        <div
          key={title}
          className="flex cursor-pointer space-x-2 transition duration-150 hover:scale-105 active:text-primary-500"
        >
          <img src={icon} alt="icon" />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default AllCategories;
