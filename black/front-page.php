<?php get_header(); ?>

<main id="MainContent" class="main-content" role="main">
	<div id="shopify-section-pagefly-home" class="shopify-section">

		<?php if (have_posts()) : ?>
			<?php
			while (have_posts()) :
				the_post();
			?>

      <?php get_template_part('template-parts/section','video2'); ?>
      <div class="container">
        <?php get_template_part('template-parts/section','intro'); ?>
        <?php get_template_part('template-parts/section','form'); ?>	
      </div>
			<?php get_template_part('template-parts/section','popular'); ?>
			<?php get_template_part('template-parts/section','achievements'); ?>
			<div class="container">
				<?php get_template_part('template-parts/section','catalog'); ?>
			</div>

			<?php endwhile; ?>

		<?php endif; ?>

	</div>
</main>

<?php
get_footer();
