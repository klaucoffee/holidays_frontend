// import { useEffect, useState } from "react";

// const BACKEND = process.env.REACT_APP_BACKEND; // "http://localhost:2000";
// const url = BACKEND + "/api/holidays";
// const data = { name: "mybirthday", likes: 10 };
// console.log(url);

// function Create() {
//   // OPTION 1
//   //   const createHoliday = (holiday) => {
//   //     fetch(url, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(holiday),
//   //     })
//   //       .then((response) => response.json())
//   //       .then((data) => console.log(data));
//   //   };
//   //   const handleSubmit = (event) => {
//   //     event.preventDefault();
//   //     const form = event.target.elements;
//   //     const { name, likes } = form; //what is this line doing?
//   //     console.log({ name: form.name.value, likes: form.likes.value });
//   //     // createHoliday({ name: '', likes: ''} )
//   //   };
//   //   return (
//   //     <>
//   //       <form onSubmit={handleSubmit}>
//   //         Name:
//   //         <input type="text" name="name" />
//   //         <br />
//   //         Likes:
//   //         <input type="number" name="likes" /> <br />
//   //         <button>Create</button>
//   //       </form>
//   //     </>
//   //   );

//   const [name, setName] = useState("");
//   const [likes, setLikes] = useState(0);
//   const [error, setError] = useState("");

//   const createHoliday = (holiday) => {
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(holiday),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         if (data.error) {
//           setError(data.error);
//         }
//       });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const holiday = { name, likes };
//     createHoliday(holiday);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         Name:
//         <input
//           type="text"
//           name="name"
//           required
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//         <br />
//         Likes:
//         <input
//           type="number"
//           name="likes"
//           value={likes}
//           onChange={(event) => setLikes(event.target.value)}
//         />
//         <p>{error}</p>
//         <br />
//         <button>Create</button>
//       </form>
//     </>
//   );
// }

// export default Create;

import { useState } from "react";
import urlcat from "urlcat";

const BACKEND = process.env.REACT_APP_BACKEND;
//const BACKEND = "http://localhost:2000";

const url = urlcat(BACKEND, "/api/holidays");

function Create() {
  const [name, setName] = useState("");
  const [likes, setLikes] = useState(0);
  const [error, setError] = useState("");

  const createHoliday = (holiday) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holiday),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const holiday = { name, likes };

    console.log(holiday);
    createHoliday(holiday);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        Likes:
        <input
          type="number"
          name="likes"
          value={likes}
          onChange={(event) => setLikes(event.target.value)}
        />
        <p>{error}</p>
        <br />
        <button>Create</button>
      </form>
    </>
  );
}

export default Create;
