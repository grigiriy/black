<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<?php if (!is_user_logged_in()) wp_die('log in, please'); ?>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body class="template-index">

	<div class="header">
		<?php get_template_part('template-parts/burger'); ?>
		<?php get_template_part('template-parts/header'); ?>
	</div>

	<div class="page-container">