import React from "react";
import FunComponent from "./1-1-function-component";
import ClassComponent from "./1-2-class-component";
import JsInJsx from "./2-js-in-jsx";
import AttributesAndStyles from "./3-attributes-and-styles";
import RenderingList from "./4-rendering-list";
import ConditionalRender from "./5-conditional-render";
import EventHandling from "./6-event-handling";

function Chapter3() {
  return (
    <React.Fragment>
      <section>
        <h2>Part 1-1: Function Component</h2>
        <FunComponent />
      </section>
      <section>
        <h2>Part 1-2: Class Component</h2>
        <ClassComponent />
      </section>
      <section>
        <h2>Part 2: JSX in JavaScript</h2>
        <JsInJsx />
      </section>
      <section>
        <h2>Part 3: Attributes and Styles</h2>
        <AttributesAndStyles />
      </section>
      <section>
        <h2>Part 4: Rendering a list of items</h2>
        <RenderingList />
      </section>
      <section>
        <h2>Part 5: Conditional Rendering</h2>
        <ConditionalRender />
      </section>
      <section>
        <h2>Part 6: Event Handling</h2>
        <EventHandling />
      </section>
    </React.Fragment>
  );
}

export default Chapter3;
