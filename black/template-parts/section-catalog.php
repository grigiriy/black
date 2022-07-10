<section id="catalog">
  <p class="headline">Our Fleet</p>
  <ul class="cats-list">
    <li class="selected">All cars</li>
    <li>Lamborghini</li>
    <li>Rolls Royce</li>
    <li>Bentley</li>
    <li>Ferrari</li>
    <li>Mercedes</li>
    <li>Slingshot</li>
  </ul>
  <ul class="cars-list">
    <?php
    $args = [
      'post_type' => 'page',
      'numberposts' => -1,
      'meta_query' => array(
        array(
            'key' => '_wp_page_template',
            'value' => 'page-car.php',
        )
    )
    ];
    
    foreach(get_posts($args) as $car){ ?>
    <li>
      <a href="<?= get_the_permalink($car);?>">
        <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.39.14PM.png" alt="<?= $car->post_title; ?>">
      </a>
      <a href="<?= get_the_permalink($car);?>"><?= $car->post_title;?></a>
    </li>
    <?php } ?>
  </ul>
</section>