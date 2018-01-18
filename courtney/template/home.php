<?php /* Template Name: Home */ 
get_header(); ?>

<?php
// get an image field
$image = get_field('home_background_image');
?>
<div id="logo_overlay" class="hidden"> 
	<?php the_custom_logo(); ?>
</div>

<div class="home-image-wrap">
	<img class="home-image" src="<?php echo $image; ?>" />
</div>
 <?php 
 get_footer();