// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: ['nuxt-icon'],
    plugins: [{ src: '~/plugins/wow.client.js', mode: 'client' },],

    css: [
    'animate.css/animate.min.css',
    // 'wowjs/css/libs/animate.css',
    'bootstrap/dist/css/bootstrap.min.css'
      ],
   
     
    
    app:{
        head:{
            title: 'Waleed Shamaly',
            meta:[
                {name: 'discription', content:"شغلات مشان السيووو سيد راسيي"}
            ], 
            
            // link: [
            //     {rel:'stylesheet' ,href:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'}
            // ],
            // script: [
            //     { src: './assets/script.js' }
            // ]
            // script: [
            //     { src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js' }
            //   ]
        }
    }
    // head: {
    //     script: [
    //       {   src: 'bootstrap/dist/js/bootstrap.bundle.min.js' }
    //     ]
    //  },
    // script: [
    //     {
    //       src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
    //     }
    //   ],

})
