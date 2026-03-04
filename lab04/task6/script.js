$(document).ready(function () {
    let currentPage = 1;
    let limit = 3; // Fetch 3 users at a time to demonstrate pagination/load more

    function fetchUsers(page) {
        $('#loadingMsg').show();
        $('#loadMoreBtn').prop('disabled', true);

        // Fetch user data from JSONPlaceholder API
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`,
            method: 'GET',
            success: function (data) {
                if (data.length > 0) {
                    data.forEach(function (user) {
                        let userCard = $(`
                            <li class="user-card" style="display:none;">
                                <h3>${user.name} (@${user.username})</h3>
                                <p>Email: ${user.email}</p>
                                <p>Company: ${user.company.name}</p>
                            </li>
                        `);
                        $('#userList').append(userCard);
                        userCard.fadeIn(400); // Animation on append
                    });

                    if (data.length < limit) {
                        // If we received fewer items than the limit, we're at the end
                        $('#loadMoreBtn').hide();
                    }
                } else {
                    $('#loadMoreBtn').hide(); // No more data
                }
            },
            error: function () {
                alert("Failed to fetch data. Please try again later.");
            },
            complete: function () {
                $('#loadingMsg').hide();
                $('#loadMoreBtn').prop('disabled', false);
            }
        });
    }

    // Initial fetch on page load
    fetchUsers(currentPage);

    // Event listener for Load More button
    $('#loadMoreBtn').click(function () {
        currentPage++;
        fetchUsers(currentPage);
    });
});
