import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Hazel</h1>
        <p className={styles.description}>I am a Fullstack web developer with 5 years of experience using react.js and node.js.
            Feel free to get in touch with me.
        </p>
        <a className={styles.btn} href="mailto:jatin.8887@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}

export default Hero