<?php

use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Carbon_Fields\Block;



Block::make(__('FAQ'))
  ->add_fields([
    Field::make('complex', 'items', 'FAQ')
      ->add_fields([
        Field::make('text', 'headline', 'Заголовок'),
        Field::make('rich_text', 'body', 'Текст'),
      ]),
  ])

  ->set_render_callback(function ($fields, $attributes, $inner_blocks) { ?>



  <div class="accordeon_section">
    <div class="accordeon_wrapper">
      <?php
      foreach ($fields['items'] as $item) { ?>
        <div class="accordeon_item">
          <div class="accordeon_headline">
              <svg class="icon" width="12" height="7" viewBox="0 0 12 7" fill="#000" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1892 4.1548L1.38415 0.24423C1.06748 -0.0812339 0.554141 -0.0812339 0.237471 0.24423C0.0792646 0.406895 -2.7111e-08 0.620227 -3.64331e-08 0.833492C-4.57552e-08 1.04676 0.0792646 1.26002 0.237471 1.42275L5.42667 6.7559C5.74334 7.08137 6.25668 7.08137 6.57335 6.7559L11.7625 1.42262C12.0792 1.09722 12.0792 0.569495 11.7625 0.244098C11.4459 -0.0813659 10.9325 -0.081366 10.6159 0.244098L6.81082 4.1548L6.57335 4.39878C6.25668 4.72424 5.74334 4.72424 5.42667 4.39878L5.1892 4.1548Z"></path>
              </svg>
            <?= $item['headline']; ?>
          </div>
          <div class="accordeon_body">
            <?= $item['body']; ?>
          </div>
        </div>
      <?php } ?>
    </div>
  </div>
<?php }) ?>