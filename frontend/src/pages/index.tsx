import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Welcome to NutriMeds 🌱
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center px-4">
          Upload your prescription, detect medicines, plan safe meals, and get recovery support — all in one place.
        </p>
        <a
          href="/prescription"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
