import Image from "next/image";
import { PageHeader } from "./pageHeader";
const portfolioItems = [
  {
    title: "portfolio 1",
    img: "/portfolio1.gpj",
    description: "this is the best project",
    link: "www.portolio1.con",
  },
  {
    title: "portfolio 2",
    img: "/portfolio2.gpj",
    description: "this is the best project",
    link: "www.portolio1.con",
  },
  {
    title: "portfolio 3",
    img: "/portfolio3.gpj",
    description: "this is the best project",
    link: "www.portolio3.con",
  },
  {
    title: "portfolio 4",
    img: "/portfolio4.gpj",
    description: "this is the best project",
    link: "www.portolio4.con",
  },
];

export function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolio" />
      <div className=" grid grid-cols-12 w-full">
        {portfolioItems.map(item=><PortfolioCard >

                <a href={item.link} className="w-full">
            <div className=" w-full flex items-center justify-center">
                <Image src={item.img} className="w-full min-h-8"  alt="portfolio image" width={100} height={50} />
            </div>
            <h1>{item.title}</h1>
            <p>{item.title}</p>
            </a>
        </PortfolioCard>
        )}
      </div>
    </>
  );
}

export function PortfolioCard({ children }) {
  return (
    <>
      <div className="rounded flex  md:col-span-6 col-span-12 p-2 m-2 shadow border">{children}</div>
    </>
  );
}
