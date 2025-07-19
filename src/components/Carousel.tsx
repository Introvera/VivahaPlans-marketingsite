"use client";

import Image from "next/image";
import "./styles/carousel.css";

const items = [
  {
    title: "Amelia",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "phot",
    text:
      "We never imagined wedding planning could be this smooth. From the moment we created our wedding profile, every detail fell into place. The guest manager was a lifesaver, and the planning dashboard kept us on track. It felt like we had a virtual planner guiding us through every step — but beautifully designed.",
  },
  {
    title: "Oliver",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo",
    text:
      "We never imagined wedding planning could be this smooth. From the moment we created our wedding profile, every detail fell into place. The guest manager was a lifesaver, and the planning dashboard kept us on track. It felt like we had a virtual planner guiding us through every step — but beautifully designed.",
  },
  {
    title: "Emily",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo",
    text:
      "We never imagined wedding planning could be this smooth. From the moment we created our wedding profile, every detail fell into place. The guest manager was a lifesaver, and the planning dashboard kept us on track. It felt like we had a virtual planner guiding us through every step — but beautifully designed.",
  },
  {
    title: "Jessica",
    img: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo",
    text:
      "We never imagined wedding planning could be this smooth. From the moment we created our wedding profile, every detail fell into place. The guest manager was a lifesaver, and the planning dashboard kept us on track. It felt like we had a virtual planner guiding us through every step — but beautifully designed.",
  },
  {
    title: "James",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo",
    text:
      "We never imagined wedding planning could be this smooth. From the moment we created our wedding profile, every detail fell into place. The guest manager was a lifesaver, and the planning dashboard kept us on track. It felt like we had a virtual planner guiding us through every step — but beautifully designed.",
  },
  {
    title: "Jack",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo",
    text:
      "We never imagined wedding planning could be this smooth. From the moment we created our wedding profile, every detail fell into place. The guest manager was a lifesaver, and the planning dashboard kept us on track. It felt like we had a virtual planner guiding us through every step — but beautifully designed.",
  },
];

export default function Carousel() {
  return (
    <div className="carousel" data-mask>
      {items.map((item, index) => (
        <article
          key={index}
          style={{ ['--i' as string]: String(index) }}
        >
          <Image
            src={`${item.img}`}
            alt={item.alt}
            width={10}
            height={10}
            className="avatar m-0"
            unoptimized
        />
          
          <div className="flex flex-row mt-0">
            <Image src="/quotes.svg" alt="Quote" width={40} height={40} className="justify-center mx-30" />
            <p>{item.text}</p>

            
          </div>
          <h3 className=" mt-10 font-bold">{item.title}</h3>
        </article>
      ))}
    </div>
  );
}
