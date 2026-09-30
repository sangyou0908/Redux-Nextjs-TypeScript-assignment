import type { RecommendedMovie } from "@/types/recommendedMovie";
import styles from "./RecommendedMovieCard.module.css";

type RecommendedMovieCardProps = {
  movie: RecommendedMovie;
};

export default function RecommendedMovieCard() {
  return (
    <article className={style.card}>
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
      <p>{movie.reason}</p>
      <p>
        {movie.poster_path !== null
          ? movie.poster_path
          : "포스터 이미지가 없습니다"}
      </p>
      <p>{movie.badge !== null ? movie.badge : "일반 추천"}</p>
    </article>
  );
}
