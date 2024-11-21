import Link from "next/link";
import { PropsWithChildren } from "react";
import style from "./global-layout.module.css";
export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚 ONEBITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 : @Raon98</footer>
    </div>
  );
}
