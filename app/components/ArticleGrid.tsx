import { ReactNode } from "react";

interface ArticleGridProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const ArticleGrid = ({ children, title, description }: ArticleGridProps) => {
  return (
    <section className="container md:mx-auto max-w-[1136px] my-6 px-6 md:px-0">
      {(title || description) && (
        <div className="mb-6">
          {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
          {description && <p className="text-gray-600">{description}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};

export default ArticleGrid;
