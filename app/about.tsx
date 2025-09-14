export default function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <header className="w-full flex flex-col items-center border-b-4 border-gold bg-gold pb-2">
        <div className="flex items-center gap-4 mt-4">
          <div className="rounded-full border-4 border-black w-14 h-14 flex items-center justify-center text-center text-xs font-bold text-gold bg-black">
            <span>ALD<br/>Lions</span>
          </div>
          <h1 className="text-5xl font-extrabold text-black tracking-wide drop-shadow-lg">Chess Club</h1>
        </div>
        <nav className="flex gap-8 mt-4 w-full justify-center text-lg font-semibold">
          <a href="/" className="px-4 py-1 rounded hover:bg-black hover:text-gold transition">Home</a>
          <a href="/about" className="px-4 py-1 rounded hover:bg-black hover:text-gold transition">About Us</a>
          <a href="/contact" className="px-4 py-1 rounded hover:bg-black hover:text-gold transition">Contact Info</a>
        </nav>
      </header>
      <main className="flex flex-col items-center p-8 gap-8">
        <h2 className="text-3xl font-bold text-gold mb-4">About Us</h2>
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-32 h-32 bg-black rounded-lg flex-shrink-0 mb-2 md:mb-0"></div>
            <p className="flex-1 text-lg">The ALD Lions Chess Club welcomes players of all skill levels. We meet weekly to play, learn, and compete in a friendly environment.</p>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-4">
            <div className="w-32 h-32 bg-black rounded-lg flex-shrink-0 mb-2 md:mb-0"></div>
            <p className="flex-1 text-lg">Join us for tournaments, lessons, and fun activities. Whether you're a beginner or a seasoned player, there's a place for you here!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
