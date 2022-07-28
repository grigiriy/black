<?php
function true_register_post_type_init()
{
    $labels = array(
      'name' => 'Автопарк',
      'singular_name' => 'Автомобиль',
      'add_new' => 'Добавить автомобиль',
      'add_new_item' => 'Добавить новый автомобиль',
      'edit_item' => 'Редактировать автомобиль',
      'new_item' => 'Новый автомобиль',
      'all_items' => 'Все автомобили',
      'view_item' => 'Просмотр автомобилей на сайте',
      'search_items' => 'Искать автомобиль',
      'not_found' => 'Автомобилей не найдено.',
      'not_found_in_trash' => 'В корзине нет автомобилей.',
      'menu_name' => 'Автомобили'
    );
    $args = array(
      'labels' => $labels,
      'public' => true,
      'show_ui' => true,
      'has_archive' => false,
      'show_in_rest' => false,
      'menu_position' => 50,
      'menu_icon' => 'dashicons-car',
      'supports' => array(
        'title',
        'page-attributes',
        'thumbnail',
      )
    );
    register_post_type ( 'car', $args );



} //function close    