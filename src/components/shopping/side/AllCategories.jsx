import { categories } from "../../../constants";

function AllCategories() {
  return (
    <div className="p-5 space-y-3">
      {categories.map(({ title, icon }) => (
        <div
          key={title}
          className="flex cursor-pointer space-x-2 hover:scale-105 transition-transform duration-150"
        >
          <img src={icon} alt="icon" />
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default AllCategories;
