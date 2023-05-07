<template>
    <div>
        <section id="section-portfolio" class="section-portfolio">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <h2 class="heading"><b>My Portfolio</b></h2>
      <RouterLink to="/portfolio" class="contact-button" style="margin-right: 3rem;"> 
                <div>
                    <span class="bg"></span>
                    <span class="base"></span>
                    <span class="text">
                        See More!
                    </span>
                </div>
            </RouterLink>
      </div>
      <div class="portfolio-container wow animate__fadeInUp"  data-wow-duration="1s">
        <div class="portfolio-box" >
          <img src="../assets/portfolio/iMac_2.png">
          <div class="portfolio-layer">
            <h4>SyrCode Academy</h4>
            <p>One Of The Best Learning Websites</p>
            <a href="#"><Icon name="ion:link-outline"/></a>
          </div>
        </div>
        <div class="portfolio-box">
          <img src="../assets/portfolio/Macbook.png">
          <div class="portfolio-layer">
            <h4>SyrCode Academy</h4>
            <p>One Of The Best Learning Websites</p>
            <a href="#"><Icon name="ion:link-outline"/></a>
          </div>
        </div>
        <div class="portfolio-box">
          <img src="../assets/portfolio/iMac_2.png">
          <div class="portfolio-layer">
            <h4>SyrCode Academy</h4>
            <p>One Of The Best Learning Websites</p>
            <a href="#"><Icon name="ion:link-outline"/></a>
          </div>
        </div>
    
          <div class="portfolio-box m-d" >
          <img src="../assets/portfolio/iMac_2.png">
          <div class="portfolio-layer">
            <h4>SyrCode Academy</h4>
            <p>One Of The Best Learning Websites</p>
            <a href="#"><Icon name="ion:link-outline"/></a>
          </div>
        </div>
        <div class="portfolio-box m-d">
          <img src="../assets/portfolio/Macbook.png">
          <div class="portfolio-layer">
            <h4>SyrCode Academy</h4>
            <p>One Of The Best Learning Websites</p>
            <a href="#"><Icon name="ion:link-outline"/></a>
          </div>
        </div>
        <div class="portfolio-box m-d">
          <img src="../assets/portfolio/iMac_2.png">
          <div class="portfolio-layer">
            <h4>SyrCode Academy</h4>
            <p>One Of The Best Learning Websites</p>
            <a href="#"><Icon name="ion:link-outline"/></a>
          </div>

        </div>
      </div>
    </section>
    </div>
</template>



<style scoped>
@media only screen and (max-width: 768px) {
  .m-d{
    display: none !important; 
  }
  .section-portfolio{
    padding-bottom: 3rem;
    padding-top: 2rem !important;
    background-color: var(--backgroung-color) !important;
    color: #fff !important;
  }
  
}
</style>