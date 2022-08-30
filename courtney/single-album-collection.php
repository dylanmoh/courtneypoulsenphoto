<?php

get_header();
$collections = get_field('photo_album_collections');
$i = 1;
$formatted_collections = array_map(function($collection) {
	$id = $collection->ID;
    return [
		'link' => get_permalink($id),
        'title' => get_the_title($id),
		'thumbnail' => get_field( "thumbnail", $id ),
    ];
}, $collections);
?>
<div>
	<div class="collection-page-title" >
	&mdash;<?php echo get_the_title(); ?>&mdash;
	</div>
	<div class="collection-tiles">
		<?php foreach( $formatted_collections as $collection ) { ?>
			<div class="collection-tile" >
				<a href="<?php echo $collection['link']; ?>" >
					<img class="collection-image" src="<?php echo $collection['thumbnail']; ?>" />
					<span class="collection-title" ><?php echo $collection['title']; ?></span>
				</a>
			</div>
		<?php } ?>
	</div>
</div>

<?php get_footer();
