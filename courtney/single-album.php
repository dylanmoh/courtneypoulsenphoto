<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); 
$images = get_field('photo_album');
?>

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

<!-- <div class="photo_gallery">
		<?php if ($images) { ?>
				<?php foreach( $images as $image ) { ?>
		            <div class="photo_gallery_item">
		                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
		            </div>
        		<?php } ?>
		<?php } ?>
</div> -->

<?php get_footer();
