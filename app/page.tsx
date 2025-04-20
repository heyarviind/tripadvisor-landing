/*
  This is a hackathon project by Arvind singh, heyarviind@gmail.com
  This is a clone of the tripadvisor website
*/

"use client";

import Header from "./components/Header";
import ListSlider from "./components/ListSlider";
import Search from "./components/Search";
import Thumbnails from "./components/Thumbnails";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Article from "./components/Article";
import ArticleGrid from "./components/ArticleGrid";
import AIBanner from "./components/AIBanner";
import ViewAllButton from "./components/ViewAllButton";
import AIChatBot from "./components/AIChatBot";
import TravellersChoiceBanner from "./components/TravellersChoiceBanner";
import { AIChatProvider } from "./context/AIChatContext";

export default function Home() {
  return (
    <AIChatProvider>
      <AIChatBot />
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />

      {/* AI Banner */}
      <AIBanner />

      {/* Beach Slides */}
      <section className="container md:mx-auto max-w-[1136px] my-16 px-6 md:px-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-[700] leading-[29px]">
            Explore the world&apos;s most stunning seasides
          </h2>
          <ViewAllButton />
        </div>
        <p className="text-base text-[#333] mb-4">
          2025&apos;s Travelers&apos; Choice Awards Best of the Best Beaches
        </p>

        <ListSlider>
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/4f/f7/caption.jpg?w=600&h=-1&s=1"
            title="World"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/50/7b/caption.jpg?w=600&h=-1&s=1"
            title="Europe"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/50/f6/caption.jpg?w=600&h=-1&s=1"
            title="Asia"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/0b/caption.jpg?w=600&h=-1&s=1"
            title="South Pacific"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/9a/caption.jpg?w=600&h=-1&s=1"
            title="Caribbean"
          />
        </ListSlider>
      </section>

      {/* Experiences */}
      <section className="container md:mx-auto max-w-[1136px] my-16 px-6 md:px-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-[700] leading-[29px]">
            Ways to tour Chandigarh
          </h2>
          <ViewAllButton />
        </div>
        <p className="text-base text-[#333] mb-4">
          Book these experiences for a close-up look at Chandigarh.
        </p>

        <ListSlider>
          <Experience
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d7/8d/e4/caption.jpg?w=600&h=600&s=1"
            title="2 Day Chandigarh Architecture History Tour"
            rating={4.8}
            reviewCount={22}
            price={72}
            currency="$"
          />
          <Experience
            imageUrl="	https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/60/17/91/caption.jpg?w=600&h=600&s=1"
            title="Highlights of the Chandigarh (Guided Half Day City Tour)"
            rating={5.0}
            reviewCount={3}
            price={65}
            currency="$"
          />
          <Experience
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/32/70/79/caption.jpg?w=600&h=600&s=1"
            title="Private 7 Days Shimla Manali Hill Stations Tour From Chandigarh"
            rating={5.0}
            reviewCount={32}
            price={50}
            currency="$"
          />
          <Experience
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/cd/81/ae/caption.jpg?w=600&h=600&s=1"
            title="Private Chandigarh Sightseeing City Tour"
            rating={5.0}
            reviewCount={15}
            price={55}
            currency="$"
          />
        </ListSlider>
      </section>

      {/* More to explore */}
      <section className="my-16 bg-stone-100 py-6 px-6 md:px-0">
        <div className="container mx-auto max-w-[1136px]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-[700] leading-[29px]">
              More to explore
            </h2>
            <ViewAllButton />
          </div>

          <ArticleGrid>
            <Article
              imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/19/da/a2/ef06936c-bcff-483b.jpg?w=800&h=500&s=1"
              title="5 flower festivals worth planning a trip around"
            />
            <Article
              imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/19/db/20/c9de0324-9722-44d4.jpg?w=800&h=500&s=1"
              title="6 family-friendly European cities for spring break"
            />
            <Article
              imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/19/db/4b/484d3b2e-17a7-4a47.jpg?w=800&h=500&s=1"
              title="A first timer's guide to Canada's national parks"
            />
          </ArticleGrid>
        </div>
      </section>

      {/* Top destinations */}
      <section className="container md:mx-auto max-w-[1136px] my-16 px-6 md:px-0">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-[700] leading-[29px]">
            Top destinations for your next vacation
          </h2>
          <ViewAllButton />
        </div>

        <ListSlider>
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/4f/f7/caption.jpg?w=600&h=-1&s=1"
            title="Rome"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/50/7b/caption.jpg?w=600&h=-1&s=1"
            title="Paris, France"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/50/f6/caption.jpg?w=600&h=-1&s=1"
            title="Las Vegas, NV"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/0b/caption.jpg?w=600&h=-1&s=1"
            title="Reykjavik, Iceland"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/9a/caption.jpg?w=600&h=-1&s=1"
            title="London, UK"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/9a/caption.jpg?w=600&h=-1&s=1"
            title="Florence, Italy"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/9a/caption.jpg?w=600&h=-1&s=1"
            title="New York, NY"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/9a/caption.jpg?w=600&h=-1&s=1"
            title="Barcelona, Spain"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/9a/caption.jpg?w=600&h=-1&s=1"
            title="Dubai, UAE"
          />
          <Thumbnails
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/c1/51/9a/caption.jpg?w=600&h=-1&s=1"
            title="Queensland, Australia"
          />
        </ListSlider>
      </section>

      {/* Travellers&apos; Choice Awards Banner */}
      <TravellersChoiceBanner />

      {/* Footer */}
      <Footer />
    </AIChatProvider>
  );
}
