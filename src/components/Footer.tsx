export const Footer = () => {
  return (
    <footer className="mt-2 py-2 bg-transparent english px-4">
      {/* Divider */}
      <hr className="border-t-2" />

      {/* "The End" */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold my-6 tracking-wider font-cinzel select-none">
        ❦ The End ❦
      </h1>

      {/* Divider */}
      <hr className="border-t-2 mb-6" />

      {/* Footer Bottom Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-base sm:text-lg font-semibold gap-y-3 sm:gap-y-0 text-center sm:text-left">
        {/* Left Side */}
        <div>
          <span className="text-lg sm:text-xl">Mist & Moss</span>{" "}
          <span className="text-xl sm:text-2xl">☯︎</span>
        </div>

        {/* Right Side */}
        <div className="space-x-3">
          <a
            href="https://github.com"
            className="hover:underline hover:text-black transition-all duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="#"
            className="hover:underline hover:text-black transition-all duration-150"
          >
            Wohoo
          </a>
        </div>
      </div>
    </footer>
  );
};
