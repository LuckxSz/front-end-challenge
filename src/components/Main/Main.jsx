import styles from './style.module.css'
import JessicaRandall from '../../assets/avatar-jessica.jpeg'
import { Button } from '../Button/Button'
export const Main = ({ name, city, bio, url }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={JessicaRandall} alt='Jessica' />
      <span className={styles.name}>{name}</span>
      <span className={styles.city}>{city}</span>
      <span className={styles.bio}>{bio}</span>
      <div className={styles.buttonDiv}>
        <Button url='https://github.com/LuckxSz' name="Github" />
        <Button url='https://www.frontendmentor.io/home' name="Front-End Mentor" />
        <Button url='https://br.linkedin.com/' name="LinkedIn" />
        <Button url='https://twitter.com/i/flow/login' name="Twitter" />
        <Button url='https://www.instagram.com/' name="Instagram" />
      </div>
    </div>
  )
}