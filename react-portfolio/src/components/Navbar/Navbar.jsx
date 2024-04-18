import React, {useState} from 'react'
import styles from './Navbar.module.css'

import { getImageUrl } from '../../utils'


export const Navbar = () => {
    const [menuOpn, setMenuOpn] = useState(false);

    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
                menuOpn 
                ? getImageUrl("nav/closeIcon.png") 
                : getImageUrl("nav/menuIcon.png")
                } 
                alt='menu-button'
                onClick={()=> setMenuOpn(!menuOpn)}
            />
            <ul className={`${styles.menuItem} ${menuOpn && styles.menuOpn }`}
            onClick={()=> setMenuOpn(false)}>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
}