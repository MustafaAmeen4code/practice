import { ThemeProvider } from "./Part1-useContext/ThemeContext";
import Toolbar from "./Part1-useContext/Toolbar";
import Counter from "./part2-useReducer/Counter";
import Parent from "./part3-memo&useCallback/Parent";
import Calc from "./part4-useMemo/Calc";
import InputFocus from "./part5-useRef/InputFocus";
import CustomCounter from "./part6-CustomHook/CustomCounter";
const Chapter11 = () => {
  return (
    <>
      <section>
        <h2>Part 1 Context + useContext Demo</h2>
        <ThemeProvider>
          <Toolbar />
        </ThemeProvider>
      </section>
      <section>
        <h2>Part 2 useReducer Demo</h2>
        <Counter />
      </section>
      <section>
        <h2>Part 3 React.memo & useCallback Demo</h2>
        <Parent />
      </section>
      <section>
        <h2>Part 4 useMemo Demo</h2>
        <Calc />
      </section>
      <section>
        <h2>Part 5 useRef Demo</h2>
        <InputFocus />
      </section>
      <section>
        <h2>Part 6 Custom Hook Demo</h2>
        <CustomCounter />
      </section>
    </>
  );
};

export default Chapter11;
