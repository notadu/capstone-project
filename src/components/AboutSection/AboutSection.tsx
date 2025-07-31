import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div>
          <h3 className="subtitle">About Little Lemon</h3>
          <p>
            Little Lemon is a family-owned restaurant dedicated to bringing
            authentic Mediterranean cuisine to our community. Our chefs use
            traditional recipes and the freshest ingredients to create memorable
            meals for every guest.
          </p>
          <p>
            Founded in 2023, Little Lemon brings together the flavors of the
            Mediterranean with fresh, locally sourced ingredients. We believe in
            quality, hospitality, and community.
          </p>
        </div>
        <div className="founders">
          <img
            src="/images/founders-2.jpg"
            alt="Gianni Romano and Maria Rossi"
          />
          <p>Gianni Romano and Maria Rossi</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
