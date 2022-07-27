import * as React from 'react'
import Layout from "../components/layout"
import Banner from '../components/banner'
import '../styles/styles.scss'


// Step 2: Define your component
const IndexPage = () => (
    <div>
      <Layout>
       <Banner />
      </Layout>
   
  </div>
  )


// Step 3: Export your component
export default IndexPage