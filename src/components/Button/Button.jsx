import styles from './style.module.css'

export const Button = ({ name, url }) => {
  return (
    <a target='_blank' href={url} className={styles.wrapper}>
      {name}
    </a>
  )
} 