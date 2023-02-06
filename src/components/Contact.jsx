import React from "react"

function Contact(){
    return(
    <section class="container-2" id="contact-section">
    <main class="form-signin2">
    <form div class="" action="https://formsubmit.co/6ed5438828438ae11b4981e59c54d865" method="POST">
      <img class="bio-img" src="images/sean-headshot.jpeg" alt="sean-headshot" />
      <h1>Let's Get In Touch!</h1>
      <div class="row">
        <div class="form-floating col-lg-6">
          <input type="text" class="form-control" name="name" id="floatingInput" placeholder="name@example.com" style={{marginBottom: "15px"}} required />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating col-lg-6">
          <input type="text" class="form-control" name="address" id="floatingInput" placeholder="name@example.com" style={{marginBottom: "15px"}} />
          <label for="floatingInput">Address</label>
        </div>
        <div class="form-floating col-lg-6">
          <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com" style={{marginBottom: "15px"}} required />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating col-lg-6">
          <input type="text" class="form-control" name="phone" id="floatingInput" placeholder="name@example.com" style={{marginBottom: "15px"}} />
          <label for="floatingInput">Phone Number</label>
        </div>
        <div class="form-floating col-lg-12">
          <input type="text" class="form-control" name="subject" id="floatingInput" placeholder="name@example.com" style={{marginBottom: "15px"}} required />
          <label for="floatingInput">Subject</label>
        </div>
        <div class="form-floating col-lg-12 " style={{marginBottom: "15px"}}>
          <textarea class="form-control form-control-lg" name="message" id="floatingInput" rows="10" cols="70" style={{marginBottom: "15px", height: "138px"}}></textarea>
          <label for="floatingInput">Message</label>
        </div>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Send</button>
    </form>
  </main>
  </section>
  )
}

export default Contact;