import React from 'react';
//styles
import styles from './Footer.module.css'
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
const Footer = () => {
    return (
       <>
       <div className={styles.container}>
        <p> &copy; All Rights Reserve 2022</p>
        <div className={styles.icons}>
            
            <a href='#' className={`${styles.icon} ${styles.iconinstagram}`}>
            <img src={instagram} />
            </a>
            <a href='#' className={`${styles.icon} ${styles.iconTwitter}`}>
            <img src={twitter} alt="twitter"/> 
            </a>
            <a href='#' className={`${styles.icon} ${styles.iconGithub}`}>
            <img src={github} alt="github"/>
            </a>
            <a href='#' className={`${styles.icon} ${styles.iconLinkedin}`}>
            <img src={linkedin} alt="linkedin"/>
            </a>
        </div>
       </div>
      
       </> 
        
    );
};

export default Footer;