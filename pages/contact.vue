<template>
    <div>
        <div class="contact-section contact-wrapper">
      <div class="fake-big">@</div>
      <form class="contact-form">
        <div class="contact-heading">
          <div class="header">
            <h2 class="heading">Contact me</h2>
          </div>
          <p>
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
        </div>

       <div class="form">
        <div class="form-input-wrapper">
          <div class="form-input-group">
            <input type="text" name="name" class="name" required/>
            <label>Name</label>
          </div>
          <div class="form-input-group">
            <input
              type="email"
              name="email"
              class="email"
              required
            />
            <label>Email</label>
          </div>
        </div>
        <div class="form-input-group">
          <input
            type="text"
            class="subject"
            name="subject"
            required
          />
          <label>Subject</label>
        </div>
        <div class="form-input-group">
          <textarea
            type="text"
            class="textarea"
            name="message"
            required
          ></textarea>
          <label>Message</label>
        </div>
        <div class=" message"></div>
       </div>
        <button type="submit" class="contact-button submit-button">
          <div>
            <span class="bg"></span>
            <span class="base"></span>
            <span class="text">
              Send Message
            </span>
          </div>
        </button>
      </form>

      <div class="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63040.59859799887!2d7.4678272!3d9.060352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1656675150678!5m2!1sen!2sng"
          style="border: 0;"
          
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="map-content">
          <p>Waleed Shamaly</p>
          <span>
            Syria, Homs
            <br />
            +963957349566
          </span>
          <br />
          <span>@: contact@waleedshamaly.com</span>
        </div>
      </div>
    </div>
    </div>
</template>


<style scoped>
.form{
  padding-top: 20px;
}
.google-map iframe {
    width: 100%;
    margin-top: 0 !important;
    height: 50vh;
}

@media only screen and (max-width: 480px){

  .contact-form{
    padding-top: 1rem !important;
  }
}
.header h2::before {
    content: '<h2>';
    position: absolute;
    top: -16px;
    /* left: 2.5rem; */
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;}
    .header h2::after {
    content: '</h2>';
    position: absolute;
    bottom: -32px;
    /* left: 2.5rem; */
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}

.form::before{
    content: '<form>';
    position: absolute;
    top: 17rem;
    left: 3rem;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.form::after{
    content: '</form>';
    position: absolute;
    font-size: 1.2rem;
    left: 3rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.contact-form::before{
    content: '<body>';
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.contact-form::after{
    content: '</body>';
    position: absolute;
    font-size: 1.2rem;
    bottom: 4rem;
    left: 2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.contact-section::before{
    content: '<html>';
    position: absolute;
    top: 0;
    left: 1rem;
    font-size: 1.2rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}
.contact-section::after{
    content: '</html>';
    position: absolute;
    font-size: 1.2rem;
    bottom: 2rem;
    left: 1rem;
    font-family: 'La Belle Aurore', cursive;
    color: #666565;
    letter-spacing: 3px;
}

</style>