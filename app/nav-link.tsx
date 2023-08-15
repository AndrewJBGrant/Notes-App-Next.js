"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, children }: any) {
  let segment = useSelectedLayoutSegment();
  let active = href === `${segment}`;
console.log({segment})
  // console.log({href, segment});
  console.log({ href, active });

  return (
    <Link className={active ? "text-orange-500" : ""} href={href}>
      {children}
    </Link>
  );
}
