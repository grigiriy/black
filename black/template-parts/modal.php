<div class="modal-bg">
  <div class="modal">
    <div class="modal-head">
      <div class="headline">
        <span class="model-name">Rolls-Royce Ghost</span>
        <span class="model-year">2017</span>
      </div>
      <div class="cross">
        <svg version="1.1" x="0px" y="0px" width="94.926px" height="94.926px" viewBox="0 0 94.926 94.926" style="enable-background:new 0 0 94.926 94.926;" xml:space="preserve">
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
          <?= get_the_post_thumbnail(); ?>
        </div>
        <?php for ($i = 1; $i < 7; $i++) { ?>
          <div class="carousel__slide">
            <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/i-MCjXkhr-X2.jpg" alt="">
          </div>
          <div class="carousel__slide">
            <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.23.26PM.png" alt="">
          </div>
        <?php } ?>
      </div>
      <div id="thumbs" class="carousel">
        <div class="carousel__slide">
          <?= get_the_post_thumbnail(get_the_ID(), 'thumbnail'); ?>
        </div>
        <?php for ($i = 1; $i < 7; $i++) { ?>
          <div class="carousel__slide">
            <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/i-MCjXkhr-X2.jpg" alt="">
          </div>
          <div class="carousel__slide">
            <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.23.26PM.png" alt="">
          </div>
        <?php } ?>
      </div>
      <div class="characters">
        <div class="credintails">
          <div class="col">
            <p>ppd</p>
          </div>
          <div class="col central">
            100$
          </div>
          <div class="col">
            100AED
          </div>
        </div>

        <div class="credintails">
          <div class="col">
            <p>ppw</p>
          </div>
          <div class="col central">
            100$
          </div>
          <div class="col">
            100AED
          </div>
        </div>

        <div class="credintails">
          <div class="col">
            <p>ppm</p>
          </div>
          <div class="col central">
            100$
          </div>
          <div class="col">
            100AED
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
  </div>
</div>