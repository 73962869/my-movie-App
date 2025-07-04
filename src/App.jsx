import { useEffect, useState } from 'react';
import { fetchMovies } from './utils/api';
import MovieCard from './components/MovieCard';
import './styles/App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [liked, setLiked] = useState({});
  const [bookmarked, setBookmarked] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set('query', searchQuery);
    } else {
      params.delete('query');
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMovies(searchQuery);
      setMovies(result);
    };
    if (searchQuery) fetchData();
  }, [searchQuery]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    if (query) {
      setSearchQuery(query);
    }
  }, []);

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setSearchQuery('');
    setMovies([]);
    setLiked({});
    setBookmarked({});
    window.history.replaceState({}, '', window.location.pathname);
  };

  return (
    <div className="app">
      <h1>🎬 영화 검색 앱</h1>
      <div className="search-box">
        <input
          type="text"
          value={searchQuery}
          placeholder="영화 제목을 입력하세요"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleReset}>초기화</button>
      </div>

      <div className="movie-list">
        {movies.length === 0 && searchQuery && <p>검색 결과가 없습니다.</p>}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            liked={liked[movie.id]}
            bookmarked={bookmarked[movie.id]}
            onLike={() => toggleLike(movie.id)}
            onBookmark={() => toggleBookmark(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
