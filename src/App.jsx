import { useEffect, useState } from 'react';
import './App.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  );
}

// StudentProfile Component
function StudentProfile({
  name,
  department,
  year,
  count,
  setCount
}) {

  // Update document title whenever count changes
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    // Cleanup function
    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div className="student-profile">

      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p className="practice-count">
        <strong>Practice Sessions:</strong> {count}
      </p>

      <div className="button-group">

        <button onClick={() => setCount(count + 1)}>
          Complete Practice
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

      </div>

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
  const studentName = 'Anu';
  const studentDepartment = 'CSE';
  const studentYear = '3rd Year';

  // Practice count state
  const [count, setCount] = useState(0);

  // Profile visibility state
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="container">

      <Header />

      <main>

        <button
          className="toggle-button"
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>

        {showProfile && (
          <StudentProfile
            name={studentName}
            department={studentDepartment}
            year={studentYear}
            count={count}
            setCount={setCount}
          />
        )}

      </main>

      <Footer />

    </div>
  );
}

export default App;