import { useEffect, useState } from "react";
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND; // "http://localhost:2000";
console.log(BACKEND);
function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND}/api/holidays/seed/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setSeed(data));
  }, []);

  return (
    <>
      <h1>Seed 2</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;
