import MovieCard from "@/components/MovieCard";
import { getTopRatedMovies } from "@/lib/tmdb";

export default async function TopRatedMoviesPage() {
  const data = await getTopRatedMovies();

  return (
    <main>
      <h1>평점 높은 영화</h1>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
