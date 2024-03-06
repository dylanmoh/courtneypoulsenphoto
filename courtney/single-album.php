<?php

get_header();
$images = get_field('photo_album');
$desktopColumnOne = array();
$desktopColumnTwo = array();
$desktopColumnThree = array();
$desktopColumnFour = array();
$mobileColumnOne = array();
$mobileColumnTwo = array();
$mobileColumnThree = array();
for ($i = 0; $i < sizeof($images); $i+=4) {
	array_push($desktopColumnOne, $images[$i]);
}
for ($i = 1; $i < sizeof($images); $i+=4) {
	array_push($desktopColumnTwo, $images[$i]);
}
for ($i = 2; $i < sizeof($images); $i+=4) {
	array_push($desktopColumnThree, $images[$i]);
}
for ($i = 3; $i < sizeof($images); $i+=4) {
	array_push($desktopColumnFour, $images[$i]);
}
for ($i = 0; $i < sizeof($images); $i+=3) {
	array_push($mobileColumnOne, $images[$i]);
}
for ($i = 1; $i < sizeof($images); $i+=3) {
	array_push($mobileColumnTwo, $images[$i]);
}
for ($i = 2; $i < sizeof($images); $i+=3) {
	array_push($mobileColumnThree, $images[$i]);
}
?>
<div id="picture-overlay">
	<div class="picture-overlay__image">
	</div>
</div>
<div class="photo_album_tool_bar">
		<div class="photo_album_tool-wrap">
			<i class="fa fa-th" aria-hidden="true"></i>
		</div>
		<div class="photo_album_tool-wrap">
			<i class="fa fa-exchange" aria-hidden="true"></i>
		</div>
</div>
<div class="photo_gallery-wrap loading-width">
	<div class="photo_gallery">
			<?php
			if ($images) { ?>
				<div class="column column-desktop">
				<?php foreach( $desktopColumnOne as $i => $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			        </div>
	        	<?php } ?>
	        	</div>
	        	<div class="column column-desktop">
	        	<?php foreach( $desktopColumnTwo as $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			        </div>
	        	<?php } ?>
        		</div>
				<div class="column column-desktop">
	        	<?php foreach( $desktopColumnThree as $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			        </div>
	        	<?php } ?>
        		</div>
				<div class="column column-desktop">
	        	<?php foreach( $desktopColumnFour as $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			        </div>
	        	<?php } ?>
        		</div>
				<div class="column column-mobile">
				<?php foreach( $mobileColumnOne as $i => $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			        </div>
	        	<?php } ?>
	        	</div>
	        	<div class="column column-mobile">
	        	<?php foreach( $mobileColumnTwo as $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			        </div>
	        	<?php } ?>
        		</div>
				<div class="column column-mobile">
	        	<?php foreach( $mobileColumnThree as $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			        </div>
	        	<?php } ?>
        		</div>
			<?php } ?>
	</div>
</div>
<div class="photo_album_content_centered loading-width content_centered">
	<div class="photo_album_wrap">
		<div class="photo_album_wrap_div arrow_div arrow_left">
			<div class="left-arrow">
				<i class="fa fa-chevron-left" aria-hidden="true"></i>
			</div>
		</div>
		<div class="photo_album_wrap_div photo-slider">
			<?php if ($images) { ?>
				<div class="photos_list">
					<?php foreach( $images as $image ) {
						?>
			            <div class="photo_item">
			                <img src="<?php echo $image['full_image_url']; ?>" alt="<?php echo $image['title']; ?>" />
			            </div>
	        		<?php } ?>
				</div>
			<?php } ?>
		</div>
		<div class="photo_album_wrap_div arrow_div arrow_right">
			<div class="right-arrow">
				<i class="fa fa-chevron-right" aria-hidden="true"></i>
			</div>
		</div>
	</div>
</div>

<?php get_footer();
