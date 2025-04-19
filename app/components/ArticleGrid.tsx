import { ReactNode } from "react";

interface ArticleGridProps {
  children: ReactNode;
}

const ArticleGrid = ({ children }: ArticleGridProps) => {
  return (
    <section className="container md:mx-auto max-w-[1136px] my-6 px-6 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};

export default ArticleGrid;
