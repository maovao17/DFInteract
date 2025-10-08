import { useState } from "react";
import api from "../services/api";

export default function Recovery() {
  const [userId, setUserId] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const fetchRecovery = async () => {
    try {
      const res = await api.get(`/recovery/${userId}`);
      setSuggestions(res.data.recoverySuggestions);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Recovery Suggestions</h1>

      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border px-3 py-2 rounded mr-2"
      />
      <button onClick={fetchRecovery} className="bg-blue-500 text-white px-4 py-2 rounded">
        Fetch
      </button>

      <div className="mt-6">
        {suggestions.map((s, i) => (
          <div key={i} className="border p-3 mb-3 rounded">
            <h2 className="font-semibold">{s.drug}</h2>
            <p>Category: {s.category}</p>
            <p>Recommended Foods: {s.recommendedFoods.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
