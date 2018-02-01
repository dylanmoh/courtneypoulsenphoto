jQuery(window).on("load", function () {
    $('#logo_overlay').fadeIn(3000).removeClass('hidden');
    var theImage = new TheImage(this);
    theImage.initImage();
});

function TheImage(theImage) {
    var imageWrap = $('.home-image-wrap')[0].children;
    var currentImage = 0;
    var imageCount = $(imageWrap).length;
    var imageHeights = [];
    var imageWidths = [];
    $(imageWrap).each(function() {
        imageHeights.push($(this)[0].clientHeight);
    });
    $(imageWrap).addClass('home-image-expand-width');
    $(imageWrap).each(function() {
        imageWidths.push($(this)[0].clientWidth);
    });
    $(imageWrap).removeClass('home-image-expand-width');

	var myImage = this;
    var fullHeight = $(window)[0].innerHeight;
    var fullWidth = $(window)[0].innerWidth;
    var image = $(imageWrap[currentImage]);
    var moveTime= 15000;
    var pauseTime = 1500;
    var timer;
    myImage.myInterval;

    this.initImage = function() {
    	myImage.initImageResizeEvents();
        $(imageWrap).hide();
        image.show();
    	myImage.moveFirst();
    	myImage.myInterval = setInterval(myImage.move, ((moveTime)));
    }

    this.moveFirst = function() {
        image.animate({top: 0}, 0);
        image.animate({left: 0}, 0);
        if (imageHeights[currentImage] > fullHeight) {
            if (image.hasClass('home-image-expand-width')) {
                image.removeClass('home-image-expand-width');
            }
            image.animate({top: -(imageHeights[currentImage] - fullHeight)}, moveTime);
        }
        else {
            if (!(image.hasClass('home-image-expand-width'))) {
                image.addClass('home-image-expand-width');
            }
            image.animate({left: ((fullWidth / 2) - (imageWidths[currentImage] / 2))}, 0);
        }
    }

    this.move = function() {
        image.fadeOut(pauseTime);
        currentImage++;
        if (currentImage == imageCount) {
            currentImage = 0;
        }
        image = $(imageWrap[currentImage]);
        image.animate({top: 0}, 0);
        image.animate({left: 0}, 0);
        image.fadeIn(pauseTime);
        if (imageHeights[currentImage] > fullHeight) {
            if (image.hasClass('home-image-expand-width')) {
                image.removeClass('home-image-expand-width');
            }
            image.animate({top: -(imageHeights[currentImage] - fullHeight)}, moveTime);
        }
        else {
           if (!(image.hasClass('home-image-expand-width'))) {
                image.addClass('home-image-expand-width');
            }
            image.animate({left: ((fullWidth / 2) - (imageWidths[currentImage] / 2))}, 0);
        }
    }

	this.initImageResizeEvents = function() {
        $(window).resize(function () {
			clearTimeout(timer);
			image.stop();
    		clearInterval(myImage.myInterval);
    		image.animate({top: 0}, 0);
			timer = setTimeout(myImage.finishResize, 500);          
        })
    }

    this.finishResize = function() {
    	myImage.recalculateVars();
    	myImage.moveFirst();
    	myImage.myInterval = setInterval(myImage.move, ((moveTime)));
    }

    this.recalculateVars = function() {
        fullHeight = $(window)[0].innerHeight;
        fullWidth = $(window)[0].innerWidth;
        imageWrap = $('.home-image-wrap')[0].children;
        imageHeights = [];
        imageWidths = [];
        $(imageWrap).show();
        $(imageWrap).removeClass('home-image-expand-width');
        $(imageWrap).each(function() {
            imageHeights.push($(this)[0].clientHeight);
        });
        $(imageWrap).addClass('home-image-expand-width');
        $(imageWrap).each(function() {
            imageWidths.push($(this)[0].clientWidth);
        });
        $(imageWrap).removeClass('home-image-expand-width');
        $(imageWrap).hide();
        image = $(imageWrap[currentImage]);
        image.show();
    }

}
