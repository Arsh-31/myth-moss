export const Footer = () => {
  return (
    <footer className="mt-10 py-8 bg-transparent english">
      {/* Divider */}
      <hr className="border-t-2" />

      {/* "The End" */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold my-6 tracking-wider font-cinzel select-none">
        ❦ The End ❦
      </h1>

      {/* Divider */}
      <hr className="border-t-2 mb-6" />

      {/* Footer Bottom Info */}
      <div className="flex px-6 flex-col md:flex-row justify-between items-center text-lg font-semibold">
        {/* Left Side */}
        <div className="mb-2 md:mb-0">
          <span className="text-xl">Mist & Moss</span>{" "}
          <span className="text-2xl">☯︎</span>
        </div>

        {/* Right Side */}
        <div className="space-x-4">
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
