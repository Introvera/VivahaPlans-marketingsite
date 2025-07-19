import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, #FFF9EF 0%, #FFF9EF 70%, #FFEECB 70%, #FFEECB 100%)",
      }}
    >
      {/* Heading */}
      <h1 className="text-1xl md:text-2xl text-[#87601F] text-center pt-40 px-6 md:px-50">
        WHERE{" "}
        <span className="font-bold">LOVE</span> MEETS METICULOUS{" "}
        <span className="font-bold">PLANNING</span>, AND EVERY DETAIL TELLS{" "}
        <span>YOUR STORY</span> BECAUSE YOUR ONCE IN A{" "}
        <span className="font-bold">LIFETIME</span> MOMENTS DESERVE NOTHING LESS
        THAN <span className="font-bold">PERFECTION</span>.
      </h1>

      {/* Text Section */}
      <div className="flex flex-col md:flex-row justify-center mt-20 gap-6 md:gap-15 px-6 md:px-20">
        <div>
          <p>
            At the heart of every celebration is a love story worth telling. We
            believe your wedding should be as unique as your journey together
            planned with care, designed with intention, and remembered for a
            lifetime. Our mission is to bring clarity and joy to your planning
            process so you can focus on what truly matters: each other.
          </p>
        </div>
        <div>
          <p className="mb-10">
            With a blend of thoughtful design, expert coordination, and
            heartfelt dedication, we transform ideas into meaningful
            experiences. Whether it’s an intimate ceremony or a grand
            celebration, we’re here to guide you with grace, helping craft a
            day that reflects your style, your values, and your love.
          </p>
          <span>With Love,</span>
          <Image
            src="/signature.png"
            alt="Signature"
            width={100}
            height={50}
            className="mt-10"
          />
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap md:flex-nowrap items-start justify-center px-6 md:px-25 mt-10 md:mt-0 gap-10 overflow-x-auto">
        <div>
          <Image
            src="/section1img1.jpg"
            alt="Wedding Section Image"
            width={400}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
            className="object-cover mb-10 md:mb-50 mx-auto border-10 border-white"
          />
        </div>
        <div>
          <Image
            src="/section1img2.jpg"
            alt="Wedding Section Image"
            width={500}
            height={600}
            style={{ maxWidth: "100%", height: "auto" }}
            className="object-cover mb-0 mx-auto border-10 border-white mt-0 md:mt-[220px]"
            />

        </div>
      </div>
    </div>
  );
};

export default Section1;
