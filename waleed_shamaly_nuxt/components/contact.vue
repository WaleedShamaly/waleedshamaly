<template>
    <div>
        <div id="section-contact" class="contact-section contact-wrapper">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104928.15795783098!2d36.59468036458672!3d34.73026995619651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230e9047c7c0fb%3A0xac367e06303788d0!2zSG9tc-KAjiwgU3lyaWE!5e0!3m2!1sen!2s!4v1683049340399!5m2!1sen!2s"
          style="border: 0;"
          allowfullscreen=""
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

</style>