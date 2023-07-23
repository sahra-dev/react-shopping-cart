import Layout from '../../Layout/Layout'
import * as data from '../../data'

const HomePage = () => {
  return (
    <Layout>
      <div>{data.products.map()}</div>
    </Layout>
  )
}

export default HomePage
