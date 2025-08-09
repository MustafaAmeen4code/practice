import React from "react";

import "./App.css";

// import "./ch/ch-2/part-6-react-es6-usage.js"; // Importing the ES6 usage example
import Chapter3 from "./ch/ch-3/chapter-3.jsx"; // Importing Chapter
import Chapter4 from "./ch/ch-4/chapter-4.jsx"; // Importing Chapter 4
import Chapter6 from "./ch/ch-6/Chapter-6.jsx"; // Importing Chapter 6
import Chapter7 from "./ch/ch-7/main.jsx"; // Importing Chapter 7

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
      <section>
        <h1>Chapter 7: React Router</h1>
        <Chapter7 />
      </section>
    </React.Fragment>
  );
}

export default App;
