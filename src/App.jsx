import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load technologies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <section id="technologies" className="technologies-section">
        <div className="container">
          <h2>Technologies</h2>

          {loading ? (
            <div className="loading-state">
              Loading technologies...
            </div>
          ) : (
            <p>{technologies.length} technologies loaded.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default App;