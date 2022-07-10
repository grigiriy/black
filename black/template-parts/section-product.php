<section id="product">
  <div class="col">
    <div id="slider" class="carousel">
      <?php for($i = 0; $i< 7; $i++){ ?>
        <div class="carousel__slide">  
          <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/i-MCjXkhr-X2.jpg" alt="">
        </div>
        <div class="carousel__slide">  
          <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.23.26PM.png" alt="">
        </div>
      <?php } ?>
    </div>
    <div id="thumbs" class="carousel">
      <?php for($i = 0; $i< 7; $i++){ ?>
      <div class="carousel__slide">
        <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/i-MCjXkhr-X2.jpg" alt="">
      </div>
      <div class="carousel__slide">
        <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/products/ScreenShot2022-04-19at7.23.26PM.png" alt="">
      </div>
      <?php } ?>
    </div>
  </div>
  <div class="col">
    <h1 class="headline"><?php the_title(); ?></h1>
    <p class="price">$490</p>
    <p class="caption"><span>Per Day<span></p>

    <form action="">
      <div class="date-form">

        <div class="input-wrapper">
          <label class="date-label" for="rangeDateFrom">Select Date</label>
          <input type="text" class="date-input" id="rangeDateFrom" name="rangeDateFrom" placeholder="From" data-input value="" autocomplete='off'>
        </div>

        <div class="input-wrapper">
          <label class="date-label" for="rangeDateTo">Select End Date</label>
          <input type="text" class="date-input" id="rangeDateTo" name="rangeDateTo" placeholder="To" data-input value="" autocomplete='off'>
        </div>
      </div>

      <p class="caption uppercase">Book now for <span>$300<span></p>

      <button type="submit">Book online</button>
      
      <a href="#">
        <button type="button">
          <svg version="1.1" style="width: 35px; height: 100%;" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 348.077 348.077" xml:space="preserve">
            <path d="M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076 c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257 c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194 C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02 C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876 c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029 C350.631,303.527,350.95,285.795,340.273,275.083z"></path>
          </svg>
          Call now to book
        </button>
      </a>
    </form>
  </div>
</section>