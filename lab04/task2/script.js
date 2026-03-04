$(document).ready(function () {
    const images = [
        { src: "https://picsum.photos/seed/gallery1/400/300", caption: "Caption 1: A beautiful placeholder image." },
        { src: "https://picsum.photos/seed/gallery2/400/300", caption: "Caption 2: Another fascinating placeholder." },
        { src: "https://picsum.photos/seed/gallery3/400/300", caption: "Caption 3: The ultimate placeholder image." }
    ];
    let currentIndex = 0;

    function updateGallery() {
        $('#galleryImage').fadeOut(300, function () {
            $(this).attr('src', images[currentIndex].src).fadeIn(300);
        });
        $('#imageCaption').fadeOut(300, function () {
            $(this).text(images[currentIndex].caption).fadeIn(300);
        });
    }

    $('#nextBtn').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    $('#prevBtn').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });
});
