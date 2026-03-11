import './App.css';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="App">
      <h1>Student Information Cards</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <StudentCard
          name="Huzaifa Qureshi"
          rollNo="231975"
          department="Software Engineering"
          university="Air University"
          color="#a6a08f"
        />

        <StudentCard
          name="ABC"
          rollNo="231975-v2"
          department="Software Engineering"
          university="Air University"
          color="#90dbf4"
        />

        <StudentCard
          name="XYZ"
          rollNo="231975-v2"
          department="Information Technology"
          university="Air University"
          color="#85b15e"
        />
      </div>
    </div>
  );
}

export default App;