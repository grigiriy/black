<?php
$achievs_1 = [
  [ 'number' => '+60', 'text' => 'cars for rent'],
  [ 'number' => '+460', 'text' => 'bookings per month'],
];
$achievs_2 = [
  [ 'number' => '+50', 'text' => 'happy customers weekly'],
  [ 'number' => '100%', 'text' => 'satisfaction guarantied'],
];
?>
<section class="achievements">
<div class="page-width">
  <div class="flex">
  <?php foreach ($achievs_1 as $item) { ?>
    <div>
      <p class="number"><?= $item['number']; ?></p>
      <p class="text"><?= $item['text']; ?></p>
    </div>
  <?php } ?>
  </div>
  <div class="flex">
  <?php foreach ($achievs_2 as $item) { ?>
    <div>
      <p class="number"><?= $item['number']; ?></p>
      <p class="text"><?= $item['text']; ?></p>
    </div>
  <?php } ?>
  </div>
</div>
</section>