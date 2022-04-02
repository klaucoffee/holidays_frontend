import { useEffect, useState } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../utils/utils";

function HolidayList() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch(urlcat(BACKEND, "/api/holidays/"))
      .then((response) => response.json())
      .then((data) => setHolidays(data));
  }, []);

  const handleDelete = (id) => () => {
    const url = urlcat(BACKEND, `/api/holidays/${id}`);
    console.log(url);
    fetch(url, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleUpdate = (holiday) => () => {
    const url = urlcat(BACKEND, `/api/holidays/${holiday._id}`);
    const newHoliday = { ...holiday, likes: holiday.likes + 10 }; //adds 10 after refresh

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHoliday),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday._id}>
            {holiday.name} --{" "}
            <button onClick={handleUpdate(holiday)}>{holiday.likes}</button>
            --
            <button onClick={handleDelete(holiday._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HolidayList;
