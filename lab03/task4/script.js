// Task 4: Unique Course Registration System
// Using Set, for...of loop, and .size property

// Use Set to store courses
const courseSet = new Set();

// Array of courses to add (including duplicates)
const coursesToAdd = [
    'Web Development',
    'Data Structures',
    'Database Systems',
    'Web Development',      // Duplicate
    'Machine Learning',
    'Data Structures',      // Duplicate
    'Artificial Intelligence',
    'Machine Learning',     // Duplicate
    'Cyber Security',
    'Web Development'       // Duplicate
];

// Track which additions are duplicates for display
const additionLog = [];
for (const course of coursesToAdd) {
    const isDuplicate = courseSet.has(course);
    additionLog.push({ course, isDuplicate });
    courseSet.add(course); // Duplicates are automatically ignored by Set
}

// Display all unique courses using for...of loop
let uniqueCoursesHTML = '';
for (const course of courseSet) {
    uniqueCoursesHTML += `<div class="unique-course">📚 ${course}</div>`;
}

// Build the addition log HTML
const logHTML = additionLog.map(entry => {
    if (entry.isDuplicate) {
        return `<li class="duplicate">❌ "${entry.course}" <span>(Duplicate - Not Added)</span></li>`;
    }
    return `<li class="added">✅ "${entry.course}" <span>(Added Successfully)</span></li>`;
}).join('');

// Display output in HTML
const output = document.getElementById('output');
output.innerHTML = `
    <div class="card">
        <h2>📝 Course Addition Log</h2>
        <p>Attempted to add ${coursesToAdd.length} courses (including duplicates):</p>
        <ul class="course-list">${logHTML}</ul>
    </div>

    <div class="card">
        <h2>✅ Unique Registered Courses</h2>
        <p><strong>Total Unique Courses (using .size):</strong> <span class="badge">${courseSet.size}</span></p>
        <br>
        ${uniqueCoursesHTML}
    </div>
`;
