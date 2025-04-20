import { ReactNode } from "react";
import Image from "next/image";

interface ArticleProps {
  imageUrl: string;
  title: string;
  showHeart?: boolean;
  href?: string;
  children?: ReactNode;
}

const Article = ({
  imageUrl,
  title,
  showHeart = true,
  href = "#",
  children,
}: ArticleProps) => {
  return (
    <div className="flex flex-col h-full group">
      <a href={href} className="relative overflow-hidden rounded-lg block">
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
          {/* Image container */}
          <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Heart icon */}
          {showHeart && (
            <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white focus:outline-none transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          )}
        </div>
      </a>

      {/* Title and optional content */}
      <div className="mt-5 text-center">
        <h3 className="text-lg font-bold leading-[22px] text-gray-20 mx-auto md:max-w-10/12">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Article;
