export default function Header() {
  return (
    <div className="bg-white p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg mb-6 w-full">
      <h1 className="text-2xl font-bold text-gray-800 text-center md:text-left">
        Welcome Back!
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 hidden sm:inline-block">
          User
        </span>
        <img
          src="/user.webp"
          alt="User"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
}
