import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickBtn = () => {
    router.push("/test");
  };
  return (
    <>
      <div className="">
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={() => onClickBtn()}>/test 패이지로 이동</button>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
}
