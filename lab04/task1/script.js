$(document).ready(function() {
    $('#addItemBtn').click(function() {
        let itemText = $('#itemInput').val();
        if (itemText.trim() !== "") {
            let listItem = $('<li class="list-item"></li>').text(itemText);
            let deleteBtn = $('<button class="delete-btn">Delete</button>');
            
            listItem.append(deleteBtn);
            $('#itemList').append(listItem);
            $('#itemInput').val('');
        }
    });

    $('#itemList').on('click', '.delete-btn', function() {
        $(this).parent().remove();
    });

    $('#itemList').on('mouseenter', '.list-item', function() {
        $(this).addClass('highlight');
    }).on('mouseleave', '.list-item', function() {
        $(this).removeClass('highlight');
    });
});
