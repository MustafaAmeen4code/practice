import React from "react";

import "./App.css";

// import "./ch/ch-2/part-6-react-es6-usage.js"; // Importing the ES6 usage example
import Chapter3 from "./ch/ch-3/chapter-3.jsx"; // Importing Chapter
import Chapter4 from "./ch/ch-4/chapter-4.jsx"; // Importing Chapter 4
import Chapter6 from "./ch/ch-6/Chapter-6.jsx"; // Importing Chapter 6
import Chapter10 from "./ch/ch-10/Chapter10.jsx"; // Importing Chapter 7
import LoginForm from "./ch/ch-9/LoginForm.jsx";
import Chapter7 from "./ch/ch-7/main";

function App() {
  return (
    <React.Fragment>
      <section
        style={{
          display: "none",
        }}
      >
        <h1>Chapter 3</h1>
        <Chapter3 />
      </section>
      <section style={{ display: "none" }}>
        <h1>Chapter 4: Advanced React Concepts</h1>
        <Chapter4 />
      </section>
      <section style={{ display: "none" }}>
        <h1>Chapter 6: Hooks Basics</h1>
        <Chapter6 />
      </section>
      <section style={{ display: "none" }}>
        <h1>Chapter 7: React Router</h1>
        <Chapter7 />
      </section>
      <section style={{ display: "none" }}>
        <h1>Chapter 9: React Form</h1>
        <LoginForm />
      </section>
      <section>
        <h1>Chapter 10: Fetching Data</h1>
        <Chapter10 />
      </section>
    </React.Fragment>
  );
}

export default App;
