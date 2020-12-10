import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest</h2>
          <h4>I write daily</h4>
          <form className="contact-form">
            <input type="text" 
            name="name" 
            placeholder="your name"
            className="form-control"
            />
            <input type="email" 
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
