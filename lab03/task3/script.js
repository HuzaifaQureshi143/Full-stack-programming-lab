// Task 3: Asynchronous Data Loader
// Using Promise, setTimeout, .then() and .catch()

// Boolean flag to control resolve/reject
const shouldResolve = true;

// Function that returns a Promise
const fetchUsers = () => {
    return new Promise((resolve, reject) => {
        // Simulate network delay with 3 seconds setTimeout
        setTimeout(() => {
            if (shouldResolve) {
                // Resolve with array of user objects
                resolve([
                    { id: 1, name: 'Ali Hassan', email: 'ali@example.com', role: 'Developer' },
                    { id: 2, name: 'Fatima Noor', email: 'fatima@example.com', role: 'Designer' },
                    { id: 3, name: 'Bilal Ahmed', email: 'bilal@example.com', role: 'Manager' },
                    { id: 4, name: 'Zainab Malik', email: 'zainab@example.com', role: 'Analyst' }
                ]);
            } else {
                // Reject with an error message
                reject('Error: Failed to fetch users. Server is unavailable.');
            }
        }, 3000);
    });
};

const output = document.getElementById('output');

// Handle using .then() and .catch()
fetchUsers()
    .then((users) => {
        output.innerHTML = `
            <div class="status-banner success">
                <p>✅ <strong>Promise Resolved!</strong> Successfully loaded ${users.length} users after 3 seconds.</p>
            </div>
            <div class="users-grid">
                ${users.map(user => `
                    <div class="user-card">
                        <h3>${user.name}</h3>
                        <p><strong>ID:</strong> ${user.id}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Role:</strong> ${user.role}</p>
                    </div>
                `).join('')}
            </div>
        `;
    })
    .catch((error) => {
        output.innerHTML = `
            <div class="status-banner error">
                <p>❌ <strong>Promise Rejected!</strong></p>
                <p>${error}</p>
            </div>
        `;
    });
