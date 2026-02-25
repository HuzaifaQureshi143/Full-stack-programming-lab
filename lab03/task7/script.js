// Task 7: Student Data Using JSON
// Using JSON.stringify(), JSON.parse(), Destructuring, forEach/map

// Create 3 student objects
const students = [
    {
        id: 101,
        name: 'Ahmed Khan',
        semester: 3,
        gpa: 3.7,
        courses: ['Web Development', 'Database Systems', 'Data Structures']
    },
    {
        id: 102,
        name: 'Sara Ali',
        semester: 5,
        gpa: 3.9,
        courses: ['Machine Learning', 'Software Engineering', 'Cloud Computing']
    },
    {
        id: 103,
        name: 'Usman Raza',
        semester: 7,
        gpa: 3.5,
        courses: ['Artificial Intelligence', 'Cyber Security']
    }
];

// Convert to JSON string using JSON.stringify()
const jsonString = JSON.stringify(students, null, 2);

// Convert back using JSON.parse()
const parsedStudents = JSON.parse(jsonString);

// Use destructuring to extract properties from first student
const { id, name, semester, gpa, courses } = parsedStudents[0];

// Use forEach to loop and map to build HTML for all students
let studentCardsHTML = '';
parsedStudents.forEach((student) => {
    const courseTags = student.courses
        .map(course => `<span class="course-tag">${course}</span>`)
        .join('');

    studentCardsHTML += `
        <div class="student-card">
            <h3>${student.name}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Semester:</strong> ${student.semester}</p>
            <p><strong>GPA:</strong> ${student.gpa}</p>
            <div class="course-tags">${courseTags}</div>
        </div>
    `;
});

// Display all information dynamically in HTML
const output = document.getElementById('output');
output.innerHTML = `
    <div class="card">
        <h2>📝 Original Student Objects → JSON.stringify()</h2>
        <p>Converted student array to JSON string:</p>
        <div class="json-block">${jsonString}</div>
    </div>

    <div class="card">
        <h2>🔄 JSON.parse() → Back to Objects</h2>
        <p>Parsed JSON string back into JavaScript objects. Type: <strong>${typeof parsedStudents}</strong> | Array: <strong>${Array.isArray(parsedStudents)}</strong> | Length: <strong>${parsedStudents.length}</strong></p>
    </div>

    <div class="card">
        <h2>🔍 Destructured Properties (First Student)</h2>
        <p>Using: <code>const { id, name, semester, gpa, courses } = parsedStudents[0];</code></p>
        <div class="destructured">
            <p><strong>id:</strong> ${id}</p>
            <p><strong>name:</strong> ${name}</p>
            <p><strong>semester:</strong> ${semester}</p>
            <p><strong>gpa:</strong> ${gpa}</p>
            <p><strong>courses:</strong> ${courses.join(', ')}</p>
        </div>
    </div>

    <div class="card">
        <h2>👨‍🎓 All Students (forEach + map)</h2>
        <p>Looped using forEach and built course tags using map:</p>
        <div class="student-grid">${studentCardsHTML}</div>
    </div>
`;
