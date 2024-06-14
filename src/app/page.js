import Link from 'next/link'
import styles from './page.module.css'

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
      </div>
    </main>
  )
}

export default Home
