import Hero from "../layouts/Hero";
import HotTopics from "../ui/HotTopics";
import FeaturedProducts from "../ui/FeaturedProducts";
import FeaturedArticles from "../ui/FeaturedArticles";
import FeaturedCategories from "../ui/FeaturedCategories";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-inherit bg-center bg-[url('https://images.pexels.com/photos/3845407/pexels-photo-3845407.jpeg?auto=compress&cs=tinysrgb&w=600')]">
      <main className="flex-grow">
        <Hero />{" "}
        <div className="container mx-auto max-w-6xl px-2 sm:px-4">
          <FeaturedCategories />
          <FeaturedArticles />
          <HotTopics />
          <FeaturedProducts />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
