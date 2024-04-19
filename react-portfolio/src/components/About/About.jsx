import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
  <section className={styles.container}>
    <h2>About Me</h2>
    <div>
        <img src={getImageUrl('about/aboutImage.png')} 
            alt="About image of me"/>
        </div>
        <ul>
            <li>
                <img src={getImageUrl('about/cursorIcon.png')} alt="cursor image"/>
                <div>
                    <h3>Front End Developer</h3>
                    <p>
                        I am a front end web developer with experience building responsive and optimized websites
                    </p>
                </div>
            </li>
            <li>
                <img src={getImageUrl('about/serverIcon.png')} alt="back end developer"/>
                <div>
                    <h3>Back-End Developer</h3>
                    <p>I have experience in developing back end of the websites as well.</p>
                </div>
            </li>
            <li>
                <img src={getImageUrl('about/uiIcon.png')} alt="User experience"/>
                <h3>UI Designer</h3>
                <p>I have designed multiple websites</p>
            </li>
        </ul>
  </section>)
}

export default About

