import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home: NextPage = ({ exploreData,cardsData }) => {
  console.log(cardsData);
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore NearBy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                loaction={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
          {cardsData.map((item: any) => (
             <MediumCard key={item.img}  img={item.img} title={item.title}/>
            ))}
          </div>
        </section>
        <LargeCard
          img='https://images.unsplash.com/photo-1666126452579-f032d653c7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
          title="Matterhorn Mountain"
          discription="Matterhorn Mountain"
          buttonText="Get Inspired"      />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
export const getStaticProps = async () => {
  const exploreData = await fetch('https://my-json-server.typicode.com/lyra-planet/typicode/gets/1').then(res=>res.json())

  const cardsData = await fetch('https://my-json-server.typicode.com/lyra-planet/typicode/airbnb').then(res=>res.json())
  return {
    props: {
      exploreData: exploreData.data,
      cardsData:cardsData.data
    },
    revalidate: 10,
  };
};
