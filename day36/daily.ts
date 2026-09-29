// Day36 Daily 과제
// 목표: Type Error를 읽고 Movie Type을 올바르게 완성합니다.

// --------------------------------------------------
// 1. Movie Type 완성하기
// --------------------------------------------------

type Movie = {
  // TODO: 요구사항에 맞게 Property와 Type을 작성하세요.
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;  
  badge?: string;
};

// --------------------------------------------------
// 2. 영화 데이터의 Type Error 수정하기
// --------------------------------------------------

const movies: Movie[] = [
  {
    id: 27205,
    title: "인셉션",
    poster_path: "/inception.jpg",
    vote_average: 8.4,
    badge: "추천",
  },
  {
    id: 550,
    title: "파이트 클럽",
    poster_path: null,
    vote_average: 8.4,
  },
];

// --------------------------------------------------
// 3. Nullable 값 안전하게 사용하기
// --------------------------------------------------

function getPosterText(movie: Movie): string {
  // TODO
  // poster_path가 null이 아니라면 poster_path를 반환하고,
  // null이라면 "포스터 없음"을 반환하세요.
  if (movie.poster_path !== null) {
    return movie.poster_path;
  }

  return "포스터 없음";
}

// --------------------------------------------------
// 4. any 제거하기
// --------------------------------------------------

function printMovieTitle(movie: Movie) {
  console.log(movie.title);
}
