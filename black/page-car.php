<?php

/**
* Template Name: Car
*/

get_header(); ?>

<main role="main">
		<?php if (have_posts()) : ?>
			<?php
			while (have_posts()) :
				the_post();
			?>
			<?php get_template_part('template-parts/section','banner'); ?>
			<?php get_template_part('template-parts/section','cars'); ?>
      <div class="container">
				<?php get_template_part('template-parts/section','product'); ?>
				<?php get_template_part('template-parts/section','form'); ?>
			</div>
			<?php the_content(); ?>
      <?php get_template_part('template-parts/section','popular'); ?>
      <?php get_template_part('template-parts/section','fleet'); ?>
      <div class="container">
			</div>
			<?php endwhile; ?>

		<?php endif; ?>
</main>

<?php
get_footer();
