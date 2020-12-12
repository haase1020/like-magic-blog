import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
const Success = () => {
  return (
  <Layout>
    <SEO title="Sucess" />
    <section className="success-page">
      <div className="page-center">
        <h2>Thank you for subscribing!</h2>
        <Link to="/" className="btn">
          home
        </Link>
      </div>
    </section>
  </Layout>
    )
}

export default Success
