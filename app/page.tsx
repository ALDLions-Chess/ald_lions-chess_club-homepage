import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#214E34] text-white flex flex-col font-sans">
      {/* Header */}
      <header className="w-full flex flex-col items-center border-b-4 border-[#FFC857] bg-[#FFC857] pb-2">
        <div className="flex items-center gap-4 mt-4">
          <div className="rounded-full border-4 border-[#3B2C35] w-14 h-14 flex items-center justify-center text-center text-xs font-bold text-[#FFC857] bg-[#2A1F2D]">
            <span>ALD<br/>Lions</span>
          </div>
          <h1 className="text-5xl font-extrabold text-[#3B2C35] tracking-wide drop-shadow-lg">Chess Club</h1>
        </div>
        <nav className="flex gap-8 mt-4 w-full justify-center text-lg font-semibold">
          <Link href="/" className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">Home</Link>
          <a href="/about" className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">About Us</a>
          <a href="/contact" className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">Contact Info</a>
        </nav>
      </header>

      {/* Intro Section */}
      <section className="w-full max-w-4xl mx-auto mt-8 mb-4 px-4">
        <p className="text-xl md:text-2xl text-center font-medium text-white">
          Welcome to the Aldershot Lions Chess Club Dashboard! Here you can find information about upcoming tournaments, club news, and resources to help you improve your chess game. Explore the links below to get started.
        </p>
      </section>

      {/* Main Content */}
      <main className="flex flex-1 flex-col md:flex-row gap-8 p-6 md:p-12">
        {/* Left: Upcoming Tournaments */}
        <section className="flex-1 bg-[#2A1F2D] rounded-xl shadow-lg p-6 flex flex-col border-2 border-[#FFC857]">
          <h2 className="text-2xl font-bold text-[#FFC857] mb-4">Upcoming Tournaments</h2>
          <div className="flex-1 flex items-center justify-center bg-[#3B2C35] rounded-lg min-h-[250px]">
            <iframe src="https://calendar.google.com/calendar/embed?src=aldershotchessclub%40gmail.com&ctz=America%2FToronto" className="border: 0" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>
        </section>

        {/* Right: Empty for now */}
        <section className="flex-1 flex flex-col gap-8"></section>
      </main>

      {/* Previous Tournament Standings */}
      <section className="mx-auto w-full max-w-3xl bg-[#2A1F2D] rounded-full border-2 border-[#FFC857] shadow-lg py-3 px-8 text-center text-lg font-semibold text-[#FFC857] mb-6">
        <a href="https://docs.google.com/document/d/1Fa2NjzGUbsQ0fo5PZ1vPuijxTY80WMLO83s8r6nH7gI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className = "hover:text-[#2FBF71] transition">
            Previous Tournament Standings
          </a>
      </section>

      {/* External Links */}
      <section className="flex flex-col items-center mb-8">
        <h3 className="text-xl font-bold text-[#FFC857] mb-4">External Links:</h3>
        <div className="flex gap-8">
          <a href="https://classroom.google.com/c/NTAwOTQ3NDk0OTUz?cjc=tvlxdn6" target="_blank" rel="noopener noreferrer" className="w-32 h-32 bg-[#FFC857] text-[#2A1F2D] rounded-lg flex items-center justify-center font-bold text-center shadow-lg border-4 border-[#3B2C35] hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">
            Google<br/>Classroom
          </a>
          <a href="https://lichess.org/team/ald-lions-chess-club" target="_blank" rel="noopener noreferrer" className="w-32 h-32 bg-[#FFC857] text-[#2A1F2D] rounded-lg flex items-center justify-center font-bold text-center shadow-lg border-4 border-[#3B2C35] hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">
            LiChess<br/>ALD-Lions<br/>Chess Club
          </a>
        </div>
      </section>
    </div>
  );
}
