function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="technology-icon"
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="technology-card-bottom">
        <span className="rating">
          ★ {technology.rating}
        </span>

        <button
          type="button"
          className="add-stack-button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;