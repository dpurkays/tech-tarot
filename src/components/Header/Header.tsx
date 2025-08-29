function Header() {
  return (
    <header className="flex flex-col justify-center items-center bg-purple-900 pt-4 lg:gap-4">
      <h1 className="text-3xl lg:text-5xl font-audiowide bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Tech Tarot
      </h1>
      <p className="text-amber-400">Divination for Developers</p>
    </header>
  );
}

export default Header;
