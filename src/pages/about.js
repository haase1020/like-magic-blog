import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Mandi" />
      <Hero />
      <div className="container">
        <h2 className="heading-cursive">Hi there!</h2>
        <p>
          My name is Mandi and I currently work as a software engineer at
          Prenda. Software engineering is a big career shift for me. I was a
          Japanese translator and homeschooling mom before I decided to take the
          plunge into software development.
        </p>
        <p>
          I graduated from Lambda School in August 2020, and have fallen in love
          with web development. I wake up each morning to start the day coding,
          and my husband has to set a timer in the evening letting me know it's
          time to call it a day.
        </p>
        <p>
          As a "late bloomer" software engineer, I realize that time is of the
          essence. I need to not only work harder, but smarter in order to be
          competitive. This blog is comprised of my discoveries as a programmer,
          my thoughts regarding working as a woman in tech, and other random
          thoughts that might be of benefit to others.
        </p>
        <p>
          In my spare time, I love homeschooling my four children, reading,
          practicing Japanese, and power walking (or rowing and pilates when I
          can't get outside). I am an aspiring minimalist, and am constantly
          looking for ways to be better to our planet. I am a Christian and
          thankful for God's daily sanctifying work in my life, and I hope that
          in some small way I can share God's love with others through this
          blog.
        </p>
        <p className="about-quote">
          “If you’re always trying to be normal you will never know how amazing
          you can be.” ― Maya Angelou
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
