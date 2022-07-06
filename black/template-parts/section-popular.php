<?php

$pb = [
  [
    'img' => 'https://cdn.shopify.com/s/files/1/0587/6875/2824/t/6/assets/pf-48f33b23--Screen-Shot-20210725-at-65515-PM-copy.png',
    'href' => '/collections/lamborghini',
    'name' => 'Lamborghini',
  ],
  [
    'img' => 'https://cdn.shopify.com/s/files/1/0587/6875/2824/t/6/assets/pf-f33b23ec--Screen-Shot-20210725-at-65523-PM-copy.png',
    'href' => '/collections/rolls-royce',
    'name' => 'Rolls Royce',
  ],
  [
    'img' => 'https://cdn.shopify.com/s/files/1/0587/6875/2824/t/6/assets/pf-3b23ece3--Screen-Shot-20210725-at-65902-PM-copy.png',
    'href' => '/collections/bentley',
    'name' => 'Bentley',
  ],
  [
    'img' => 'https://cdn.shopify.com/s/files/1/0587/6875/2824/t/6/assets/pf-23ece3b4--Screen-Shot-20210725-at-71121-PM-copy.png',
    'href' => '/collections/ferrari',
    'name' => 'Ferrari',
  ],
];

?>


<section class="popular">
  <div class="page-width">
    <p class="headline">Popular Brands</p>
    <div class="flex">
      <?php foreach ($pb as $item) { ?>
        <a class="item" href="<?= $item['href']; ?>">
          <img src="<?= $item['img']; ?>" alt="<?= $item['name']; ?>">
        </a>
      <?php } ?>
    </div>
  </div>
</section>