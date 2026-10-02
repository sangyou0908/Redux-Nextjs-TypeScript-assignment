"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import styles from "./Header.module.css";

export default function FavoriteCount() {
  const { favorites } = useFavorites();

  return (
    <span className={styles.favoriteCount} aria-live="polite">
      찜 목록 <strong>{favorites.length}</strong>
    </span>
  );
}
