"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main>
      <h2>영화 상세 정보를 불러오지 못했습니다.</h2>
      <button onClick={() => reset()}>다시 시도</button>
      <Link href="/movies">영화 목록으로 돌아가기</Link>
    </main>
  );
}
