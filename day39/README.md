# Day39 데일리 과제 — 찜한 영화 목록 공유하기 (base)

Day39 Context API 수업 정답 Project에 Header 찜 개수 및 `/favorites` Page의 골격을 추가했습니다.

## 시작하기
1. `.env.local`에서 `TMDB_TOKEN=본인의_TMDB_TOKEN`을 실제 Read Access Token으로 변경합니다. `.env.local`은 `.gitignore`에 의해 추적되지 않습니다.
2. `npm install`
3. `npm run dev`
4. `/movies`에서 찜 버튼을 클릭한 뒤 Header와 `/favorites` Page를 확인합니다.

## 과제 위치
- `src/components/FavoriteCount.tsx`: Context에서 favorites 읽기 → 길이 표시
- `src/app/favorites/page.tsx`: Context에서 favorites 읽기 → 빈 화면 또는 찜 목록 표시

`Header.tsx`, CSS, Provider, MovieCard의 기존 찜 로직, TMDB Server Fetching은 제공되어 있습니다.
브라우저 새로고침은 Provider의 메모리 State를 초기화합니다. Link로 이동하며 동작을 확인해 주세요.
