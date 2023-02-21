import React, { useEffect, useState } from "react";

function Timer({ reset, setReset }) {
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecs((prev) => prev + 1);
      if (reset) {
        setSecs(1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [reset]);

  return (
    <div className="timer">
      <h2>
        {Math.floor(secs / 60)}:{Math.floor(secs % 60)}
      </h2>
    </div>
  );
}

export default Timer;
