import Link from "next/link";

export default function ViewAllButton() {
  return (
    <Link
      href="#"
      className="text-black text-base font-bold hover:underline flex items-center"
    >
      View all
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}
