import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Koushik"}
          feedback={"Lots of bugs."}
        />

        <TestimonialCard
          name={"Anirban"}
          feedback={
            "Puja te bari asbi to!"
          }
        />

        <TestimonialCard
          name={"K______a"}
          feedback={"Not a good website, like the person."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
