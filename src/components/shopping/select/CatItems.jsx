function CatItems({ title, imgSrc }) {
  return (
    <div className="bg-select-500/30 min-w-[6rem]  h-24 flex flex-col items-center justify-center gap-2 rounded-3xl overflow-hidden cursor-pointer transition duration-300 ease-in-out">
      <img src={imgSrc} alt="img" className="w-14 h-16" />
      <h4 className="text-[0.6rem]">{title}</h4>
    </div>
  );
}

export default CatItems;
