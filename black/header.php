<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<?php if (!is_user_logged_in()) return; ?>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body class="template-index">

	<div id="shopify-section-header" class="shopify-section">
		<?php get_template_part('template-parts/burger'); ?>
		<?php get_template_part('template-parts/header'); ?>
	</div>

	<div class="page-container page-element is-moved-by-drawer">