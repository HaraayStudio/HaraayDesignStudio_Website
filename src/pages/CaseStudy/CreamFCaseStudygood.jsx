import React, { useRef, useEffect , useState} from "react"; // Add useRef and useEffect here
import { motion } from "framer-motion";

import styles from "./AkoyaCaseStudy.module.scss";
import { useInView } from "react-intersection-observer";

import akoyahero from "../../assets/creamforestcase_heroimg.svg";
import akoyaoverview from "../../assets/creamforest__casestudy_overview.svg";
import akoyabranding from "../../assets/creamforest_casestudy_branding.svg";
import akoyacolorpallet from "../../assets/bakers_casestudy_colorpallet.svg";
import akoyapackaging from "../../assets/CreamForest/CreamFimg4.svg";
import bakersstudiesimg1 from "../../assets/Serene/SerenHero.webp";
import bakersstudiesimg2 from "../../assets/Purus/Purusimghero.svg";
import bakersstudiesimg3 from "../../assets/Akoya/AkoyaFullimg.png";
import iconarrow from "../../assets/iconarrow.png";
import iconarrow2 from "../../assets/iconarrow2.png";
const CreamforestCaseStudy = () => {
  const heroRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true, // Reveal only once
    threshold: 0.2, // Percentage of the section visible before triggering
  });

  // Motion variants for animation
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start state: hidden and shifted down
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // End state: visible and smooth
  };
  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8 }, // delay each card by 0.3s
    }),
  };
const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible1, setIsVisible1] = useState(false); 
  const handleToggle1 = () => {
    setIsVisible1(!isVisible1);
  };

  const cards = [
    { src: bakersstudiesimg1, title: "Serene Skin" },
    { src: bakersstudiesimg2, title: "Purus" },
    { src: bakersstudiesimg3, title: "Akoya" },
  ];

  // useEffect(() => {
  //   const heroElement = heroRef.current;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         heroElement.style.position = "sticky";
  //         heroElement.style.top = "0";
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );
  //   observer.observe(heroElement);

  //   return () => {
  //     observer.unobserve(heroElement);
  //   };
  // }, []);

  return (
    <motion.div
    
    className={styles.akoyacasestudy}
  >
    <div className={styles.akoyahero} ref={heroRef}>
      <div className={styles.akoyaherobackground}>
        <img
          src={akoyahero}
          
          alt="akoya Street Case Study"
        />
      </div>
      <div className={styles.akoyaherocontent}>
        <h1>Cream Forest</h1>
        <p>Brand Identity | Packaging </p>
      </div>
    </div>

     <div className={styles.akoyacasecontainer}>
      <div className={styles.akoyacasesection}>
        <div className={styles.akoyacasetext}>
          <h2>Client Brief</h2>
         <div className={styles.rightbox}>
         <p>
         Cream Forest, an ice cream brand, envisioned a playful yet premium identity for their website and branding. They wanted the design to evoke the feeling of indulgence, freshness, and nature, aligning with their brand name.
          
          </p>
         </div>
        </div>
        <div className={styles.akoyacasetext}>
          <h2>Overview</h2> <div className={styles.rightbox}>
          <p>
          Creamforest is a company that is dedicated to the production and sales and milk-delivered products in this case developing a more natural ice cream focused on new consumer and personal care trends. we created a brand identity and packaging for them.
          </p>
        </div>
        </div>
        {/* <div className={styles.carousel}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={styles.akoyascaseimage}
          />  
        </div> */}
        
        <img
            src={akoyaoverview}
           
            className={styles.akoyascaseimage}
          />
      </div>

      <div className={styles.akoyacasebranding}>
        <div className={styles.akoyacasetext}>
          <h2>Branding</h2>  <div className={styles.rightbox}>
          <p>
          Our job consisted of creating a brand and its packaging for a product based an artisanal and more natural ice caring for our body as a container of life; this was transferred to the logo
          {isVisible1 && (
              <>
             that consists of a very expensive and classic typeface after the packaging was made in the which we rainforce the concept with very striking flat colors with large texts, illustrations and abstract brush strokes in black have a powerful construct.
              </>
            )}
             <p className={styles.readmorebtn} onClick={handleToggle1}>
              {isVisible1 ? (
                <>
                  Read Less <img src={iconarrow} alt="Arrow Icon" />
                </>
              ) : (
                <>
                  Read More <img src={iconarrow2} alt="Arrow Icon" />
                </>
              )}
            </p>
            </p>
        </div>
      
       
        </div>
        <img
          src={akoyabranding}
          alt="Branding"
          className={styles.akoyascaseapproachimage}
        />
      </div>

      <div className={styles.akoyacasecolorpalette}>
        <div className={styles.akoyacasetext}>
          <h2>Packaging</h2>   <div className={styles.rightbox}>
          <p>
          For the packaging we worked on abstract strokes as well as Illustration based artworks, according to the flavours of the ice cream. Keeping it artisanal and more natural look.

          </p>
          <div className={styles.packagingakoyadiv}>
            <div>
              <h3>Sector</h3>
              <p>Food and Beverage</p>
            </div>
            <div>
              <h3>Discipline</h3>
              <p>Branding & Packaging</p>
            </div>
          </div></div>
        </div>
        <img
          src={akoyapackaging}
          alt="Color Palette" 
        
          className={styles.akoyascaseapproachimage}
        />
      </div>
    </div> 

    <div className={styles.akoyacasecasestudiescontainer}>    <h3 className={styles.casestudyhead}>See All Projects <svg xmlns="http://www.w3.org/2000/svg" width="58" height="34" viewBox="0 0 58 34" fill="none">
      <path d="M38.6667 33.918C38.6667 32.1248 40.4381 29.4471 42.2313 27.1996C44.5368 24.2996 47.2918 21.7694 50.4503 19.8385C52.8187 18.3909 55.6897 17.0013 58 17.0013M58 17.0013C55.6897 17.0013 52.8163 15.6117 50.4503 14.1641C47.2918 12.2308 44.5368 9.70054 42.2313 6.80538C40.4381 4.55546 38.6667 1.87296 38.6667 0.0846243M58 17.0013L0 17.0013" stroke="#2B2322" stroke-width="4"/>
    </svg></h3>
        <div className={styles.akoyacasecasestudies}>
          {cards.map((card, index) => (
            <div key={index} className={styles.akoyacasecasestudy}>
              <img
                src={card.src}
                alt={card.title}
                className={styles.akoyacasecasestudyimage}
              />
              <p className={styles.akoyacasecasestudytitle}>{card.title}</p>
            </div>
          ))}
        </div>
        <button className={styles.akoyacasecasestudiesbutton}>
          See All Case Studies
          <span className={styles.akoyacasebuttonicon}></span>
        </button>
      </div>
  </motion.div>
  )
}

export default CreamforestCaseStudy