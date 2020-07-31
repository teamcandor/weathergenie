import Layout from '../components/Layout'

import styles from '../styles/Home.module.css'

// Documentation: https://api.meteostat.net/
const METEOSTAT_API_KEY = "ZkyfxIb7aFghj7anZb5TwwhFGtahcSf3"

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to Weather Genie!
      </h1>

      <h3>Which city has the best weather?</h3>
      <p className={styles.placeholder}>Coming soon...</p>
    </Layout>
  )
}
