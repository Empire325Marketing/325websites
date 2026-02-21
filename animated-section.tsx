"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
}

export default function AnimatedSection({ id, children }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`
        bg-white border border-gray-200 rounded-2xl px-5 py-6 sm:px-10 sm:py-9 mb-5
        shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.03)]
        transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        will-change-[transform,box-shadow]
        hover:-translate-y-1.5 hover:border-[rgba(13,194,204,0.25)]
        hover:shadow-[0_4px_8px_rgba(0,0,0,0.04),0_12px_28px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.05)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {children}
    </section>
  );
}
