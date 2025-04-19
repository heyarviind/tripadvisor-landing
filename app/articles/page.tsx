import Header from "../components/Header";
import Footer from "../components/Footer";
import Article from "../components/Article";
import ArticleGrid from "../components/ArticleGrid";

export default function ArticlesPage() {
  return (
    <>
      <Header />

      <div className="pt-24">
        <ArticleGrid
          title="Featured Travel Articles"
          description="Discover inspiration for your next adventure"
        >
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/0d/caption.jpg?w=600&h=400&s=1"
            title="5 flower festivals worth planning a trip around"
          />
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b1/2a/49/narrow-streets-of-europe.jpg?w=600&h=400&s=1"
            title="6 family-friendly European cities for spring break"
          />
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/moraine-lake.jpg?w=600&h=400&s=1"
            title="A first timer's guide to Canada's national parks"
          />
        </ArticleGrid>

        <ArticleGrid
          title="Seasonal Travel Ideas"
          description="Plan your perfect getaway for any time of year"
        >
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/73/caption.jpg?w=600&h=400&s=1"
            title="10 best summer beach destinations"
          />
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cd/12/43/caption.jpg?w=600&h=400&s=1"
            title="Breathtaking fall foliage road trips"
          />
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/04/94/59/caption.jpg?w=600&h=400&s=1"
            title="Winter wonderlands: Best ski resorts worldwide"
          />
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/6f/55/caption.jpg?w=600&h=400&s=1"
            title="Spring break destinations for every type of traveler"
          />
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5a/76/caption.jpg?w=600&h=400&s=1"
            title="Most romantic getaways for couples"
          />
          <Article
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/3c/de/3b/caption.jpg?w=600&h=400&s=1"
            title="Family-friendly vacation spots everyone will love"
          />
        </ArticleGrid>
      </div>

      <Footer />
    </>
  );
}
