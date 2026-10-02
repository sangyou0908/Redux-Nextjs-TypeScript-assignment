"use client";

import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { useFavorites } from "@/contexts/FavoritesContext";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  // TODO 3. useFavorites()로 favorites 배열을 가져오세요.
  const { favorites } = useFavorites();

  return (
    <main className={styles.page}>
      <div className={styles.intro}>
        <h1>찜한 영화</h1>
      </div>

      {/* TODO 4.
        favorites.length가 0이면 비어 있다는 안내를 보여주고,
        그 외에는 favorites.map()으로 MovieCard 목록을 보여주세요.
        key에는 movie.id, movie Props에는 movie를 전달합니다.
      */}
      <div className={styles.empty}>
        <p>여기에 찜한 영화 목록을 표시해 주세요.</p>
        <Link href="/movies" className={styles.browse}>
          영화 보러 가기
        </Link>
      </div>
    </main>
  );
}
