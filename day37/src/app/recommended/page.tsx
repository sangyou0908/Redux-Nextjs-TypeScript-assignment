import Link from "next/link";
import { RecommendedMovie } from "@/types/recommendedMovie";

const recommendedMovies: RecommendedMovie[] = [
  {
    id: 1,
    title: "오디세이",
    poster_path: "/odyssey.jpg",
    vote_average: 8.6,
    reason: "오디세우스가 집으로 가기 위한 여정에서 여러 스토리가 이어집니다. 각각 스토리마다 충격과 공포, 재미있는 포인트가 하나씩 있습니다. 용아맥에서 못봐서 아쉬워요",
    badge: "완전 추천",
  }, 
  {
    id: 2,
    title: "중경삼림",
    poster_path: "chungking-express",
    vote_average: 8.3,
    reason: "스토리는 조금 모호하게 느껴질 순 있으나 홍콩의 세기말 감성을 느낄 수 있습니다. 영화 속에서 에스컬레이터 씬을 보고 홍콩여행 가보고 싶었어요"
  }, 
  {
    id: 3,
    title: "파묘",
    poster_path: null,
    vote_average: 8.2,
    reason: "혼자보면 무서울 수 있습니다... 기묘하고 긴장감 넘치는걸 좋아한다면 추천합니다. 묫자리를 잘못 건드려서 생기는 기묘한 스토리.. 넘 재밌어서 시간가는줄 모르고 봤네요"
    badge: "심약자 주의",
  },
];

export default function Page() {
  return (
    <header>
      <h1>
        <Link href="/recommended">추천 영화</Link>
      </h1>
    </header>
  );
}
