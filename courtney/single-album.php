<?php

get_header(); 
$images = get_field('photo_album');
$i = 1;
$leftImages = array();
$rightImages = array();
foreach ($images as $image) {
	if (($i % 2) == 1) {
		array_push($leftImages, $image);
	}
	else {
		array_push($rightImages, $image);
	}
	$i++;
}
?>
<div id="picture-overlay">
	<div class="picture-overlay__image">
	</div>
</div>
<div class="photo_album_tool_bar">
		<div class="photo_album_tool-wrap">
			<i class="fa fa-exchange" aria-hidden="true"></i>
		</div>
		<div class="photo_album_tool-wrap">
			<i class="fa fa-columns" aria-hidden="true"></i>
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
						if ($image[width] > $image[height]) {
							$extraClass = "landscape";
						}
						else {
							$extraClass = "portrait";
						}
						?>
			            <div class="photo_item <?php echo $extraClass; ?>">
			                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
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
<div class="photo_gallery-wrap loading-width">
	<div class="photo_gallery">
			<?php 
			if ($images) { ?>
				<div class="column">
				<?php foreach( $leftImages as $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
			        </div>
	        	<?php } ?>
	        	</div>
	        	<div class="column">
	        	<?php foreach( $rightImages as $image ) { ?>
			        <div class="photo_gallery_item">
			            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
			        </div>
	        	<?php } ?>
        		</div>
			<?php } ?>
	</div>
</div>

<?php get_footer();
