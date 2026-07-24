import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>Deloitte</h5>
              </div>
              <h3>Jul 2025</h3>
            </div>
            <p>
              Cyber Security Intern at Deloitte, gaining hands-on experience in threat analysis, vulnerability assessment, and risk management while working with industry experts to safeguard systems and data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Intern</h4>
                <h5>AppVersal</h5>
              </div>
              <h3>Mar 2024</h3>
            </div>
            <p>
              Completed a 3-month Digital Marketing Internship at AppVersal, gaining remote work experience representing Hinganghat, Maharashtra.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Writer</h4>
                <h5>Muskurahat Foundation</h5>
              </div>
              <h3>Jan 2024</h3>
            </div>
            <p>
              Worked as a Content Writer Intern at Muskurahat Foundation for 2 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
