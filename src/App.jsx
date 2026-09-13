import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import YourStack from './components/YourStack';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
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

  // Add technology to stack
  const handleAddToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology from stack
  const handleRemoveFromStack = (id) => {
    const technology = stack.find((item) => item.id === id);

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.success(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.success('All technologies removed from your stack.');
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <Navbar />
      <Hero />

      <section id="technologies" className="technologies-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">EXPLORE TECHNOLOGIES</p>

            <h2>Choose Your Technologies</h2>

            <p>
              Explore popular technologies and start building your perfect
              development stack.
            </p>
          </div>

          {loading ? (
            <div className="loading-state">
              Loading technologies...
            </div>
          ) : (
            <div className="technology-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={handleAddToStack}
                    isAdded={stack.some(
                      (item) => item.id === technology.id
                    )}
                  />
                ))}
              </div>

              <YourStack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;