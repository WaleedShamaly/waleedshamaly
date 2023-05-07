<template>
    <NuxtLoadingIndicator />
    <div>
        <section id="section-about">

<div class="text-zone3">
    <div id="header">
        <h2 class="heading">Me, Myself and I</h2>
    </div>
   
    <div class="paragraph">
       <p>Hi, I'm Waleed Shamaly from Syria. I'm a Full-Stack Developer and founder of 
        <a href="http://SyrCode.com">SyrCode team</a> . 
     
        <br>
       </p>
        <p>
        I started programming at the age of 16 in 2019 due to my passion for programming and since then I have gained extensive experience in many programming languages and frameworks.
        <br>
        </p>
        <p>
        Currently, I work as a freelancer and I'm enthusiastic about continuous improvement and developing my programming skills. I also enjoy collaborating with others and possess strong communication and teamwork skills. I always strive to provide creative and effective solutions to the problems we face in our work, and I look forward to challenging myself to work on new projects and develop more advanced and innovative solutions.</p>
    </div>
  
</div>
<!-- <div class="my-skils">
    <div class="Skils">
    <h3>HTML</h3>
    <h3>CSS</h3>
    <h3>JavaScript</h3>
    <h3>TypeScript</h3>
    <h3>VueJS</h3>
    <h3>NuxtJS</h3>
    <h3>BootStrap</h3>
</div>
<div class="Skils2">
    <h3>Python</h3>
    <h3>Django</h3>
    <h3>my skils 9</h3>
    <h3>my skils 10</h3>
</div>
</div> -->
<div class="mySkilsLogo">  
    <img src="../assets/skils-logo/icons8-html-5-144.png" alt="">
    <img src="../assets/skils-logo/icons8-css3-144.png" alt="" class="test">
    <img src="../assets/skils-logo/icons8-sass-144.png" alt="">
    <img src="../assets/skils-logo/icons8-bootstrap-144.png" alt="" class="test">
    <img src="../assets/skils-logo/icons8-javascript-144.png" alt="">
    <img src="../assets/skils-logo/icons8-typescript-144.png" alt="" class="test">
    <img src="../assets/skils-logo/icons8-vue-js-144.png" alt="">
    <img src="../assets/skils-logo/icons8-nuxt-jc-144.png" alt="" class="test">
    <img src="../assets/skils-logo/icons8-python-144.png" alt="">
    <img src="../assets/skils-logo/icons8-django-144.png" alt="" class="test">
</div>


</section>
    </div>
</template>

<style scoped>
#section-about{
    display: flex;
    align-items: center;
    height: 90vh;
}
.text-zone3{
    width: 40%;
}
.text-zone3 p
{
    padding-left: 3rem;
}
.paragraph{
    margin-top: 2rem;
}
.paragraph a{
    text-decoration: none;
    color: var(--primary-color);
}
.mySkilsLogo{
    display: flex;
    flex-wrap: wrap;
    gap: 6rem;
    width: 60%;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    padding-top: 8rem;
}
.mySkilsLogo img{
    width: 100px;
    margin: -85px -10px 0 -10px !important;}
.test{
margin-top: 10rem !important;
}
.my-skils{
    width: 60%;
}
.Skils{

    text-align: center;
    display: flex;
    align-items: center;
    gap: 3px;
    flex-wrap: wrap;
    justify-content: center;

}
.Skils2{
    padding-top: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 3px;
    flex-wrap: wrap;
    justify-content: center;

}
.Skils h3
{
    background-color: #08fdd888;
    width: 10rem;
    height: 3rem;
    border-radius: 3px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Skils2 h3
{
    background-color: #08fdd888; 
    width: 10rem;
    height: 3rem;
    border-radius: 3px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
#header h2::before {
    content: '<h2>';
    position: absolute;
    top: -16px;
    /* left: 2.5rem; */
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;}
    #header h2::after {
    content: '</h2>';
    position: absolute;
    bottom: -32px;
    left: 50px;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
@media only screen and (max-width: 768px){
    #section-about{
        flex-direction: column;
        height: 80vh;
       padding-top: 2rem;
    }
    .text-zone3{
    width: 100%;
    }
    .mySkilsLogo{
    width: 100%;
    
    }
    .mySkilsLogo img{
        width: 60px;
        margin: -85px -10px 0 -10px !important;

    }
    #header h2::after{
        left: 10px;
    }
    #header h2::before{
        left: 10px;
    }
    .text-zone3 p{
        padding-left: 2rem;
        font-size: 13px;
    }
}

@media only screen and (max-width: 380px){
    .mySkilsLogo img{
        width: 60px;
        margin: 0px 0px 0 0px !important;

    }
    .mySkilsLogo{
        gap: 1.5rem !important;
        padding: 0 !important;
    }
   
    
}
</style>