import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <h1>Post: {router.query.slug}</h1>;
}
