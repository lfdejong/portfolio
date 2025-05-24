import { useCallback, useEffect, useState, lazy, Suspense } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

// Import thumbnails
import pillowThum from "./Components/Images/thumbnails/cushion-thumbnail.jpg";
import roccoThum from "./Components/Images/thumbnails/seasonsrocco-thumbnail.jpg";
import pandemoniumThum from "./Components/Images/thumbnails/pandemonium-thumbnail.jpg";
import nonograveThum from "./Components/Images/thumbnails/nonograve-thumbnail.jpg";
import bestiaryThum from "./Components/Images/thumbnails/beastiary-thumbnail.jpg";
import frogThum from "./Components/Images/thumbnails/frog-thumbnail.jpg";

const componentMap = {
  Pillow: lazy(() => import("./Components/projects/Pillow")),
  Rocco: lazy(() => import("./Components/projects/Rocco")),
  Pandemonium: lazy(() => import("./Components/projects/Pandemonium")),
  Nonograve: lazy(() => import("./Components/projects/Nonograve")),
  Bestiary: lazy(() => import("./Components/projects/Bestiary")),
  Frog: lazy(() => import("./Components/projects/Frog")),
};

function Portfolio() {
  const projects = [
    { id: 1, title: "Pillow Controller", component: "Pillow", thumbnail: pillowThum },
    { id: 2, title: "Seasons of Rocco", component: "Rocco", thumbnail: roccoThum },
    { id: 3, title: "Pandemonium's Gate", component: "Pandemonium", thumbnail: pandemoniumThum },
    { id: 4, title: "Nonograve", component: "Nonograve", thumbnail: nonograveThum },
    { id: 5, title: "Bestiary", component: "Bestiary", thumbnail: bestiaryThum },
    { id: 6, title: "Frog-Api", component: "Frog", thumbnail: frogThum },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false, align: "center" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedIndex(null);
  };

  const openProject = useCallback((project, index) => {
    setSelectedProject(project);
    setSelectedIndex(index);
    if (emblaApi) {
      setTimeout(() => emblaApi.reInit(), 100);
    }
  }, [emblaApi]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!emblaApi || selectedProject) return;
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      if (e.key === "ArrowRight") emblaApi.scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, selectedProject]);

  return (
    <div className="portfolio-container">
      <div className={`carousel-wrapper ${selectedProject ? "open" : "closed"}`}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project, index) => {
              const isActive = index === selectedIndex;
              const isAdjacent =
                Math.abs(index - selectedIndex) === 1 ||
                (selectedIndex === 0 && index === projects.length - 1) ||
                (selectedIndex === projects.length - 1 && index === 0);

              let slideClass = "carousel-slide";
              if (isActive) slideClass += " carousel-active";
              else if (isAdjacent) slideClass += " carousel-adjacent";
              else slideClass += " carousel-hidden";

              return (
                <div
                  key={project.id}
                  className={slideClass}
                  onClick={() => openProject(project, index)}
                >
                  <img src={project.thumbnail} alt={project.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedProject && (
        <motion.div
          className="project-detail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          ref={(el) => {
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <button onClick={closeProject} className="close-button">
            ×
          </button>
          <Suspense fallback={<div>Loading project...</div>}>
            {componentMap[selectedProject.component] && 
              (() => {
                const Component = componentMap[selectedProject.component];
                return <Component />;
              })()
            }
          </Suspense>
        </motion.div>
      )}
    </div>
  );
}

export default Portfolio;

