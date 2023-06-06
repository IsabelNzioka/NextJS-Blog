import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Bella2.jpg"
          alt="An Image of Isabel"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I'm Isabel</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Vue
      </p>
    </section>
  );
}

export default Hero;
