import type { RecommendedMovie } from "@/types/recommendedMovie";

type RecommendedMovieCardProps = {
  movie: RecommendedMovie;
};

export default function RecommendedMovieCard() {
  return (
    <article>
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
      <p>{movie.reason}</p>
      <p>
        {movie.poster_path !== null
          ? movie.poster_path
          : "포스터 이미지가 없습니다"}
      </p>
      <p>{movie.badge}</p>
    </article>
  );
}
