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

      <?php get_template_part('template-parts/section','banne2r'); ?>
			<?php get_template_part('template-parts/section','cars'); ?>
      <div class="container">
			</div>
			<?php endwhile; ?>

		<?php endif; ?>
</main>

<?php
get_footer();
