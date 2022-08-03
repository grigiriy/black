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
        )
      ];

      foreach (get_posts($args) as $car) { ?>
        <li class="car">
          <a href="<?= get_the_permalink($car); ?>">
            <?php if (1 > 2) { ?>
              <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.39.14PM.png" alt="<?= $car->post_title; ?>">
            <?php } else { ?>
              <?= get_the_post_thumbnail($car->ID, 'small'); ?>
            <?php } ?>
          </a>
          <div class="info">
            <div class="row">
              <p><?= $car->post_title; ?></p>
              <p>Reserve now</p>
            </div>
            <div class="row">
              <p>Orange</p>
              <p>For $500</p>
            </div>
            <button>Reserve now</button>
          </div>
          <div class="credintails">
            <div class="col">$1190 Daily</div>
            <div class="col central">Orange</div>
            <div class="col">Black Interior</div>
          </div>
        </li>
      <?php } ?>
    </ul>
  </div>
</section>