<?php
/* Template Name: About */ 

get_header(); 
$image = get_field("about_image");
?>
<div class="about-page">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="about-content">
				<div class="about-text-wrap">
					<h1 class="about-header">About Me</h1>
					<?php
					the_content();
					?>
				</div>
				<?php
				the_post();
				?>
				<div class="about-image-wrap" style="<?php echo 'background-image: url(' . $image . ')' ?>" />
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->
<?php get_footer();
