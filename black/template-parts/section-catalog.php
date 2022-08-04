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
          <?= get_the_post_thumbnail($car->ID, 'small'); ?>
        </a>
        <a href="<?= get_the_permalink($car); ?>"><?= $car->post_title; ?></a>
      </li>
    <?php } ?>
  </ul>
</section>