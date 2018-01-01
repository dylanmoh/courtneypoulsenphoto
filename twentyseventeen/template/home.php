<?php /* Template Name: Home */ 
get_header(); ?>

<?php
// get an image field
$image = get_field('home_background_image');
?>
<div id="logo_overlay" class="hidden"> 
<?php the_custom_logo(); ?>
</div>
<img class="home-image" src="<?php echo $image; ?>" />

 <?php 
 get_footer();