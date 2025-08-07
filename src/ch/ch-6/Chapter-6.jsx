import React from "react";

import UseStateBasics from "./1-useStateBasics";
import UpdateStateStructures from "./2-UpdateStateStructures.jsx"; // Importing the Update State Structures component
import UseEffectBasics from "./3-UseEffectBasics.jsx"; // Importing the Use Effect Basics component
import UseEffectWithDeeps from "./4-UseEffectWithDeeps.jsx"; // Importing the Use Effect with Dependencies component
import UseEffectCleanup from "./5-UseEffectCleanup.jsx"; // Importing the Use Effect Cleanup component
import UseEffectCleanupWithDeeps from "./6-UseEffectCleanupDeps.jsx";
const Chapter6 = () => {
  return (
    <React.Fragment>
      <section>
        <h2>Part 1 : Use State Fundamentals</h2>
        <UseStateBasics />
      </section>
      <section>
        <h2>Part 2 : Update State Structures</h2>
        <UpdateStateStructures />
      </section>
      <section>
        <h2>Part 3 : useEffect Basics</h2>
        <UseEffectBasics />
      </section>
      <section>
        <h2>Part 4 : useEffect with Dependencies</h2>
        <UseEffectWithDeeps />
      </section>
      <section>
        <h2>Part 5 : useEffect Cleanup</h2>
        <UseEffectCleanup />
      </section>
      <section>
        <h2>Part 6 : useEffect Cleanup with Dependencies</h2>
        <UseEffectCleanupWithDeeps />
      </section>
    </React.Fragment>
  );
};

export default Chapter6;
