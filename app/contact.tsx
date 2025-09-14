export default function Contact() {
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
        <h2 className="text-3xl font-bold text-gold mb-4">Contact Info</h2>
        <ul className="text-lg space-y-4 bg-[#f5f5f5] rounded-xl border-2 border-gold shadow-lg p-8 w-full max-w-xl">
          <li>Email: <a href="mailto:chess@aldlions.org" className="text-gold underline">chess@aldlions.org</a></li>
          <li>Room: 101B, Main Building</li>
          <li>Advisor: Mr. Smith</li>
          <li>Meetings: Fridays, 3:30pm</li>
        </ul>
      </main>
    </div>
  );
}
