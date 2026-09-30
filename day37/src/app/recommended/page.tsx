import Link from "next/link";

export default function Page() {
  return (
    <header>
      <h1>
        <Link href="/recommended">추천 영화</Link>
      </h1>
    </header>
  );
}
