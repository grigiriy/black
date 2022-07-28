<?php
function add_new_taxonomies()
{
  $labels = array(
    'name' => 'Марка/модель',
    'singular_name' => 'Марка/модель',
    'add_new' => 'Добавить марку/модель',
    'add_new_item' => 'Добавить новую марку/модель',
    'edit_item' => 'Редактировать марку/модель',
    'new_item' => 'Новая марка/модель',
    'all_items' => 'Все марки/модели',
    'view_item' => 'Просмотр всех марок/моделей на сайте',
    'search_items' => 'Искать марку/модель',
    'not_found' => 'Марка/модель не найдена.',
    'menu_name' => 'Марка/модель'
  );

  register_taxonomy(
    'model',
    ['car','page'],
    array(
      'label' => 'Марка/модель',
      'hierarchical' => true,
      'labels' => $labels,
      'rewrite' => array('slug' => 'model'),
    )
  );

  $labels = array(
    'name' => 'Цвет',
    'singular_name' => 'Цвет',
    'add_new' => 'Добавить цвет',
    'add_new_item' => 'Добавить новый цвет',
    'edit_item' => 'Редактировать цвет',
    'new_item' => 'Новый цвет',
    'all_items' => 'Все цвета',
    'view_item' => 'Просмотр всех цветов на сайте',
    'search_items' => 'Искать цвет',
    'not_found' => 'Цвет не найден.',
    'menu_name' => 'Цвет'
  );

  register_taxonomy(
    'color',
    'car',
    array(
      'label' => 'Цвет',
      'hierarchical' => false,
      'labels' => $labels,
      'rewrite' => array('slug' => 'color'),
    )
  );

  $labels = array(
    'name' => 'Год',
    'singular_name' => 'Год выпуска',
    'add_new' => 'Добавить год выпуска',
    'add_new_item' => 'Добавить новый год выпуска',
    'edit_item' => 'Редактировать год выпуска',
    'new_item' => 'Новый год выпуска',
    'all_items' => 'Все года выпуска',
    'view_item' => 'Просмотр всех годов выпуска на сайте',
    'search_items' => 'Искать год выпуска',
    'not_found' => 'Год выпуска не найден.',
    'menu_name' => 'Год выпуска'
  );

  register_taxonomy(
    'year',
    'car',
    array(
      'label' => 'Год выпуска',
      'hierarchical' => false,
      'labels' => $labels,
      'rewrite' => array('slug' => 'year'),
    )
  );
}
