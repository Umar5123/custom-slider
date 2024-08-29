// $(document).ready(function() {
//     $('.nav-slide').on('click', function() {
//         var slideIndex = $(this).data('slide');
        
//         // Update the active class on the nav-slider
//         $('.nav-slide').removeClass('active');
//         $(this).addClass('active');
        
//         // Slide the main slider
//         $('.slider').css('transform', 'translateX(' + (-slideIndex * 100) + '%)');
//     });

//     // Set the first nav-slide as active on load
//     $('.nav-slide').first().addClass('active');
// });



// $(document).ready(function() {
//     var slideCount = $('.slider .slide').length;
//     var currentIndex = 0;

//     function updateSlider(index) {
//         if (index >= slideCount) {
//             currentIndex = 0;
//         } else if (index < 0) {
//             currentIndex = slideCount - 1;
//         } else {
//             currentIndex = index;
//         }

//         $('.nav-slide').removeClass('active');
//         $('.nav-slide[data-slide="' + currentIndex + '"]').addClass('active');
//         $('.slider').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
//     }

//     updateSlider(0);

//     $('.nav-slide').on('click', function() {
//         var slideIndex = $(this).data('slide');
//         updateSlider(slideIndex);
//     });

//     $('.arrow-right, .nav-arrow-right').on('click', function() {
//         updateSlider(currentIndex + 1);
//     });

//     $('.arrow-left, .nav-arrow-left').on('click', function() {
//         updateSlider(currentIndex - 1);
//     });
// });

$(document).ready(function() {
    var slideCount = $('.slider .slide').length;
    var currentIndex = 0;

    function updateSlider(index) {
        if (index >= slideCount) {
           
            $('.slider').css({
                'transition': 'none',
                'transform': 'translateX(0%)'
            });
            setTimeout(function() {
                $('.slider').css({
                    'transition': 'transform 0.5s ease',
                    'transform': 'translateX(0%)'
                });
                currentIndex = 0;
            }, 50);
        } else if (index < 0) {
            
            $('.slider').css({
                'transition': 'none',
                'transform': 'translateX(' + (- (slideCount - 1) * 100) + '%)'
            });
            setTimeout(function() {
                $('.slider').css({
                    'transition': 'transform 0.5s ease',
                    'transform': 'translateX(' + (- (slideCount - 1) * 100) + '%)'
                });
                currentIndex = slideCount - 1;
            }, 50);
        } else {
            currentIndex = index;
            $('.slider').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
        }

        $('.nav-slide').removeClass('active');
        $('.nav-slide[data-slide="' + currentIndex + '"]').addClass('active');
    }

    updateSlider(0);

    $('.nav-slide').on('click', function() {
        var slideIndex = $(this).data('slide');
        updateSlider(slideIndex);
    });

    $('.arrow-right, .nav-arrow-right').on('click', function() {
        updateSlider(currentIndex + 1);
    });

    $('.arrow-left, .nav-arrow-left').on('click', function() {
        updateSlider(currentIndex - 1);
    });
});







