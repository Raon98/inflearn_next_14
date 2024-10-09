import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  console.log(router.query);
  return <h1>Search {q}</h1>;
}
