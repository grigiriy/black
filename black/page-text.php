<?php

/**
* Template Name: Text
*/

get_header(); ?>

<main role="main">
		<?php if (have_posts()) : ?>
			<?php
			while (have_posts()) :
				the_post();
			?>
			<h1 class="text-headline"><?php the_title(); ?></h1>
			<?php the_content(); ?>
			<?php endwhile; ?>

		<?php endif; ?>
</main>

<?php
get_footer();
