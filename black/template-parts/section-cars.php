<section id="cars">
  <div class="container">
    <ul class="cars-list">
      <?php

      // $args = [
      //   'post_type' => 'page',
      //   'numberposts' => -1,
      //   'post_parent' => get_the_ID(),
      //   'meta_query' => array(
      //     array(
      //       'key' => '_wp_page_template',
      //       'value' => 'page-car.php',
      //     )
      //   )
      // ];

      $cur_model_terms = get_the_terms($post->ID, 'model');
      $cur_model_term_ids = [];

      if (is_array($cur_model_terms)) {
        foreach ($cur_model_terms as $cur_model_term) {
          $cur_model_term_ids[] = $cur_model_term->term_id;
        }
      }

      $args = [
        'post_type' => 'car',
        'numberposts' => -1,
        'tax_query' => array(
          array(
            'taxonomy' => 'model',
            'field'    => 'id',
            'terms'    => $cur_model_term_ids
          )
        ),
        'meta_query' => array(
          array(
            'key' => 'active',
            'value' => '1',
          ),
        ),
      ];

      foreach (get_posts($args) as $car) {
        $color = get_the_terms($car->ID, 'color')[0]->name;
        $year = get_the_terms($car->ID, 'year')[0]->name;
        $price_from = carbon_get_post_meta($car->ID, 'price_day_dollar');
      ?>
        <li class="car" data-id="<?= $car->ID; ?>">
          <p class="js-modal-init">
            <?= get_the_post_thumbnail($car->ID, 'small'); ?>
          </p>
          <div class="info">
            <div class="row">
              <p><?= crop_id($car->post_title); ?></p>
              <p>Reserve now</p>
            </div>
            <div class="row">
              <p><?= $color; ?></p>
              <p>For $500</p>
            </div>
            <button class="js-modal-init">Reserve now</button>
          </div>
          <div class="credintails">
            <div class="col">$<?= $price_from; ?> Daily</div>
            <div class="col central"><?= $color; ?></div>
            <div class="col"><?= $year; ?></div>
          </div>
        </li>
      <?php } ?>
    </ul>
  </div>
</section>