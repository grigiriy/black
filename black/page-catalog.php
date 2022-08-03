<?php

/**
* Template Name: Catalog
*/

get_header(); ?>

<main role="main">
		<?php if (have_posts()) : ?>
			<?php
			while (have_posts()) :
				the_post();
			?>

      <?php get_template_part('template-parts/section','banner'); ?>
			<?php get_template_part('template-parts/section','catalog'); ?>
			<?php get_template_part('template-parts/section','cars'); ?>
			<?php the_content(); ?>
			<?php get_template_part('template-parts/section','text'); ?>
			<?php endwhile; ?>

		<?php endif; ?>
</main>

<?php
get_footer();
