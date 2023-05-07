<template>
 


        <div class="home" id="app">
          <LoadingPage></LoadingPage>
    <!-- Home Section -->
   
    <home/>
    <!-- Portfolio Section -->
   
    <section-portfolio/>
    <!-- About Section -->
    <about></about>
    <!-- Content Section -->
    <contact/>
  </div>
     
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');

:root{
  --backgroung-color: rgb(29, 29, 29);
  --primary-color: #08fdd8;
}
body{
  background-color: var(--backgroung-color);
  color: #fff;
}

#app{
  font-family: 'Ubuntu', sans-serif;
  background: rgb(29, 29, 29);
  color: rgb(255, 255, 255);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  }


.arrow-icon{
  margin-left: 10px;
}

/* .name{
  color: transparent;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #08fdd8;
} */
.navbar{
  --bs-bg-opacity: 0 !important;
  background-color: var(--backgroung-color) !important;
}
.navbar-collapse{
text-align: center;

}
.active{
  color: #08fdd8 !important;
}


.social-media a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  background: transparent;
  border: 2px solid #08fdd8;
  border-radius: 50%;
  font-size: 1.6rem;
  color: #08fdd8;
  margin: 1rem 1.5rem 3rem 0;
}

.social-media a:hover{
  background-color: #08fdd8;
  color: #1d1d1d;
  box-shadow: 0 0 1rem #08fdd8;
  transition: 0.3s ease;
}



.wrapper{
  display: flex;
  margin-bottom: -3.5rem;
  padding: 0;

}

.wrapper .dynamic-txts{
  /* margin-left: 15px; */
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  padding-left: 0rem;
}
.dynamic-txts li{
  list-style: none;
  color: #08fdd8;
  font-size: 25px;
  font-weight: 500;
  position: relative;
  top: 0;
  animation: slide 12s steps(4) infinite;
}
@keyframes slide {
  100%{
    top: -120px;
  }
}
.dynamic-txts li span{
  position: relative;
  margin: 5px 0;
  line-height: 30px;
}
.dynamic-txts li span::after{
  content: "";
  position: absolute;
  left: 0;
  height: 108%;
  width: 100%;
  background: #1d1d1d;
  border-left: 2px solid #08fdd8;
  animation: typing 3s steps(10) infinite;
}
@keyframes typing {
  40%, 60%{
    left: calc(100% + 30px);
  }
  100%{
    left: 0;
  }
}






.photo{

  grid-column-start: 2;
    align-self: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
}
.photo img{
  /* background-color: #08fdd8;
  border-radius: 37% 63% 50% 50% / 51% 73% 27% 49%; */
  
  width: 60vh;
}
.text-zone{
    /* font-size: 3rem;
    line-height: 45px;
    letter-spacing: -3px;
    position: relative; */
    justify-content: space-between;
    grid-column-start: 1;
    align-self: center;
}
@media only screen and (min-width: 1024px){
  .google-map iframe{
    height: 100vh !important;
  }
}
@media only screen and (max-width: 1024px){
  .section-home{
        display: grid;
        grid-template-columns: 100% !important;
        grid-template-rows: 50% !important;
        padding-left: 1rem !important;
    }

    .photo {
        align-self: center;
        grid-column-start: 1;
        grid-row-start: 2;
        justify-self: center;
        margin-top: -100px;
        margin-left: -1rem !important;
    }
    .photo img {
      width: 50vh;
    }



.section-portfolio {
    min-height: auto !important;
    padding-top: 6rem;
    padding-bottom: 6rem;
}
.text-zone3 p {
    font-size: 20px;
}
#section-about{
  flex-direction: column !important;
  height: auto !important;
}
.text-zone3{
  width: 100% !important;
}
.google-map iframe {
    height: 55vh !important;
}
.contact-section{
min-height: auto !important;
}
}

@media only screen and (max-width: 480px){
  .google-map iframe {
    height: 100vh !important;
}
  .section-portfolio{
    min-height: 75vh !important;
    padding-top: 0 !important;
  }
  .portfolio-layer a{
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  .portfolio-layer {
    padding: 0rem 1rem !important;
  }
  .portfolio-layer h4{
    font-size: 1.3rem !important;
  }
  .portfolio-layer p{
    font-size:  0.8rem !important;
  }
    .section-home{
        display: grid;
        grid-template-columns: 100% !important;
        grid-template-rows: 50% !important;
        padding-left: 1rem !important;
    }

    .photo {
        align-self: center;
        grid-column-start: 1;
        grid-row-start: 2;
        justify-self: center;
        margin-top: -100px;
        margin-left: -1rem !important;
    }
    .photo img {
      width: 40vh;
    }

    .text-zone {
        grid-row-start: 1;
        align-self: center;
    }
    .text-zone h1{
    font-size: 1.5rem !important;
    line-height: 25px !important;
    letter-spacing: -1px !important;
    position: relative;
    }
    .text-zone h4{
      font-size: 14px !important;
    }
    .text-zone .gray-text{
    letter-spacing: 1px !important;
    font-size: 12px !important;
    margin-top: 30px !important;
    }
    .h4-zone::before{
    content: '<h4>';
    position: absolute;
    top: -25px;
    left: -10px;
    font-size: 0.9rem !important;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.h4-zone::after{
    content: '</h4>';
    position: absolute;
    bottom: -2rem !important;
    left: -.6rem !important;
    /* right: 14px !important; */
    font-size: 0.9rem !important;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.text-zone h1::before{
    content: '<h1>';
    position: absolute;
    top: -25px !important;
    left: -10px;
    font-size: .9rem !important;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.text-zone h1::after{
    content: '</h1>';
    position: absolute;
    bottom: -10px;
    right: 70px !important;
    font-size: 0.9rem !important;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.social-media a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem !important;
  height: 2.5rem !important;
  background: transparent;
  border: 2px solid #08fdd8;
  border-radius: 50%;
  font-size: 1.2rem;
  color: #08fdd8;
  margin: -2rem .7rem 1.6rem 0 !important;
}
.contact-button{
  display: none !important;
}
.wrapper {
    display: flex;
    margin-bottom: -2.5rem !important;
    padding: 0;
}

.animate__fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInDown !important; 
}
.animate__fadeInDown {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp !important; 
}
.scroll-down{
  font-size: 12px !important;
}
.portfolio-container{
  grid-template-columns: 1fr !important;
  gap: 1.5rem !important;
}
.heading{
  padding-left: 1rem !important;
  font-size: 2rem !important;

}
.section-portfolio h2::before{
    left: 10px !important;
}
.section-portfolio h2::after{
    left: 10px !important;
}
.contact-form{
  padding: 5rem 2rem 0px 2rem !important;
}
.contact-section{
  display: grid;
    grid-template-columns:  1fr !important;
    grid-column-gap: 0.77rem;
    padding-left: 0 !important;
}
.fake-big{
  left: 3rem !important;
  top: 8rem !important;
}
.header{
  margin-left: -2rem !important;
}
.header h2::before{
  left: 10px !important;
}
.header h2::after{
  left: 10px !important;
}
.form-input-wrapper{
  grid-template-columns: 1fr !important;
}



  }

#section-home{
    min-height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 90vh;
    align-items: center;
    padding-left: 3rem;
}
.text-zone h1{
    font-size: 3rem;
    line-height: 45px;
    letter-spacing: -3px;
    position: relative;

}
.text-zone h1::before{
    content: '<h1>';
    position: absolute;
    top: -40px;
    left: -10px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.text-zone h1::after{
    content: '</h1>';
    position: absolute;
    bottom: -10px;
    right: 5px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.h4-zone{
    /* font-size: 3rem;
    line-height: 45px;
    letter-spacing: -3px; */
    position: relative;
}
.h4-zone::before{
    content: '<h4>';
    position: absolute;
    top: -25px;
    left: -10px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.h4-zone::after{
    content: '</h4>';
    position: absolute;
    bottom: -5px;
    right:0;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.photo img{
  animation: floatImage 4s ease-in-out infinite;
}
@keyframes floatImage{
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-2.1rem);
  }
  100%{
    transform: translateY(0);
  }
}
.text-zone .gray-text{
    margin-top: 30px;
    color: #a2a2a3;
    letter-spacing: 3px;
    font-size: 14px;
    position: relative;
}

/* contact me button */
.contact-button{
    text-decoration: none;
    width: 100%;
    max-width: 150px;
    height: 40px;
    display: block;
    line-height: 40px;
    letter-spacing: 2px;
    position: relative;
    text-align: center;
    color: #08fdd8;
    /* margin-top: 50px; */
}
.contact-button div{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition:  all .3s ease-in-out;
}
.contact-button span.bg{
    position: absolute;
    width: 0%;
    height: 100%;
    left: -5px;
    top: 0;
    transition: all .3s ease-in-out;
    background-color: #08fdd8;
    transform: skewX(-19deg);
    
}
.contact-button:hover span.bg{
    width: 110%;
}


.contact-button span.base{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    border: 1px solid #08fdd8;
    box-sizing: border-box;
    
}
.contact-button span.text{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    
}
.contact-button:hover span.text{
    color: #1d1d1d;
}
.scroll-down{
    position: absolute;
    right: -30px;
    bottom: 3.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);
    display: block;
    font-size: 14px;
}
.scroll-down--left{
    left: -30px;
    right: auto;
}
.scroll-down span{
    display: inline-block;
    animation: scroll .5s linear infinite alternate-reverse;
}
@keyframes scroll{
    0%{
        transform: translateX(-7px);
    }
    100%{
        transform: translateX(7px);
    }
}
.scroll-down Icon{
    transform: rotate(270deg);
    margin-left: 10px;

}

.section-portfolio{
  min-height: 100vh;
  padding-top: 30px;
}
.heading{
  padding-left: 3rem;
  font-size: 3.5rem;
  color: #08fdd8;
  font-family: 'Ubuntu', sans-serif;
  position: relative;
}
.section-portfolio h2::before{
    content: '<h2>';
    position: absolute;
    top: -20px;
    left: 50px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.section-portfolio h2::after{
    content: '</h2>';
    position: absolute;
    bottom: -32px;
    left: 50px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.portfolio-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2.5rem;
  padding: 30px 50px 0 50px;
}
.portfolio-container .portfolio-box{
  display: flex;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;


}

.portfolio-box .portfolio-layer{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,.1), #08fdd8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 4rem ;
  transform: translateY(100%);
  transition: 0.5s ease;
}
.portfolio-box:hover .portfolio-layer{
  transform: translateY(0);
}
.portfolio-box img{
  width: 100%;
  transition: .5s ease;
}
.portfolio-box:hover img{
  transform: scale(1.1);
}
.portfolio-layer a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: #FFFFFF;
  color: #1d1d1d;
  text-decoration: none;
  border-radius: 50%;
}














.fake-big {
  display: block;
  font-size: 14rem;
  font-weight: bolder;
  position: absolute;
  /* // top: -100px; */
  left: 10rem;
  top: 0;
  color: rgba(65, 65, 65, 0.1);
  text-shadow: 2px 2px 4px 0 rgba(27, 26, 26, 0.5);
  user-select: none;
}
.header h2{
  padding-left: 0;
}
.contact-heading p{
  margin-top: 2rem ;
}
.header h2::before{
    content: '<h2>';
    position: absolute;
    top: -20px;
    left: 0px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.header h2::after{
    content: '</h2>';
    position: absolute;
    bottom: -32px;
    left: 0px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}

.contact-heading {
  margin-bottom: 30px;
}
.contact-section {
  
  padding-left: 3rem;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  position: relative;
  width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: 2.5rem;
}
.google-map iframe {
    width: 100%;
    height: 100vh ;
  }
.form-input-wrapper{
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.77rem;
}
.form-input-group {
  width: 100%;
  position: relative;
  margin-bottom: 20px;
}
.form-input-group label{
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.3);
  padding: 0 15px;
  pointer-events: none;
  transition: 0.5s;
}
.form-input-group label::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  background: transparent;
  border-left: 2.2px solid #08fdd8;
  border-bottom: 2.2px solid #08fdd8;
  transform: rotate(45deg);
  opacity: 0;
  transition: 0.5s;

}
.form-input-group input:focus~label::before,
.form-input-group input:valid~label::before{
  top: 5px !important;
  opacity: 1;
}
.form-input-group textarea:focus~label::before,
.form-input-group textarea:valid~label::before{
  top: 5px !important;
  opacity: 1;
}
.form-input-group label::after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background: transparent;
  border-right: 2.2px solid #08fdd8;
  border-top: 2.2px solid #08fdd8;
  transform: rotate(45deg);
  opacity: 0;
  transition: 0.5s;

}
.form-input-group input:focus~label::after,
.form-input-group input:valid~label::after{
  top: 5px;
  opacity: 1;
}
.form-input-group textarea:focus~label::after,
.form-input-group textarea:valid~label::after{

  top: 5px;
  opacity: 1;
}
.form-input-group input,textarea{
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 2.2px solid rgba(255, 255, 255, 0.3);
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  transition: 0.5s;
}
.form-input-group input:focus,
.form-input-group input:valid{

  border: 2.2px solid #08fdd8;
}

.form-input-group textarea:focus,
.form-input-group textarea:valid{
  border: 2.2px solid #08fdd8;
}


.form-input-group input:focus~label,
.form-input-group input:valid~label
{
  top: 0;
  left: 20px;
  font-size: 16px;
  color: #08fdd8;
  background: #1d1d1d;
}

.form-input-group textarea:focus~label,
.form-input-group textarea:valid~label{
  top: 0;
  left: 20px;
  font-size: 16px;
  color: #08fdd8;
  background: #1d1d1d;
}


/* .form-input-group input,
textarea {
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  padding: 0 20px;
  margin-bottom: 5px;
  font-family: sans-serif;
  font-size: 0.957rem;
  box-shadow: 0 0 0px 1000px #2b2b2b inset;
  color: #8a8484;
}
.form-input-group textarea {
  height: 25vh;
  padding: 10px 20px;
} */
.submit-button {
  background: transparent;
  border: none;
  outline: none;
  float: right;
  display: block;
  font-size: .8rem;
  cursor: pointer;
  color: #8a8484;
}

/* .form-input-group input + span::after,
.form-input-group textarea + span::after {
  content: '';
  width: 0;
  height: 2px;
  position: absolute;
  background: #08fdd8;
  bottom: 5px;
  left: 0;
  transition: ALL 0.3s linear;
}
.form-input-group input:focus + span::after,
.form-input-group textarea:focus + span::after {
  width: 100%;
} */

.error input,
.error textarea {
  border-bottom: 2px solid red;
  transition: all 0.2s linear;
}

.success input,
.success textarea {
  border-bottom: 2px solid green;
  transition: all 0.2s linear;
}
.message {
  position: absolute;
  bottom: 500px;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform: translate(100%, 50%);
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column-reverse;
  z-index: 1;
  
}
.message-content {
  padding: 15px;
  background: red;
  color: #fff;
  opacity: 1;
  transition: opacity 550ms ease-in-out;
  margin-bottom: 5px;
}

.message-content.hide {
  opacity: 0;
}

.google-map {
  width: 100%;
  position: relative;
}
.google-map iframe {
  width: 100%;
  margin-top: 50px;
  height: 60vh;
}
.map-content {
  background-color: #000;
  color: #f3f3f3;
  position: absolute;
  top: 70px;
  left: 40px;
  padding: 20px;
  backdrop-filter: blur(70%);
}
.map-content span {
  font-size: 16px;
  line-height: 1.5rem;
}



</style>

