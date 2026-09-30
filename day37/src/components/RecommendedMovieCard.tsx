import type { RecommendedMovie } from "@/types/recommendedMovie";
import styles from "./RecommendedMovieCard.module.css";

type RecommendedMovieCardProps = {
  movie: RecommendedMovie;
};

export default function RecommendedMovieCard({
  movie,
}: RecommendedMovieCardProps) {
  return (
    <article className={styles.card}>
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}</p>
      <p>{movie.reason}</p>
      <p>
        {movie.poster_path !== null
          ? movie.poster_path
          : "포스터 이미지가 없습니다"}
      </p>
      <span className={styles.badge}>
        {movie.badge !== undefined ? movie.badge : "일반 추천"}
      </span>
    </article>
  );
}
