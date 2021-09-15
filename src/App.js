import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is ",
  },
  {
    title: "How you use React?",
    content: "By creating components",
  },
  {
    title: "Some question will be here?",
    content: "Some content will displayed here!",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
