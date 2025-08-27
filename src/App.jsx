// src/App.jsx
import { useEffect, useState } from "react";

const GAS_URL = "https://script.google.com/macros/s/AKfycbykGQhqNv-wSqAdcnnENI-fbnOmQwK3RkK6gbeQ98H9ZRXwatYIuGU5bNmyVl8csLUEvg/exec"; // replace bằng web app URL thật

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "getInitData" }),
    })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>My PWA App</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
