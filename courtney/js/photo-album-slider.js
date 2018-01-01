jQuery(document).ready(function () {
	var slider = $('.photos_list');
	var sliderWidth = $('.photo-slider').width();
	var leftArrow = $('.arrow_left');
	var rightArrow = $('.arrow_right');

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
    var currentLeft = $('.photo_album_wrap').width() / 2;
	leftArrow.hide();
	$(gallery[0]).addClass('photo_gallery_item_selected');
    $('.arrow_div').width(($('.photo_album_wrap').width() - (slider[0].children[0].scrollWidth)) / 2);
    currentLeft -= (slider[0].children[0].scrollWidth / 2);
    slider.css({left: currentLeft});


    $(rightArrow).click(function() {
        if (currentIndex != lastIndex) {
        	$(gallery[currentIndex]).removeClass('photo_gallery_item_selected');
        	currentLeft = slider.position().left;
            if (currentIndex == firstIndex) {
        		leftArrow.show();
        	}
            currentLeft -= (slider[0].children[currentIndex].scrollWidth / 2);
        	currentIndex++;
            currentLeft -= (slider[0].children[currentIndex].scrollWidth / 2);

        	$(gallery[currentIndex]).addClass('photo_gallery_item_selected');
            $('.arrow_div').animate({width: (($('.photo_album_wrap').width() - (slider[0].children[currentIndex].scrollWidth)) / 2)}, 600);
        	slider.animate({left: currentLeft}, 600);
        	if (currentIndex == lastIndex) {
        		rightArrow.hide();
        	}
        }
    })
    $(leftArrow).click(function() {
    	$(gallery[currentIndex]).removeClass('photo_gallery_item_selected');
    	if (currentIndex == lastIndex) {
    		rightArrow.show();
    	}
        currentLeft += (slider[0].children[currentIndex].scrollWidth / 2);
    	currentIndex--;
        currentLeft += (slider[0].children[currentIndex].scrollWidth / 2);
    	$(gallery[currentIndex]).addClass('photo_gallery_item_selected');
        $('.arrow_div').animate({width: (($('.photo_album_wrap').width() - (slider[0].children[currentIndex].scrollWidth)) / 2)}, 600);
    	slider.animate({left: currentLeft}, 600);
    	if (currentIndex == firstIndex) {
    		leftArrow.hide();
    	}
    })


	$(window).resize(function () {
        var newLeft = $('.photo_album_wrap').width() / 2;
        newLeft -= (slider[0].children[0].scrollWidth / 2);
        for (var i = 0; i < currentIndex;) {
            newLeft -= (slider[0].children[i].scrollWidth / 2);
            console.log(i);
            i++;
            newLeft -= (slider[0].children[i].scrollWidth / 2);
        }
        currentLeft = newLeft;
        $('.arrow_div').width(($('.photo_album_wrap').width() - (slider[0].children[currentIndex].scrollWidth)) / 2);
    	slider.css({left: (currentLeft)});
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