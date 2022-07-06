<?php get_header(); ?>

<main id="MainContent" class="main-content" role="main">
	<div id="shopify-section-pagefly-home" class="shopify-section">

		<?php if (have_posts()) : ?>
			<?php
			while (have_posts()) :
				the_post();
			?>

				

			<?php endwhile; ?>

		<?php endif; ?>

	</div>
</main>

<?php
get_footer();
