import './MovieCard.css';

function MovieCard({ movie }) {
  const { title, overview, poster_path } = movie;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <div className="movie-card-content">
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
