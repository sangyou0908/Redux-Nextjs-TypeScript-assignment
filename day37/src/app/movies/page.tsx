import MovieCard from "@/components/MovieCard";
import type { Movie } from "@/types/movie";

const movies: Movie[] = [
  {
    id: 550,
    title: "파이트 클럽",
    poster_path: null,
    vote_average: 8.4,
  },
  {
    id: 27205,
    title: "인셉션",
    poster_path: "/inception.jpg",
    vote_average: 8.3,
  },
];

export default function MoviesPage() {
  return (
    <main>
      <h1>영화 목록</h1>

      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
