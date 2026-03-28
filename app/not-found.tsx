import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative w-full h-dvh flex justify-center items-center pt-20 px-4 flex-col">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/10 to-transparent z-1"></div>
      <div>
        <h1 className="font-extrabold text-5xl text-[12rem] md:text-[20rem] leading-none tracking-tight text-transparent bg-linear-to-b from-tertiary/30 via-tertiary/10 to-transparent opacity-40 bg-clip-text">404</h1>
      </div>
      <div className="mt-10 max-w-8/12">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6 text-center">Error: Page not found, the page may have been moved or updated</h3>
      </div>
      <div className="mt-10 flex justify-center items-center z-10">
          <Link 
            href={'/store'}
            className="bg-primary text-neutral px-8 py-4 font-bold rounded-sm flex items-center border gap-2 hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300">
            Back to Home
          </Link>
      </div>
    </main>
  );
};

export default NotFound;
