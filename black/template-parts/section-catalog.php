<section id="catalog">
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
  
  if(is_front_page()){ ?>
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
  <?php } else {
    $args['post_parent'] = get_the_ID();
  } ?>
  <ul class="cars-list">
    <?php
    foreach (get_posts($args) as $car) { ?>
      <li>
        <a href="<?= get_the_permalink($car); ?>">
          <?php if (1 > 2) { ?>
            <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.39.14PM.png" alt="<?= $car->post_title; ?>">
          <?php } else { ?>
            <?= get_the_post_thumbnail($car->ID, 'small'); ?>
          <?php } ?>
        </a>
        <a href="<?= get_the_permalink($car); ?>"><?= $car->post_title; ?></a>
      </li>
    <?php } ?>
  </ul>
</section>