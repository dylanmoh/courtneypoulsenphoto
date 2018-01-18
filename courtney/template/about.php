<?php
/* Template Name: About */ 

get_header(); 
$image = get_field("about_image");
?>
<div class="about-page">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="about-page-wrap" style="<?php echo 'background-image: url(' . $image . ')' ?>">
				<div class="about-content">
					<h1 class="about-page-header">About Me</h1>
					<?php
					the_post();
					?>
					<div class="about-wrap">
						<?php
						the_content();
						?>
					</div>
				</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->
<?php get_footer();
