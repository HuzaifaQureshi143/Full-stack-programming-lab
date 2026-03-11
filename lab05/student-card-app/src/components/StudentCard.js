function StudentCard({ name, rollNo, department, university, color }) {
  return (
    <div style={{ backgroundColor: color, padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Roll No: {rollNo}</p>
      <p>Department: {department}</p>
      <p>University: {university}</p>
    </div>
  );
}

export default StudentCard;