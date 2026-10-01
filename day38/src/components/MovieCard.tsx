import Link from "next/link";
import type { Movie } from "@/types/movie";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className={styles.card}>
      <h2>{movie.title}</h2>
      <p>평점: {movie.vote_average}</p>

      <p>
        {movie.poster_path !== null
          ? movie.poster_path
          : "포스터 없음"}
      </p>

      <Link href={`/movies/${movie.id}`}>
        상세 보기
      </Link>
    </article>
  );
}
