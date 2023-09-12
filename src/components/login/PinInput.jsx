function PinInput() {
  const digits = [0, 1, 2, 3, 4, 5];
  return (
    <div className="inline-flex flex-start gap-[1.2em]">
      {digits.map((digit) => (
        <div
          key={digit}
          className="w-[2.7em] h-[3em] border border-black rounded-md flex items-center justify-center"
        >
          <input
            type="text"
            className="w-full h-full outline-none rounded-md"
          />
        </div>
      ))}
    </div>
  );
}

export default PinInput;
