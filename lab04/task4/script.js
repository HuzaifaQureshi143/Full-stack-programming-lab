$(document).ready(function () {
    $('.tab-btn').click(function () {
        if ($(this).hasClass('active')) return;

        // Reset all tabs
        $('.tab-btn').removeClass('active');
        // Set this tab to active
        $(this).addClass('active');

        let target = $(this).data('target');

        // Hide current visible content, then show the target
        $('.tab-content:visible').slideUp(300, function () {
            // After slide up, animate the new content down
            $(target).slideDown(300);

            // Smooth scroll to the content area
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50
            }, 500);
        });
    });
});
