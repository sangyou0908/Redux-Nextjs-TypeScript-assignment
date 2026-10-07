import { getMovieDetail } from "@/lib/tmdb";

type MovieDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  // 영화 상세페이지 loading 화면 확인용(Delay 코드이며, 확인 후 삭제 필요)
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const { id } = await params;

  // 영화 상세페이지 Error 화면 확인용(확인 후 삭제 필요)
  // throw new Error("Error UI 확인용 오류");

  const movie = await getMovieDetail(id);

  return (
    <main>
      <h1>{movie.title}</h1>
      <p>평점: {movie.vote_average}</p>
      <p>개봉일: {movie.release_date}</p>

      <p>
        상영 시간:
        {movie.runtime !== null ? ` ${movie.runtime}분` : " 정보 없음"}
      </p>

      <p>{movie.overview}</p>

      <p>장르: {movie.genres.map((genre) => genre.name).join(", ")}</p>
    </main>
  );
}
