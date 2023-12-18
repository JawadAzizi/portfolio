import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, ChatBubbleLeftIcon, ShoppingBagIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";
import capitalize from "./capitalize";
const links = ["home", "about", "contact", "portfolio", "blog"];
export function NavigationButton({
    page,
  setPage
  
}: {
    page: string,
  setPage: (page: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  const linksButtons = links.map(link=>{
    return(
        <button onClick={()=>{setPage(link); setVisible(false)}} className={" flex w-48 hover:text-sky-800 transition last:mb-3 group "  + clsx(page ===link && 'text-sky-800')} key={link}>
            {link == 'home' && <HomeIcon className=" w-8" />}
            {link == 'about' && <UserIcon className=" w-8" />}
            {link == 'contact' && <ChatBubbleLeftIcon className=" w-8" />}
            {link == 'portfolio' && <ShoppingBagIcon className=" w-8" />}
            {link == 'blog' && <NewspaperIcon className=" w-8" />}
            <div className={"relative pl-6 group-hover:pl-10    ml-3.5" + clsx(link === page && " border-sky-800 border-l-2")}>
                {capitalize(link)}
            </div>
        </button>
    )
  })

  return (
    <>
      <div className={"fixed top-6 left-6 flex flex-col w-16 rounded-full bg-slate-800  "}>
        <button
          onClick={() => setVisible(!visible)}
          className={`rounded-full p-4 bg-slate-800 hover:bg-slate-400 w-fit `}
        >
          {(visible && <XMarkIcon className=" text-white w-8 " />) || (
            <Bars3Icon className="text-white w-8" />
          )}
        </button>
        <div
          className={`${clsx(!visible && "hidden")}` + " flex flex-col gap-2 p-4 mt-2 transition-height duration-700 ease-in"}
        >
          {linksButtons}
        </div>
      </div>
    </>
  );
}
