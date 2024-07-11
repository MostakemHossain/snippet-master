export default function CTASection() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 max-sm:p-4">
      <h1 className="text-3xl text-[#8338ec] md:text-4xl lg:text-5xl font-bold text-center mb-4">
        Organize Your Code Snippets
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-center max-sm:text-sm mb-6">
        Keep all your code snippets organized and easily accessible. Join our
        community to start organizing your code efficiently.
      </p>
      <button className="bg-[#8338ec] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
}
