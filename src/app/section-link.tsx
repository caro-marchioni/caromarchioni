"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { setPendingHash } from "@/app/hash-scroll-manager";

type SectionLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export function SectionLink({
  href,
  className,
  children,
  onClick,
  ...rest
}: SectionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const [path, hash] = href.split("#");
        if (!hash) return;

        event.preventDefault();
        const targetHash = `#${hash}`;
        const targetPath = path || pathname;

        if (targetPath === pathname) {
          history.replaceState(null, "", `${pathname}${targetHash}`);
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          return;
        }

        setPendingHash(targetHash);
        router.push(targetPath);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
