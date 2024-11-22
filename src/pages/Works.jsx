import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/Works.module.scss";
import heroimg1 from "../assets/bakers_casestudy_details_overviewimg2.svg";
import heroimg2 from "../assets/purus_casestudy_overview.svg";
import heroimg6 from "../assets/purus_casestudy_hero.svg";
import heroimg4 from "../assets/Serenecasepackaging1.svg";
import heroimg5 from "../assets/SereneCasestudyPackaging.svg";
import heroimg3 from "../assets/ViratCasestudyPackaging2.svg";
import Letstalk from "../components/Letstalk";

// Example data for works (replace with your actual data)
const worksData = [
  { id: 1, title: "Purus", tag: "Branding", image: heroimg1 },
  { id: 2, title: "Serene Skin", tag: "Branding", image: heroimg2 },
  { id: 3, title: "Virat", tag: "Websites", image: heroimg6 },
  { id: 4, title: "Akoya", tag: "Branding", image: heroimg4 },
  { id: 5, title: "Cream Forest", tag: "Websites", image: heroimg5 },
  { id: 6, title: "BMS", tag: "Websites", image: heroimg3 },
  { id: 7, title: "Baker's Street", tag: "Branding", image: heroimg3 },
  { id: 8, title: "Lok Neta", tag: "Websites", image: heroimg3 },
  { id: 9, title: "Hathikari & Co", tag: "Websites", image: heroimg4 },
  { id: 10, title: "Lok Neta", tag: "Websites", image: heroimg1 },
  { id: 11, title: "Lok Neta", tag: "Websites", image: heroimg2 },
  { id: 12, title: "Lok Neta", tag: "Websites", image: heroimg3 },
  { id: 13, title: "Lok Neta", tag: "Websites", image: heroimg4 },
  { id: 14, title: "Lok Neta", tag: "Websites", image: heroimg5 },
];

// Filters
const filters = ["All Works", "Branding", "Websites"];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("All Works");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const imageRefs = useRef([]);

  // Filter and paginate the works
  const filteredWorks =
    activeFilter === "All Works"
      ? worksData
      : worksData.filter((work) => work.tag === activeFilter);

  const totalPages = Math.ceil(filteredWorks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedWorks = filteredWorks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // GSAP reveal animation for images
  useEffect(() => {
    imageRefs.current.forEach((img, idx) => {
      // const direction = idx % 2 === 0 ? -100 : 100; // Alternate left and right
      gsap.fromTo(
        img,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          delay: idx * 0.2,
          ease: "power2.out",
        }
      );
    });
  }, [displayedWorks]); // Trigger animation on filter or pagination change

  return (
    <div className={styles.WorkMain}>
      {/* Header Section */}
      <div className={styles.Header}>
        <div className={styles.headerText}>
          <h1>All Latest Works</h1>
          <div className={styles.filterButtons}>
            {filters.map((filter, idx) => (
              <button
                key={idx}
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.active : ""
                }`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Work Items Grid */}
      <div className={styles.workGrid}>
        {displayedWorks.map((work, idx) => (
          <div
            key={work.id}
            className={`${styles.workItem} ${
              idx % 2 === 0 ? styles.fromLeft : styles.fromRight
            }`}
            ref={(el) => (imageRefs.current[idx] = el)} // Assign ref for GSAP
          >
            <img
              src={work.image}
              alt={work.title}
              className={styles.workImage}
            />
            <div className={styles.workTitle}> {work.title} </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Letstalk />
    </div>
  );
}
