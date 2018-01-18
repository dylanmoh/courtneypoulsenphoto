jQuery(document).ready(function () {
    $('#logo_overlay').fadeIn(3000).removeClass('hidden');
    var theImage = new TheImage(this);
    theImage.initImage();
});

function TheImage(theImage) {
	var myImage = this;
    var fullHeight = $(window)[0].innerHeight;
    var image = $('.home-image');
    var imageHeight = image[0].clientHeight;
    var moveTime= 15000;
    var pauseTime = 3000;
    var timer;
    myImage.myInterval;

    this.initImage = function() {
    	myImage.initImageResizeEvents();
    	myImage.move();
    	myImage.myInterval = setInterval(myImage.move, (2 * (moveTime + pauseTime)));
    }

    this.move = function() {
    	image.delay(pauseTime).animate({top: -(imageHeight - fullHeight)}, moveTime).delay(pauseTime);
	    image.animate({top: (0)}, moveTime);
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
    	fullHeight = $(window)[0].innerHeight;
    	image = $('.home-image');
    	imageHeight = image[0].clientHeight;
    	myImage.move();
    	myImage.myInterval = setInterval(myImage.move, (2 * (moveTime + pauseTime)));
    }

}
