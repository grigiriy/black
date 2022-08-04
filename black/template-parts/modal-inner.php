<div class="modal-head">
  <div class="headline">
    <span class="model-name"><?= crop_id(get_post($car_id)->post_title); ?></span>
    <span class="model-year"><?= get_the_terms($car_id, 'year')[0]->name; ?></span>
  </div>
  <div class="cross">
    <svg version="1.1" class="js-close" x="0px" y="0px" width="94.926px" height="94.926px" viewBox="0 0 94.926 94.926" style="enable-background:new 0 0 94.926 94.926;" xml:space="preserve">
      <g>
        <path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z" />
      </g>
    </svg>

  </div>
</div>
<div class="modal-body">
  <div id="slider" class="carousel">
    <div class="carousel__slide">
      <?= get_the_post_thumbnail($car_id); ?>
    </div>
    <?php
    if( carbon_get_post_meta($car_id,'photos') ){
    foreach(carbon_get_post_meta($car_id,'photos') as $photo) { ?>
      <div class="carousel__slide">
        <img src="<?= wp_get_attachment_url( $photo['photo'] ); ?>" alt="">
      </div>
    <?php } }?>
  </div>
  <div id="thumbs" class="carousel">
    <div class="carousel__slide">
      <img src="<?= wp_get_attachment_url( get_post_thumbnail_id($car_id) ); ?>" alt="">
    </div>
    <?php if( carbon_get_post_meta($car_id,'photos') ){
    foreach(carbon_get_post_meta($car_id,'photos') as $photo) { ?>
      <div class="carousel__slide">
      <img src="<?= wp_get_attachment_url( $photo['photo'] ); ?>" alt="">
      </div>
    <?php } } ?>
  </div>
  <div class="characters">
    <div class="credintails">
      <div class="col">
        <p>per day</p>
      </div>
      <div class="col central">
        <?= carbon_get_post_meta($car_id,'price_day_dollar');?> USD
      </div>
      <div class="col">
      <?= carbon_get_post_meta($car_id,'price_day_aed');?> AED
      </div>
    </div>

    <div class="credintails">
      <div class="col">
        <p>per week</p>
      </div>
      <div class="col central">
      <?= carbon_get_post_meta($car_id,'price_week_dollar');?> USD
      </div>
      <div class="col">
      <?= carbon_get_post_meta($car_id,'price_week_aed');?> AED
      </div>
    </div>
  </div>
  <p class="cta">Reserve now</p>
  <form>
    <div class="input-wrapper">
      <label for="name">Name</label>
      <input type="text" id="name" name="name">
    </div>
    <div class="input-wrapper">
      <label for="tel">Phone</label>
      <input type="tel" name="tel" id="tel">
    </div>
    <input class="submit" type="submit" value="reserve now">
  </form>
</div>