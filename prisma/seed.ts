import { PrismaClient, Prisma } from '@prisma/client'
const db = new PrismaClient();
const searchPost=[
    {
      img: 'https://z1.muscache.cn/im/pictures/dd9c003a-3449-48f3-b3d0-6aa992740b7c.jpg?aki_policy=large',  
      location: 'Private room in center of London',
      title: 'Stay at this spacious Edwardian House',
      description: '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
      star: "4.73",
      price: '£30 / night',
      total: '£117 total',
      long: "-0.0022275",
      lat: "51.5421655"
    },
    {
      img: 'https://z1.muscache.cn/im/pictures/1b06ce4e-32fd-411a-b375-77c1839c0ca7.jpg?aki_policy=large',  
      location: 'Private room in center of London',
      title: 'Independant luxury studio apartment',
      description: '2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen',
      star: "4.3",
      price: '£40 / night',
      total: '£157 total',
      long: "-0.095091",
      lat: "51.48695"
    },
    {
      img: 'https://z1.muscache.cn/im/pictures/36413918/058798d4_original.jpg?aki_policy=large',
      location: 'Private room in center of London',
      title: 'London Studio Apartments',
      description: '4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine',
      star: "3.8",
      price: '£35 / night',
      total: '£207 total',
      long: "-0.135638",
      lat: "51.521916"
    },
    {
      img: 'https://z1.muscache.cn/im/pictures/f9196647-51ab-4760-9bcc-9826f3a68c75.jpg?aki_policy=large',  
      location: 'Private room in center of London',
      title: '30 mins to Oxford Street, Excel London',
      description: '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
      star:" 4.1",
      price: '£55 / night',
      total: '£320 total',
      long: "-0.069961",
      lat:" 51.472618"
    },
    {
      img: 'https://z1.muscache.cn/im/pictures/f9196647-51ab-4760-9bcc-9826f3a68c75.jpg?aki_policy=large',  
      location: 'Private room in center of London',
      title: 'Spacious Peaceful Modern Bedroom',
      description: '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning',
      star: "5",
      price: '£60 / night',
      total: '£450 total',
      long: "-0.08472",
      lat: "51.510794"
    },
    {
      img: 'https://z1.muscache.cn/im/pictures/f9196647-51ab-4760-9bcc-9826f3a68c75.jpg?aki_policy=large',  
      location: 'Private room in center of London',
      title: 'The Blue Room In London',
      description: '2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine',
      star: "4.23",
      price: '£65 / night',
      total: '£480 total',
      long: "-0.094116",
      lat: "51.51401"
    },
    {
      img: 'https://z1.muscache.cn/im/pictures/f9196647-51ab-4760-9bcc-9826f3a68c75.jpg?aki_policy=large',  
      location: 'Private room in center of London',
      title: '5 Star Luxury Apartment',
      description: '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
      star: "3.85",
      price: '£90 / night',
      total: '£650 total',
      long: "-0.109889",
      lat: "51.521245"
    }
]
const exploreData = [
  {
    img: 'https://links.papareact.com/5j2',
    location: 'London',
    distance: '45-minute drive'
  },
  {
    img: 'https://links.papareact.com/1to',
    location: 'Manchester',
    distance: '4.5-hour drive'
  },
  {
    img: 'https://links.papareact.com/40m',
    location: 'Liverpool',
    distance: '4.5-hour drive'
  },
  {
    img: 'https://links.papareact.com/msp',
    location: 'York',
    distance: '4-hour drive'
  },
  {
    img: 'https://links.papareact.com/2k3',
    location: 'Cardiff',
    distance: '45-minute drive'
  },
  {
    img: 'https://links.papareact.com/ynx',
    location: 'Birkenhead',
    distance: '4.5-hour drive'
  },
  {
    img: 'https://links.papareact.com/kji',
    location: 'Newquay',
    distance: '6-hour drive'
  },
  {
    img: 'https://links.papareact.com/41m',
    location: 'Hove',
    distance: '2-hour drive'
  }
]
const cardsData = [
  {
    img: 'https://links.papareact.com/2io',
    title: 'Outdoor getaways'
  },
  { img: 'https://links.papareact.com/q7j', title: 'Unique stays' },
  { img: 'https://links.papareact.com/s03', title: 'Entire homes' },
  { img: 'https://links.papareact.com/8ix', title: 'Pet allowed' }
]
async function seed() {
  await db.searchpost.deleteMany()
   //@ts-ignore
  await db.cardsdata.deleteMany()
  //@ts-ignore
  await db.exploredata.deleteMany()
  await Promise.all(
    searchPost.map((data) => {
      return db.searchpost.create({ data: data});
    })
  );
  await Promise.all(
    exploreData.map((data) => {
      //@ts-ignore
      return db.exploredata.create({ data: data});
    })
  );
  await Promise.all(
    cardsData.map((data) => {
      //@ts-ignore
      return db.cardsdata.create({ data: data});
    })
  );
}

seed();


