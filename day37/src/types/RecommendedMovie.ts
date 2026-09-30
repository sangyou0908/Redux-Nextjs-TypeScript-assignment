export type RecommendedMovie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  reason: string;
  badge?: string;
};
