import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2>해당 영화를 찾을 수 없습니다.</h2>
      <p>영화가 삭제되었거나 존재하지 않는 영화 ID입니다.</p>
      <Link href="/movies">영화 목록으로 돌아가기</Link>
    </main>
  );
}
