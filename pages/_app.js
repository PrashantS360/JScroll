import '../styles/globals.css'
import styles from '../styles/index.module.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className={styles.fontFamily}>

      <Component {...pageProps} />
    
    </div>
  )
}

export default MyApp
