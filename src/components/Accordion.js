import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const active = activeIndex === index ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active} ${activeIndex}`}
          onClick={() => setActiveIndex(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active} ${activeIndex}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div>
      <div className="ui styled accordion">{renderedItems}</div>
      <button onClick={() => setActiveIndex(null)}>Collapse all</button>
      <button onClick={() => setActiveIndex("active")}>Expand all</button>
    </div>
  );
};

export default Accordion;
