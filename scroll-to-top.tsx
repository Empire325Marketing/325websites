"use client";

export default function ScrollToTop() {
  return (
    <div className="text-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          inline-flex items-center gap-1.5 mt-6 px-5 py-2.5
          text-[13px] font-medium text-[#0dc2cc]
          bg-[#E8FAFB] border border-[#A3F0E8] rounded-full
          shadow-[0_2px_6px_rgba(13,194,204,0.1)]
          transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          hover:bg-[#0dc2cc] hover:text-white hover:border-[#0dc2cc]
          hover:shadow-[0_6px_18px_rgba(13,194,204,0.3)] hover:-translate-y-0.5
          cursor-pointer
        "
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        Back to top
      </button>
    </div>
  );
}
