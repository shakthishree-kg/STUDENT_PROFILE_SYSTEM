import './App.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  );
}

// Reusable StudentProfile Component
function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <h3>{name}</h3>
      <p>
        <strong>Department:</strong> {department}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      © 2026 Student Management System
    </footer>
  );
}

// Main App Component
function App() {
  // Student details
  const student1 = {
    name: 'Anu',
    department: 'CSE',
    year: '3rd Year'
  };

  const student2 = {
    name: 'Bala',
    department: 'Computer Science',
    year: '3rd Year'
  };

  return (
    <div className="container">

      <Header />

      <main>
        <section>
          <h2>Student 1</h2>

          <StudentProfile
            name={student1.name}
            department={student1.department}
            year={student1.year}
          />
        </section>

        <section>
          <h2>Student 2</h2>

          <StudentProfile
            name={student2.name}
            department={student2.department}
            year={student2.year}
          />
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;