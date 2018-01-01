jQuery(document).ready(function () {
	var slider = $('.photos_list');
	var sliderWidth = $('.photo-slider').width();
	var leftArrow = $('.left-arrow');
	var rightArrow = $('.right-arrow');

    var widthsArr = new Array();
    for (var i = 0; i < slider[0].childElementCount; i++) {
        if ($($('.photos_list div')[i]).hasClass('portrait')) {
            widthsArr.push('portrait');
        }
        else {
            widthsArr.push('landscape');
        }
    }

	var gallery = $('.photo_gallery div');

	var currentIndex = 0;
	var firstIndex = 0;
	var lastIndex = slider[0].childElementCount - 1;
    var currentLeft = 0;
    var nextLeft = 0;
	leftArrow.hide();
	$(gallery[0]).addClass('photo_gallery_item_selected');
    if (widthsArr[currentIndex] == 'portrait') {
        nextLeft = (currentLeft - (sliderWidth / 2) / 2);
    }
    else {
        nextLeft = (currentLeft - sliderWidth) / 2;
    }
    slider.css({left: -nextLeft});


    $(rightArrow).click(function() {
    	$(gallery[currentIndex]).removeClass('photo_gallery_item_selected');
    	currentLeft = slider.position().left;
        if (currentIndex == firstIndex) {
    		leftArrow.show();
            if (widthsArr[currentIndex] == 'portrait') {
                currentLeft = (currentLeft - (sliderWidth / 2) / 2);
            }
            else {
                currentLeft = (currentLeft - sliderWidth) / 2;
            }
    	}
        if (widthsArr[currentIndex] == 'portrait') {
            nextLeft = currentLeft - (sliderWidth / 2);
        }
        else {
            nextLeft = currentLeft - sliderWidth;
        }
    	currentIndex++;
    	$(gallery[currentIndex]).addClass('photo_gallery_item_selected');
    	slider.animate({left: nextLeft}, 300);
    	if (currentIndex == lastIndex) {
    		rightArrow.hide();
    	}
        console.log(nextLeft);
    })
    $(leftArrow).click(function() {
    	$(gallery[currentIndex]).removeClass('photo_gallery_item_selected');
    	if (currentIndex == lastIndex) {
    		rightArrow.show();
    	}
    	currentIndex--;
        currentLeft = slider.position().left;
        if (currentIndex == firstIndex) {
            if (widthsArr[currentIndex] == 'portrait') {
                currentLeft = (currentLeft + (sliderWidth / 2) / 2);
            }
            else {
                currentLeft = (currentLeft + sliderWidth) / 2;
            }
        }
        if (widthsArr[currentIndex] == 'portrait') {
            nextLeft = currentLeft + (sliderWidth / 2);
        }
        else {
            nextLeft = currentLeft + sliderWidth;
        }
    	$(gallery[currentIndex]).addClass('photo_gallery_item_selected');
    	slider.animate({left: nextLeft}, 300);
    	if (currentIndex == firstIndex) {
    		leftArrow.hide();
    	}
    })


	$(window).resize(function () {
		sliderWidth = $('.photo-slider').width();
    	slider.css({left: (-(sliderWidth * currentIndex))});
	})


    $('.photo_gallery_item').click(function() {
    	document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        document.documentElement.scrollTop = 0; // For IE and Firefox
    	$(gallery[currentIndex]).removeClass('photo_gallery_item_selected');
    	if (currentIndex == firstIndex) {
    		leftArrow.show();
    	}
    	if (currentIndex == lastIndex) {
    		rightArrow.show();
    	}
    	currentIndex = gallery.index(this);
    	$(gallery[currentIndex]).addClass('photo_gallery_item_selected');
    	if (currentIndex == lastIndex) {
    		rightArrow.hide();
    	}
    	if (currentIndex == firstIndex) {
    		leftArrow.hide();
    	}
    	slider.animate({left: (-(sliderWidth * currentIndex))}, 300);
	})
});