function App() {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2>My Portfolio</h2>
        <ul style={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#reflection">Reflection</a></li>
        </ul>
      </nav>

      <main style={styles.main}>
       
        <section id="home" style={styles.section}>
          <h1>WELCOME</h1>
          <h1><span style={styles.highlight}>Rizza Jane Belen</span></h1>
          <p>20 years old | October 05, 2005 | Bachelor of Science in Information Technology</p>

          <div style={styles.card}>
            <h3>ABOUT ME</h3>
            <ul>
              <li>I believe that every experience,big or small,is opportunity to grow into a better person. I am a currently a 3rd year students and am studying in information technology,My hobbies is watching kdrama,tiktok and I love hiking,I have a big interest in education.</li>
             
            </ul>
          </div>

          <div style={styles.card}>
            <h3>🏆 Biggest Accomplishment</h3>
            <p>So far my greatest accomplishment for now I can do editing</p>
          </div>

          <div style={styles.card}>
            <h3>💡 Soft Skills</h3>
            <p>Problem-Solving</p>
            <p>Communication</p>
            <p>Critical thinking</p>
            <p>Adaptability</p>
            <p>Teamwork</p>
          </div>
        </section>
        <section id="skills" style={{ ...styles.section, ...styles.sectionAlt }}>
          <h2>💻 Skills</h2>
          <div style={styles.card}>
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
               <li>PHP</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h3>Tools / Frameworks</h3>
            <ul>
              <li>React.js</li>
              <li>Git & GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>
        </section>

        <section id="projects" style={styles.section}>
          <h2>📂 Projects</h2>
          <div style={styles.projectCard}>
            <h3>Student Management System</h3>
            <p>A web app that manages student records.</p>
            <p><strong>Role:</strong> Developer</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
          </div>
        </section>


        <section id="reflection" style={{ ...styles.section, ...styles.sectionAlt }}>
          <h2>🧠 Reflection</h2>
          <div style={styles.card}>
            <p>
              During my studies, I gained a solid understanding of both frontend and backend development. Working with React.js taught me how to create reusable components and manage dynamic user interfaces effectively.
            </p>
          </div>
          <div style={styles.card}>
            <h3>What I Want to Learn More</h3>
            <p>
             I aim to expand my skills in backend technologies, API development, and advanced React features such as hooks, state management, and performance optimization.
            </p>
          </div>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>© 2026 My Portfolio</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "#fff0f5", 
    color: "#4a4a4a",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffb6c1",
    color: "#1e293b",
    padding: "15px 30px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "2px solid #f08080",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  main: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "0 20px",
  },
  section: {
    marginBottom: "40px",
  },
  sectionAlt: {
    background: "#ffe4e1", 
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "40px",
  },
  highlight: {
    color: "#ff69b4", 
  },
  card: {
    background: "#fff0f5", 
    padding: "20px",
    margin: "20px 0",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
  },
  projectCard: {
    background: "#ffc0cb", 
    padding: "20px",
    borderRadius: "12px",
    margin: "20px 0",
    boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
  },
  footer: {
    textAlign: "center",
    background: "#ffb6c1",
    color: "#1e293b",
    padding: "20px",
    marginTop: "40px",
    borderTop: "2px solid #f08080",
  },
};

export default App;