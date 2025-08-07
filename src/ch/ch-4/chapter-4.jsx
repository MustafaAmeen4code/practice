import React from "react";

import UsersInfo from "./1-users-info";
import ChildrenExample from "./2-children-card";
import PropsVsState from "./3-props-vs-state";
import RaisingEvents from "./4-raising-events";

const Chapter4 = () => {
  return (
    <React.Fragment>
      <section>
        <h2>Part 1 : Rendering Dynamic Lists With Props</h2>
        <UsersInfo />
      </section>
      <section>
        <h2>Part 2 : Passing Children To Component</h2>
        <ChildrenExample />
      </section>
      <section>
        <h2>Part 3 : Props VS State</h2>
        <PropsVsState />
      </section>
      <section>
        <h2>Part 4 : Raising Events</h2>
        <RaisingEvents />
      </section>
    </React.Fragment>
  );
};

export default Chapter4;
