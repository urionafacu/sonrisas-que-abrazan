/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'

const JoinButton = () => {
  return (
    <button className={styles.container}>
      <div>SUMATE VOS TAMBIÉN</div>
      <img alt='SUMATE VOS TAMBIÉN' src='/images/join-icon.png' />
    </button>
  )
}

export default JoinButton
