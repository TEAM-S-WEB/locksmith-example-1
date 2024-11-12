import React from "react";
import styles from "./TestimonialsComponent.module.css";

const TestimonialsComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Client Reviews</h1>
      <div className={styles.clientReviewsContainer}>
        <div  className={styles.item}>
          <p>
            "I was locked out of my apartment late at night, and I called YSL
            Services in a panic. They arrived within 20 minutes and got me back
            inside without any damage to my door. The technician was friendly,
            professional, and really knew his stuff. I highly recommend their
            services!"
          </p>
        </div>
        <div  className={styles.item}>
          <p>
            "YSL Services helped me upgrade the locks in my new office space,
            and I couldn't be happier with the results. They offered great
            advice on the best security options for my needs and were very
            efficient in their work. The team was punctual and respectful of my
            space. I’ll definitely use them again!"
          </p>
        </div>
        <div  className={styles.item}>
          <p>
            "I had a great experience with YSL Services when I needed a new set
            of keys made for my car. The staff was incredibly knowledgeable and
            helped me choose the right key fob for my vehicle. The pricing was
            fair, and the service was quick. I’ll be recommending them to all my
            friends!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
