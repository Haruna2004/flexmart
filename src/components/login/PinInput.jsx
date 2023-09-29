function PinInput() {
  const digits = [0, 1, 2, 3, 4, 5];
  return (
    <div className="flex w-full items-center justify-center gap-[1.2em]">
      {digits.map((digit) => (
        <div
          key={digit}
          className="flex h-auto max-h-[3em] w-[2.7em] items-center justify-center rounded-md border border-black"
        >
          <input
            type="text"
            className="h-full w-full rounded-md text-center text-3xl font-bold outline-none"
          />
        </div>
      ))}
    </div>
  );
}

export default PinInput;
