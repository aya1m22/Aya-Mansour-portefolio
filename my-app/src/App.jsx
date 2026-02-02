function App() {
  return (
    <div className="cv-container">

      {/* LEFT SIDE */}
      <div className="cv-left">
       <img src="/images/profile.jpg.jfif" className="profile-img" />


        <h2 className="name">Aya Said Mansour</h2>

        <div className="contact">
          <p>📞 +44 7828 043 298</p>
          <p>📞 +961 76 647 155</p>
          <p>✉️ aya12m34@gmail.com</p>
          <p>📍 Tyre, Lebanon</p>
        </div>

        <div className="section">
          <h3>Skills</h3>
        <h4>Technical Skills</h4>
          <ul>
            <li>Data Entry & Reporting</li>
            <li>Microsoft Excel, Word, PowerPoint</li>
            <li>SQL / Oracle Basics</li>
            <li>VB.NET & Java Basics</li>
            <li>HTML & CSS</li>
            <li>System Analysis (MERISE)</li>
          </ul>

          <h4>Soft Skills</h4>
          <ul>
            <li>Communication & Teamwork</li>
            <li>Fast Typing & High Accuracy</li>
            <li>Problem-solving</li>
            <li>Time Management</li>
            <li>Adaptable & Quick Learner</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="cv-right">

        <div className="section">
          <h3>Career Objective</h3>
          <p>
            Motivated MIS graduate with hands-on experience in data entry,
            information management, and reporting. Seeking to contribute to
            an NGO environment by supporting data organization and reporting
            tasks with high accuracy and responsibility.
          </p>
        </div>

        <div className="section">
          <h3>Education</h3>
          <p><strong>TS Diploma in Management Information Systems</strong></p>
          <p>Siblin Training Center (STC) – Saida, Lebanon</p>
          <p>2023 – 2025</p>

          <p><strong>Baccalaureate Degree – Life Sciences</strong></p>
          <p>Al Aqsa School – Tyre, Lebanon</p>
          <p>2022 – 2023</p>
        </div>

        <div className="section">
          <h3>Work Experience</h3>
          <p><strong>Data Entry & Maintenance Assistant</strong></p>
          <p>Vsign – Tyre, Lebanon | 2024 – 2025</p>
          <ul>
            <li>Entered and managed technical and customer data with high accuracy.</li>
            <li>Assisted with electronics and laptop maintenance.</li>
            <li>Supported administrative workflows and documentation.</li>
            <li>Customer service and troubleshooting support.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Volunteer Experience</h3>
          <p><strong>Volunteer – Child Activities & Community Support</strong></p>
          <p>Nabaa Association & Najdeh Association – Tyre, Lebanon | 2025</p>
          <ul>
            <li>Organized educational and recreational activities for children.</li>
            <li>Supported event planning and group coordination.</li>
            <li>Developed communication and child-management skills.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Projects</h3>
          <p><strong>Water Company Management System – Graduation Project</strong></p>
          <p>VB.NET + Oracle Database + Crystal Reports</p>
          <ul>
            <li>Developed a full management system for water company operations.</li>
            <li>Handled billing, inventory, and product tracking.</li>
            <li>Designed database structure and system workflows.</li>
            <li>Built user interfaces linked to Oracle database.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Courses & Certifications</h3>
          <ul>
            <li>ICDL / MS Office</li>
            <li>SQL / Oracle Basics</li>
            <li>Robotics – DOT Company</li>
            <li>Programming Basics (Java, VB.NET)</li>
            <li>Web Basics (HTML / CSS)</li>
            <li>Networking Fundamentals (CCNA)</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default App
