<?php /* Template Name: Home */ 
get_header(); ?>

<?php
// get an image field
$images = get_field('home_background_image');
?>
<div id="logo_overlay" class="hidden"> 
	<?php the_custom_logo(); ?>
</div>

<div class="home-image-wrap">
	<?php foreach ($images as $image) {
			echo '<img class="home-image" src="' . $image['url'] . '" />';
	} ?>
</div>
 <?php 
 get_footer();