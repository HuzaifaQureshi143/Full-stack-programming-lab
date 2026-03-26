import { useState } from "react";

function Actions() {
  const [message, setMessage] = useState("");
  const [bg, setBg] = useState("#eef2f7");
  const [hover, setHover] = useState(false);

  return (
    <div className="page" style={{ background: bg }}>
      <div className="panel">
        <h2>Event Actions</h2>

        <button onClick={() => setMessage("Message displayed!")}>
          Show Message
        </button>

        <button onClick={() => setBg("#d1fae5")}>
          Change Background
        </button>

        <button onClick={() => alert("Alert triggered")}>
          Show Alert
        </button>

        <div
          className="message"
          style={{ color: hover ? "#dc2626" : "#111" }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {message}
        </div>
      </div>
    </div>
  );
}

export default Actions;