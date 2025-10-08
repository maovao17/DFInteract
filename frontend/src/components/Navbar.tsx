import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white py-4 px-8 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">Nutrimeds</h1>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link href="/prescription" className="hover:text-yellow-300">Upload Prescription</Link>
        </li>
        <li>
          <Link href="/medicines" className="hover:text-yellow-300">Detected Medicines</Link>
        </li>
        <li>
          <Link href="/meal-plan" className="hover:text-yellow-300">Meal Safety</Link>
        </li>
        <li>
          <Link href="/recovery" className="hover:text-yellow-300">Recovery</Link>
        </li>
      </ul>
    </nav>
  );
}
