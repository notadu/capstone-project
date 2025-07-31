import "./About.css";

const About = () => (
  <div className="container">
    <article className="about">
      <h1 className="title">About Little Lemon</h1>
      <p>
        Welcome to Little Lemon! We are passionate about serving delicious,
        fresh, and healthy food to our community. Our team is dedicated to
        providing a warm and inviting atmosphere for all our guests.
      </p>
      <p>
        Whether you're here for a quick bite or a family meal, we strive to make
        every experience memorable. Thank you for choosing Little Lemon!
      </p>
    </article>
    <div className="about-images">
      <img src="/images/founders-1.jpg" alt="Gianni Romano and Maria Rossi" />
      <img src="/images/founders-2.jpg" alt="Gianni Romano and Maria Rossi" />
    </div>
  </div>
);

export default About;
