import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./counter.style.scss";

const Counter = ({ total = 5 }) => {
  const counter = useRef(null);

  useEffect(() => {
    let runCounter;
    runCounter = setInterval(() => {
      if (total) {
        if (parseInt(counter.current.innerText) < parseInt(total)) {
          counter.current.innerText++;
        }
      }
    }, 300);

    return () => {
      clearInterval(runCounter);
    };
  }, [total]);

  return total ? (
    <h2 className="container" style={{ marginTop: "1em", marginButton: "1em" }}>
      You have a total of <span ref={counter}>0</span> contact
    </h2>
  ) : null;
};

Counter.propTypes = {
  total: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
};

export default Counter;
