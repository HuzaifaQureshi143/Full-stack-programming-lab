$(document).ready(function () {
    function updateOrderText() {
        let order = [];
        $('#sortableList li').each(function () {
            order.push($(this).data('id'));
        });
        $('#currentOrder').text(order.join(', '));

        // Brief highlighting effect to show update occurred
        $('#orderStatusContainer').css('background-color', '#d4edda');
        setTimeout(function () {
            $('#orderStatusContainer').css('background-color', '#e9ecef');
        }, 500);
    }

    // Initialize sortable list using jQuery UI
    $("#sortableList").sortable({
        placeholder: "ui-sortable-placeholder", // Use custom class for placeholder
        update: function (event, ui) {
            // Triggered when order is changed
            updateOrderText();
        }
    });

    // Prevent text selection while dragging
    $("#sortableList").disableSelection();
});
