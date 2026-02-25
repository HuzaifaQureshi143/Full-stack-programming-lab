// Task 1: Student Management System using ES6 Class

class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    getCard() {
        const courseTags = this.courses
            .map(course => `<span class="course-tag">${course}</span>`)
            .join('');

        return `
            <div class="student-card">
                <h2>${this.name}</h2>
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Semester:</strong> ${this.semester}</p>
                <p><strong>Courses:</strong></p>
                <div class="courses">${courseTags}</div>
            </div>
        `;
    }
}

// Using const for values that won't be reassigned
const students = [
    new Student(101, 'Ahmed Khan', 3, ['Web Development', 'Database Systems', 'Data Structures']),
    new Student(102, 'Sara Ali', 5, ['Machine Learning', 'Software Engineering', 'Cloud Computing']),
    new Student(103, 'Usman Raza', 7, ['Artificial Intelligence', 'Cyber Security', 'Mobile App Dev'])
];

// Using let for the variable that accumulates HTML
let html = '';
for (const student of students) {
    html += student.getCard();
}

// Display all student details dynamically using innerHTML
const output = document.getElementById('output');
output.innerHTML = html;
