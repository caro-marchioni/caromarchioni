"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PENDING_HASH_KEY = "pending-hash-scroll";

function scrollToHash(hash: string) {
  if (!hash) return;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const element = document.getElementById(id);
  if (!element) return;

  requestAnimationFrame(() => {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function HashScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const pendingHash = window.sessionStorage.getItem(PENDING_HASH_KEY);

    if (pendingHash) {
      window.sessionStorage.removeItem(PENDING_HASH_KEY);
      scrollToHash(pendingHash);
      return;
    }

    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }
  }, [pathname]);

  useEffect(() => {
    function handleHashChange() {
      scrollToHash(window.location.hash);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}

export function setPendingHash(hash: string) {
  window.sessionStorage.setItem(PENDING_HASH_KEY, hash);
}
