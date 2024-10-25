const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-main-background-light dark:bg-main-background-dark transition-colors duration-300">
      <div className="relative flex items-center justify-center">
        <span className="text-5xl font-extrabold text-primary-color-light dark:text-primary-color-dark animate-bounce">
          DB
        </span>
        <div className="absolute inset-0 w-20 h-20 border-4 border-primary-color-light dark:border-primary-color-dark rounded-full animate-spin-fast border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loader;
