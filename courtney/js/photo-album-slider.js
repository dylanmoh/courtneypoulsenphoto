jQuery(window).on("load", function () {
    var mySlider = new Slider(this);
    mySlider.initSlider();
});

function Slider(slider) {
    var galleryWrap = $('.photo_gallery-wrap');

    //$('.content_centered').height(($(document).height()) - ($('.site-header').height()));
    var tool_grid = $('.photo_album_tool_bar')[0].children[0];
    var tool_slide = $('.photo_album_tool_bar')[0].children[1];

    var sliderWrap = $('.photo_album_content_centered');
    var slider = $('.photos_list');
    var sliderWidth = $('.photo-slider').width();
    var leftArrow = $('.arrow_left');
    var rightArrow = $('.arrow_right');

    // if ($(window)[0].innerWidth >= 770) {
    //     sliderWrap.show();
    //     galleryWrap.hide();
    //     $(tool_slide).addClass('active');
    // }
    // else {
    galleryWrap.show();
    sliderWrap.hide();
    $(tool_grid).addClass('active');
    // }
    sliderWrap.removeClass('loading-width');
    galleryWrap.removeClass('loading-width');

    var first = $(slider[0].children[0]);
    var second = $(slider[0].children[1]);
    var last = $(slider[0].children[slider[0].childElementCount - 1]);
    var secondLast = $(slider[0].children[slider[0].childElementCount - 2]);

    first.clone().appendTo(slider);
    second.clone().appendTo(slider);
    last.clone().prependTo(slider);
    secondLast.clone().prependTo(slider);

    var positionArr = new Array();
    var tempPrevPosition = 0;
    var tempCurrentPosition = $('.photo_album_wrap').width() / 2;
    var currentIndex = 2;
    var firstIndex = 2;
    var lastIndex = slider[0].childElementCount - 3;
    var currentLeft = $('.photo_album_wrap').width() / 2;
    var gallery = $('.photo_gallery div');

    this.initSlider = function() {
        this.recalculateVars();
        //$(gallery[0]).addClass('photo_gallery_item_selected');
        $('.arrow_div').width(($('.photo_album_wrap').width() - (slider[0].children[currentIndex].scrollWidth)) / 2);
        slider.css({left: positionArr[currentIndex]});
        this.initToolClickEvents();
        this.initSliderClickEvents();
        this.initSliderResizeEvents();
        this.initGalleryClickEvents();
    }

    this.initToolClickEvents = function() {
        var doc = this;
        $(tool_grid).click(function() {
            if (!($(tool_grid).hasClass('active'))) {
                $(tool_slide).removeClass('active');
                $(tool_grid).addClass('active');
                $(sliderWrap).hide();
                $(galleryWrap).show();
            }
        })
        $(tool_slide).click(function() {
            if (!($(tool_slide).hasClass('active'))) {
                $(tool_grid).removeClass('active');
                $(tool_slide).addClass('active');
                $(sliderWrap).show();
                $(galleryWrap).hide();
                doc.recalculateVars();
            }
        })
    }

    this.initSliderClickEvents = function() {
        $(slider).click(function() {
            document.getElementById("picture-overlay").style.display = "block";
            $('.picture-overlay__image').css("background-image", "url(" + $(slider[0].children[currentIndex].children[0])[0].currentSrc + ")");
            $('.picture-overlay__image').css("background-size", "contain");
            $('.picture-overlay__image').css("background-position", "center");
            $('.picture-overlay__image').css("background-repeat", "no-repeat");

        })
        $('#picture-overlay').click(function() {
            document.getElementById("picture-overlay").style.display = "none";
        })
        $(rightArrow).click(function() {
            //$(gallery[currentIndex]).removeClass('photo_gallery_item_selected');
            currentIndex++;
            //$(gallery[currentIndex]).addClass('photo_gallery_item_selected');
            $('.arrow_div').animate({width: (($('.photo_album_wrap').width() - (slider[0].children[currentIndex].scrollWidth)) / 2)}, 600);
            slider.animate({left: positionArr[currentIndex]}, 600);
            if (currentIndex == lastIndex + 1) {
                currentIndex = firstIndex;
                slider.animate({left: (positionArr[currentIndex])}, 0);
            }
        })
        $(leftArrow).click(function() {
            //$(gallery[currentIndex]).removeClass('photo_gallery_item_selected');
            currentIndex--;
            //$(gallery[currentIndex]).addClass('photo_gallery_item_selected');
            $('.arrow_div').animate({width: (($('.photo_album_wrap').width() - (slider[0].children[currentIndex].scrollWidth)) / 2)}, 600);
            slider.animate({left: positionArr[currentIndex]}, 600);
            if (currentIndex == firstIndex - 1) {
                currentIndex = lastIndex;
                slider.animate({left: (positionArr[currentIndex])}, 0);
            }
        })
    }

    this.initSliderResizeEvents = function() {
        var doc = this;
        $(window).resize(function () {
            doc.recalculateVars();
        })
    }

    this.initHorizontalScroll = function() {

    }

    this.initGalleryClickEvents = function() {
        $('.photo_gallery_item').click(function() {
            document.getElementById("picture-overlay").style.display = "block";
            console.log($(this))
            $('.picture-overlay__image').css("background-image", "url(" + $(this)[0].children[0].currentSrc + ")");
            $('.picture-overlay__image').css("background-size", "contain");
            $('.picture-overlay__image').css("background-position", "center");
            $('.picture-overlay__image').css("background-repeat", "no-repeat");
        })
    }

    this.recalculateVars = function() {
        positionArr = new Array();
        tempPrevPosition = 0;
        tempCurrentPosition = $('.photo_album_wrap').width() / 2;
        for (var i = 0; i < slider[0].childElementCount; i++) {
                tempCurrentPosition -= tempPrevPosition;
                tempPrevPosition = slider[0].children[i].clientWidth / 2;
                tempCurrentPosition -= tempPrevPosition;
                positionArr.push(tempCurrentPosition);
        }
        $('.arrow_div').width(($('.photo_album_wrap').width() - (slider[0].children[currentIndex].scrollWidth)) / 2);
        slider.animate({left: (positionArr[currentIndex])}, 0);
    }
}
