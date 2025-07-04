# 🎬 React Movie Search App

TMDB API를 활용한 실시간 영화 검색 앱입니다.  
React + Vite 기반으로 제작되었으며, 검색, 좋아요, 즐겨찾기, 초기화, 쿼리 파라미터 반영 등의 기능이 포함되어 있습니다.

---

## 🔧 주요 기능

- 🔍 **영화 검색** – TMDB API를 통해 실시간 검색
- ❤️ **좋아요 기능** – 각 영화에 좋아요 추가/제거
- ⭐ **즐겨찾기 기능** – 즐겨찾기 목록 추가/제거
- 🔁 **초기화 버튼** – 검색결과 및 좋아요/즐겨찾기 상태 초기화
- 🌐 **URL 쿼리 반영** – 검색어가 브라우저 주소에 자동 반영됨
- 🧩 **카드 스타일 UI** – 반응형 그리드 기반 영화 카드 디자인

---

## 🖼️ 사용 기술

- React
- Vite
- JavaScript (ES6+)
- CSS (모듈 방식)
- TMDB API

---

## 📁 프로젝트 구조

```bash
react-movie-app/
├── public/             # 정적 리소스
├── src/
│   ├── components/     # MovieCard 등 UI 컴포넌트
│   ├── utils/          # API 호출 함수
│   ├── styles/         # CSS 파일
│   ├── App.jsx
│   └── index.js
├── .env                # API 키 보관 (VITE_TMDB_API_KEY=...)
├── package.json
└── README.md
