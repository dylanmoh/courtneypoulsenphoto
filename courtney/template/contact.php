<?php
/* Template Name: Contact */ 

get_header(); 
$image = get_field("contact_image");
?>
<div class="contact-page wrap" style="<?php echo 'background-image: url(' . $image . ')' ?>">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="contact-page-wrap" >
				<h1 class="contact-page-header">Contact</h1>
				<div class="contact-wrap">
					<label class="name">
						<?php echo get_field('name'); ?>
					</label>
					<label class="phone">
						<?php echo get_field('phone_number'); ?>
					</label>
					<label class="location">
						<?php echo get_field('location'); ?>
					</label>
				</div>
				<?php
				the_post();
				?>
				<div class="form-wrap">
					<?php
					the_content();
					?>
				</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->
<?php get_footer();
