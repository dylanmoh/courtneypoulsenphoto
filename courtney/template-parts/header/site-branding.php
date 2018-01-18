<?php
/**
 * Displays header site branding
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

$extra_class = "";
if (is_front_page() ) { 
	$extra_class = " home-page-header";
}

?>
<div class="site-branding">
		<div class="header-wrap<?php echo $extra_class ?>">
			<a class="social-media-icon" target="_blank" title="follow me on instagram" href="https://www.instagram.com/courtneypoulsenphoto/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
			<a class="social-media-icon" href="<?php echo get_site_url() . '/contact'; ?>">
			<i class="fa fa-envelope" aria-hidden="true"></i>
			</a>
			<?php the_custom_logo(); ?>
			<?php if ( has_nav_menu( 'top' ) ) : ?>
					<?php get_template_part( 'template-parts/navigation/navigation', 'top' ); ?>
		<?php endif; ?>
		</div>

		
	<?php ?>

</div><!-- .site-branding -->
