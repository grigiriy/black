<?php

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make('post_meta', 'Пример')
  // ->show_on_template( 'page-example.php' )
  ->show_on_post_type('car')
  ->add_fields([
    Field::make('text', 'price', 'Цена')
      ->set_width(30),
    Field::make('text', 'crm_id', 'ID')
      ->set_width(30),
      Field::make('checkbox', 'active', 'Активна')
      ->set_width(30),


    Field::make('text', 'price_day_aed', 'Цена день, AED')
      ->set_width(30),
    Field::make('text', 'price_week_aed', 'Цена неделя,AED')
      ->set_width(30),
    Field::make('text', 'price_month_aed', 'Цена месяц, AED')
      ->set_width(30),

    Field::make('text', 'price_day_dollar', 'Цена день, $')
      ->set_width(30),
    Field::make('text', 'price_week_dollar', 'Цена неделя, $')
      ->set_width(30),
    Field::make('text', 'price_month_dollar', 'Цена месяц, $')
      ->set_width(30),


    Field::make('text', 'hp', 'Количество лошадиных сил')
      ->set_width(30),
    Field::make('text', 'kmh', 'Разгон км/час')
      ->set_width(30),
    Field::make('text', 'mph', 'Разгон миль/час')
      ->set_width(30),

      Field::make('complex', 'photos', 'Доп. фото')
      ->add_fields([
        Field::make('image', 'photo', '')
      ])
  ]);
