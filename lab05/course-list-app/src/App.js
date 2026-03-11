import CourseItem from "./components/CourseItem";

function App() {

  const courses = [
    {
      courseName: "Web Development",
      instructor: "Mr. Shareef Hussain",
      duration: "3 Months",
      type: "Offline"
    },
    {
      courseName: "Requirement Engineering",
      instructor: "Mr. Naseer Jan",
      duration: "4 Months",
      type: "Offline"
    },
    {
      courseName: "Gen Ai",
      instructor: "Dr. Humaira",
      duration: "2 Months",
      type: "Online"
    },
    {
      courseName: "Mobile App Dev",
      instructor: "Mr. Adnan",
      duration: "3 Months",
      type: "Offline"
    },
    {
      courseName: "Cloud Computing",
      instructor: "Ayesha Noor",
      duration: "2.5 Months",
      type: "Online"
    }
  ];

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Course List</h1>

      {courses.map((course, index) => (
        <CourseItem
          key={index}
          courseName={course.courseName}
          instructor={course.instructor}
          duration={course.duration}
          type={course.type}
        />
      ))}
    </div>
  );
}

export default App;