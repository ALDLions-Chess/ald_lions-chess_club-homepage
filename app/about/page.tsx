import Link from "next/link";
export default function About() {
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
          <Link href="/contact" className="px-4 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">Contact Info</Link>
        </nav>
      </header>
      <main className="flex flex-col items-center p-8 gap-8">
        <h2 className="text-3xl font-bold text-[#FFC857] mb-4">About Us</h2>
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-32 h-32 bg-[#2A1F2D] rounded-lg flex-shrink-0 mb-2 md:mb-0"></div>
            <p className="flex-1 text-lg">The ALD Lions Chess Club welcomes players of all skill levels. We meet weekly to play, learn, and compete in a friendly environment.</p>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-4">
            <div className="w-32 h-32 bg-[#2A1F2D] rounded-lg flex-shrink-0 mb-2 md:mb-0"></div>
            <p className="flex-1 text-lg">Join us for tournaments, lessons, and fun activities. Whether you&apos;re a beginner or a seasoned player, there&apos;s a place for you here!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
