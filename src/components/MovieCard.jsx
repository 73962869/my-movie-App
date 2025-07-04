import './MovieCard.css';

function MovieCard({ movie, liked, bookmarked, onLike, onBookmark }) {
  const { title, overview, poster_path } = movie;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} className="movie-image" />
      <div className="movie-card-content">
        <h2 className="movie-title">
          <a
            href={`https://watcha.com/search?query=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
        <p className="movie-overview">{overview}</p>

        <div className="movie-actions">
          <button onClick={onLike}>
            {liked ? '❤️' : '🤍'} 좋아요
          </button>
          <button onClick={onBookmark}>
            {bookmarked ? '🔖' : '📄'} 즐겨찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
