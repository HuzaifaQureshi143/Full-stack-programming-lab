import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <h1>Dynamic Greetings</h1>

      <Greeting
        name="Huzaifa"
        timeOfDay="morning"
        bgColor="#fff3cd"
      />

      <Greeting
        name="Aiman"
        timeOfDay="afternoon"
        bgColor="#d1ecf1"
      />

      <Greeting
        name="Sara"
        timeOfDay="evening"
        bgColor="#f8d7da"
      />
    </div>
  );
}

export default App;