import { fetchAnime } from "./action";

import LoadMore from "../components/LoadMore";
import Hero from "@/components/Hero";

async function Home() {
  await fetchAnime;
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-20 xl:px-48 justify-center items-center">
      <Hero />

      <h2 className="text-5xl text-white font-bold">Explore Anime</h2>
      <LoadMore />
    </main>
  );
}

export default Home;
