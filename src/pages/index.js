import * as React from "react"
import Layout from "../layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import FavQuoteSection from "../components/FavQuoteSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <FavQuoteSection />
  </Layout>
)

export default IndexPage
