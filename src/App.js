import React from "react";
import Accordion from "./components/Accordion";

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
      <Accordion items={items} />
    </div>
  );
};

export default App;
