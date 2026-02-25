// Task 6: Mini University Portal

class Student {
    constructor(id, name, semester) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = new Set();
    }

    registerCourse(course) {
        this.courses.add(course);
    }

    getCourseList() {
        let courseTags = '';
        for (const course of this.courses) {
            courseTags += `<span class="course-tag">${course}</span>`;
        }
        return courseTags;
    }
}

const studentMap = new Map();

const student1 = new Student('S001', 'Ahmed Khan', 3);
student1.registerCourse('Web Development');
student1.registerCourse('Database Systems');
student1.registerCourse('Web Development');

const student2 = new Student('S002', 'Sara Ali', 5);
student2.registerCourse('Machine Learning');
student2.registerCourse('Software Engineering');
student2.registerCourse('Machine Learning');

const student3 = new Student('S003', 'Usman Raza', 7);
student3.registerCourse('Artificial Intelligence');
student3.registerCourse('Cyber Security');
student3.registerCourse('Cloud Computing');

studentMap.set(student1.id, student1);
studentMap.set(student2.id, student2);
studentMap.set(student3.id, student3);

const saveData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Successfully saved ${data.size} students to the database!`);
        }, 2000);
    });
};

const output = document.getElementById('output');

saveData(studentMap)
    .then((message) => {
        let studentsHTML = '';
        for (const [id, student] of studentMap) {
            studentsHTML += `
                <div class="student-block">
                    <h3>${student.name}</h3>
                    <p><strong>ID:</strong> ${id}</p>
                    <p><strong>Semester:</strong> ${student.semester}</p>
                    <p><strong>Total Courses:</strong> ${student.courses.size}</p>
                    <div class="course-tags">${student.getCourseList()}</div>
                </div>
            `;
        }

        output.innerHTML = `
            <div class="status-banner">
                <p><strong>${message}</strong></p>
            </div>

            <div class="card">
                <h2>University Portal - Student Directory</h2>
                <p><strong>Total Students:</strong> <span class="badge">${studentMap.size}</span></p>
            </div>

            <div class="card">
                <h2>Registered Students &amp; Courses</h2>
                ${studentsHTML}
            </div>
        `;
    })
    .catch((error) => {
        output.innerHTML = `<div class="card"><h2>Error</h2><p>${error}</p></div>`;
    });
