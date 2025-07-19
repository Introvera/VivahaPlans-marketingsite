// components/HowItWorks.tsx
"use client";

import Image from "next/image";

const steps = [
  {
    title: "CREATE YOUR WEDDING SPACE",
    desc: "Set up your personalized wedding profile and choose your celebration style.",
    icon: "💍",
    number: 1,
  },
  {
    title: "Add Guests & Details",
    desc: "Build your guest list, assign roles, and manage RSVPs with ease.",
    icon: "💃",
    number: 2,
  },
  {
    title: "Explore & Book Vendors",
    desc: "Find trusted photographers, florists, and venues all in one place.",
    icon: "📚",
    number: 3,
  },
  {
    title: "Send Invites & Share",
    desc: "Send beautiful digital invites, share your wedding website, and let the celebration begin.",
    icon: "📩",
    number: 4,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FFF9EF] py-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-[#005B4C] text-center mb-12">
        How It Works
      </h2>

      {/* Arrow Images
      <Image
        src="/Vector1.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-[120px] left-[30%] w-32 hidden md:block"
        aria-hidden="true"
      />
      <Image
        src="/arrows/arrow2.svg"
        alt=""
        width={100}
        height={100}
        className="absolute top-[250px] right-[25%] w-32 hidden md:block"
        aria-hidden="true"
      />
      <Image
        src="/arrows/arrow3.svg"
        alt=""
        width={100}
        height={100}
        className="absolute bottom-[120px] left-[40%] w-32 hidden md:block"
        aria-hidden="true"
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 px-6 max-w-5xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-yellow-600 p-6 flex flex-col items-center text-center shadow-md"
          >
            <div className="bg-yellow-100 text-yellow-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
              {step.number}
            </div>
            <div className="text-4xl mb-2">{step.icon}</div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-700">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
