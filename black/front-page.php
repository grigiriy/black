<?php get_header(); ?>

<mainrole="main">
		<?php if (have_posts()) : ?>
			<?php
			while (have_posts()) :
				the_post();
			?>

      <?php get_template_part('template-parts/section','video'); ?>
      <div class="container">
        <?php get_template_part('template-parts/section','intro'); ?>
        <?php get_template_part('template-parts/section','form'); ?>	
      </div>
			<?php get_template_part('template-parts/section','popular'); ?>
			<?php get_template_part('template-parts/section','achievements'); ?>
			<div class="container">
				<?php get_template_part('template-parts/section','catalog'); ?>
			</div>
			<?php get_template_part('template-parts/section','new'); ?>
			<div class="container">
				<?php get_template_part('template-parts/section','about'); ?>
			</div>
			<?php endwhile; ?>

		<?php endif; ?>
</main>

<?php
get_footer();
