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

  const likedMovies = movies.filter((m) => liked[m.id]);
  const bookmarkedMovies = movies.filter((m) => bookmarked[m.id]);

  return (
    <div className="app">
      <h1>🎬 픽플릭 (PickFlick)</h1>
      <div className="search-box">
        <input
          type="text"
          value={searchQuery}
          placeholder="영화 제목을 입력하세요"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleReset}>초기화</button>
      </div>

      <div className="layout">
        {/* 좌측: 좋아요 리스트 (제목만) */}
        <div className="likes-sidebar">
          <h2>❤️ 좋아요</h2>
          {likedMovies.length === 0 && <p>없음</p>}
          <ul className="likes-list">
            {likedMovies.map((movie) => (
              <li key={movie.id} className="likes-item">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w92/${movie.poster_path}`
                      : 'https://via.placeholder.com/50x75?text=No+Image'
                  }
                  alt={movie.title}
                />
                <span>{movie.title}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* 중앙: 영화 카드 리스트 */}
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

        {/* 우측: 즐겨찾기 리스트 */}
        <div className="favorites-sidebar">
          <h2>⭐ 즐겨찾기</h2>
          {bookmarkedMovies.length === 0 && <p>없음</p>}
          {bookmarkedMovies.map((movie) => (
            <div key={movie.id} className="favorite-item">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                    : 'https://via.placeholder.com/100x150?text=No+Image'
                }
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
