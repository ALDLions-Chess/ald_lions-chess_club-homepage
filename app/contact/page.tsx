import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#214E34] text-white flex flex-col font-sans">
      <header className="w-full flex flex-col items-center border-b-4 border-[#FFC857] bg-[#FFC857] pb-2">
        <div className="flex items-center gap-4 mt-4">
          <div className="rounded-full border-4 border-[#3B2C35] w-14 h-14 flex items-center justify-center text-center text-xs font-bold text-[#FFC857] bg-[#2A1F2D]">
            <span>ALD<br/>Lions</span>
          </div>
          <h1 className="text-5xl font-extrabold text-[#3B2C35] tracking-wide drop-shadow-lg">Chess Club</h1>
        </div>
        <nav className="flex gap-8 mt-4 w-full justify-center text-lg font-semibold">
          <Link href="/" className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">Home</Link>
          <Link href="/about" className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">About Us</Link>
          <Link
            href="https://lichess.org/learn#/lessons"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition"
          >
            Lessons
          </Link>
          <Link href="/contact" className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">Contact Info</Link>
        </nav>
      </header>
      <main className="flex flex-col items-center p-8 gap-8">
        <h2 className="text-3xl font-bold text-[#FFC857] mb-4">Contact Info</h2>
        <ul className="text-lg space-y-4 bg-[#2A1F2D] rounded-xl border-2 border-[#FFC857] shadow-lg p-8 w-full max-w-xl">
          <li>Email: <a href="mailto:aldershotchessclub@gmail.com" className="text-[#FFC857] underline">aldershotchessclub@gmail.com</a></li>
          <li>Room: 133, Library</li>
          <li>Advisor: Madame. Riley</li>
          <li>Availability: Monday-Friday, 11:00am-11:50am</li>
        </ul>
      </main>
    </div>
  );
}
