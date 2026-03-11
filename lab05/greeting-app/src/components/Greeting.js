function Greeting({ name, timeOfDay, bgColor }) {

  let message = "";

  if (timeOfDay === "morning") {
    message = "Good Morning";
  } else if (timeOfDay === "afternoon") {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        textAlign: "center",
        width: "300px"
      }}
    >
      <h3>{message}, {name}!</h3>
    </div>
  );
}

export default Greeting;