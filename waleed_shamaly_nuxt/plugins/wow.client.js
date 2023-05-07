import WOW from 'wow.js';


export default {
  install: (app) => {
    if (typeof document !== 'undefined') {
      const wow = new WOW({
        
      });

      app.use(() => {
        wow.init();
      });
    }
  }
};