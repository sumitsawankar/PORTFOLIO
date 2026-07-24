import { useEffect, useState, useRef } from "react";
import "./styles/TechStack.css";

const skills = [
  { name: "HTML / CSS / JavaScript", percentage: 90 },
  { name: "Content Writing", percentage: 90 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "Digital Marketing / SEO", percentage: 85 },
  { name: "AWS Cloud Services", percentage: 75 },
  { name: "C++ / Java / Python", percentage: 70 },
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="techstack-section" ref={sectionRef} id="techstack">
      <div className="techstack-container section-container">
        <h2>
          My <span>Tech Stack</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className={`skill-bar-fill ${isVisible ? "animate" : ""}`}
                  style={{ "--target-width": `${skill.percentage}%` } as React.CSSProperties}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
