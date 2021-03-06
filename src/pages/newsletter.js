import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NewsLetter = () => {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Let's Connect! </h2>
          <br></br>
          <h3>🌱 Subscribe to my blog 🌱</h3>
          <br></br>
          <form
            className="contact-form"
            name="testing-contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="testing-contact" />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="form-control"
            />
            <button type="submit" className="btn form-control submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
