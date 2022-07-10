<section id="cars">
  <div class="container">
    <ul class="cars-list">
      <?php
      
      $args = [
        'post_type' => 'page',
        'numberposts' => -1,
        'post_parent' => get_the_ID(),
        'meta_query' => array(
          array(
              'key' => '_wp_page_template',
              'value' => 'page-car.php',
          )
      )
      ];

      foreach(get_posts($args) as $car){ ?>
        <li class="car">
          <a href="<?= get_the_permalink($car);?>">
            <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.39.14PM.png" alt="<?= $car->post_title;?>">
          </a>
          <div class="info">
            <div class="row">
              <p><?= $car->post_title;?></p>
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