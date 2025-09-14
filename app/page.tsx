import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      {/* Header */}
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

      {/* Intro Section */}
      <section className="w-full max-w-4xl mx-auto mt-8 mb-4 px-4">
        <p className="text-xl md:text-2xl text-center font-medium">
          Welcome to the ALD Lions Chess Club Dashboard! Here you can find information about upcoming tournaments, club news, and resources to help you improve your chess game. Explore the links below to get started.
        </p>
      </section>

      {/* Main Content */}
      <main className="flex flex-1 flex-col md:flex-row gap-8 p-6 md:p-12">
        {/* Left: Upcoming Tournaments */}
        <section className="flex-1 bg-[#f5f5f5] rounded-xl shadow-lg p-6 flex flex-col border-2 border-gold">
          <h2 className="text-2xl font-bold text-gold mb-4">Upcoming Tournaments</h2>
          <div className="flex-1 flex items-center justify-center bg-black/10 rounded-lg min-h-[250px]">
            {/* Google Calendar Embed Placeholder */}
            <span className="text-xl text-gold/80">Google Calendar</span>
          </div>
        </section>

        {/* Right: Empty for now */}
        <section className="flex-1 flex flex-col gap-8"></section>
      </main>

      {/* Previous Tournament Standings */}
      <section className="mx-auto w-full max-w-3xl bg-[#f5f5f5] rounded-full border-2 border-gold shadow-lg py-3 px-8 text-center text-lg font-semibold text-gold mb-6">
        Previous Tournament Standings
      </section>

      {/* External Links */}
      <section className="flex flex-col items-center mb-8">
        <h3 className="text-xl font-bold text-gold mb-4">External Links:</h3>
        <div className="flex gap-8">
          <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer" className="w-32 h-32 bg-gold text-black rounded-lg flex items-center justify-center font-bold text-center shadow-lg border-4 border-black hover:bg-white transition">
            Google<br/>Classroom
          </a>
          <a href="https://www.chess.com/club/ald-lions" target="_blank" rel="noopener noreferrer" className="w-32 h-32 bg-gold text-black rounded-lg flex items-center justify-center font-bold text-center shadow-lg border-4 border-black hover:bg-white transition">
            Chess.com<br/>ALD-Lions<br/>Club
          </a>
        </div>
      </section>
    </div>
  );
}
