import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h3 className="subtitle">What Our Guests Say</h3>
        <ul className="testimonials-list">
          <li className="testimonials-item">
            <div className="testimonial-rating">★★★★★</div>
            <div>
              <strong>Jamie L.</strong>
            </div>
            <blockquote>
              “The best dining experience I’ve had in years! The food was
              incredible and the staff was so friendly.”
            </blockquote>
          </li>
          <li className="testimonials-item">
            <div className="testimonial-rating">★★★★☆</div>
            <div>
              <strong>Alex P.</strong>
            </div>
            <blockquote>
              “A hidden gem! Loved the ambiance and the fresh flavors.”
            </blockquote>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
