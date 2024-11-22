import React from "react";
import styles from "../styles/Footer.module.scss"; // Note the ".module.scss"
import { Link } from "react-router-dom";
import Icons from "../components/Icons"
function Footer() {


 
  return (
    <div className={styles.footer}>
      <div className={styles.footerline}></div>
      <div className={styles.footercont}>
        <div className={styles.footerContainer}>
          <div className={`${styles.footerSection} ${styles.explore}`}>
            <h3>Explore</h3>
            <ul>
         <li><Link to="/works" className="nodecorationLink"> Works</Link></li>
           <li><Link to="/expertise" className="nodecorationLink">Expertise</Link></li>
           <li><Link to="/about" className="nodecorationLink">About Us</Link></li>
        <li> <Link to="/blogs" className="nodecorationLink"> Blogs</Link></li> 
        <li> <Link to="/contact-us" className="nodecorationLink">Contact Us</Link></li> 
            
            </ul>
          </div>
          <div className={`${styles.footerSection} ${styles.services}`}>
            <h3>Services</h3>
            <ul>

        <li> <Link to="/#" className="nodecorationLink">Purpose & Value </Link></li> 
        <li> <Link to="/#" className="nodecorationLink">Positioning </Link></li> 
        <li> <Link to="/#" className="nodecorationLink">Brand Personality </Link></li> 
        <li> <Link to="/#" className="nodecorationLink">Tone of Voice </Link></li> 

            </ul>
          </div>
          <div className={`${styles.footerSection} ${styles.follow}`}>
            <h3>Follow Us</h3>
            <ul>
              <a  href="http://Instagram.com/" target="_blank" rel="noopener noreferrer" className="nodecorationLink"> <li>  <Icons.Instagram className="iconstyle" title="Home" />Instagram</li></a>
              <a href="http://Linkdein.com/" target="_blank" rel="noopener noreferrer" className="nodecorationLink"> <li> <Icons.Linkedin className="iconstyle"  title="Home" />LinkedIn</li></a>
              <a href="http://facebook.com/" target="_blank" className="nodecorationLink"> <li> <Icons.Facebook className="iconstyle"  title="Home" />Facebook</li></a>
            </ul>
          </div>
          <div className={` ${styles.locations}`}>
            <h3>Locations</h3>
            <ul> 
              <li><Icons.FaLocationDot  className="iconstyle"  title="location" /> 
             Right, near Royal Enfield, Bhusari Colony, Kothrud, Pune,
                Maharashtra 411038
              </li>
              {/* <li>📧 hello@haraaydesignstudio.com</li> */}
            </ul>
          </div>
        </div>
      </div>{" "}
      <h1>Haraay Design Studio</h1>
    </div>
  );
}

export default Footer;
