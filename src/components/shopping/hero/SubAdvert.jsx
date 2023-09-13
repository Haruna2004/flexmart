function SubAdvert({ mainText, subText, imgSrc }) {
  return (
    <div className="relative bg-[#E5E5E5] rounded-md max-w-48 h-32 pl-2 pt-3 ">
      <img
        src={imgSrc}
        alt="img"
        className=" absolute w-24 h-20 right-0 bottom-2"
      />
      <div className="flex flex-col gap-3 text-black relative">
        <h1 className="text-xs font-bold w-24">{mainText}</h1>
        <p className="text-[0.6rem]">{subText}</p>
      </div>
    </div>
  );
}

export default SubAdvert;
