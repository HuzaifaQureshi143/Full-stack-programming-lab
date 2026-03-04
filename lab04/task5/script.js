$(document).ready(function () {
    $('#styleBtn1').click(function () {
        $('#textBlock')
            .css('font-size', '24px')
            .css('color', 'red')
            .css('background-color', 'transparent')
            .css('font-weight', 'bold')
            .css('font-style', 'normal');
    });

    $('#styleBtn2').click(function () {
        $('#textBlock')
            .css('font-size', '18px')
            .css('color', 'green')
            .css('background-color', '#eee')
            .css('font-weight', 'normal')
            .css('font-style', 'italic');
    });

    $('#resetBtn').click(function () {
        $('#textBlock').removeAttr('style').css({
            'padding': '20px',
            'border': '1px solid #ccc' // keep the initial border
        });
    });
});
