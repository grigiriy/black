<section class="banner">
  <?php if(1>2){ ?>
    <img src="https://cdn.shopify.com/s/files/1/0587/6875/2824/t/6/assets/pf-6ae0d36f--Screen-Shot-20210725-at-91108-PM.png" alt="banner">
  <?php } else {
    echo get_the_post_thumbnail();
   } ?>
  <div class="container">
    <h1 class="headline"><?php the_title(); ?></h1>
  </div>
</section>