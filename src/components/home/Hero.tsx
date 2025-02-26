"user client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { GiArrowsShield } from "react-icons/gi";




const Hero = () => {
  const services = [
    { icon: <MdOutlineSpeed size={28} />, label: "সুপার ফাস্ট ওয়েবসাইট" },
    { icon: <MdOutlineSpeed size={28} />, label: "ওয়ান টু ওয়ান সাপোর্ট" },
    {
      icon: <MdOutlineSpeed size={28} />,
      label: "বেস্ট কনভার্টিং চেকআউট সিস্টেম",
    },
    {
      icon: <MdOutlineSpeed size={28} />,
      label: "আনলিমিটেড ল্যান্ডিং পেইজ ক্রিয়েশন",
    },
    { icon: <MdOutlineSpeed size={28} />, label: "সকল ডিভাইস ফ্রেন্ডলি সাইট" },
  ];
  const features = [
    {
      icon: <MdOutlineSpeed size={32} />,
      icon2: <MdOutlineSecurity size={32} color="white" />,
      title: "ওয়েবসাইট বিল্ডার",
      desc: "কোডিং ছাড়াই ওয়েবসাইট তৈরির অপশন।",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      icon2: <GiArrowsShield size={32} color="white" />,
      title: "সিকিউরড কাস্টমার ডাটা",
      desc: "ডাটা দেখবে শুধুমাত্র স্টোর মালিক।",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      icon2: <BsArrowUpRight />,
      title: "ডিজিটাল মার্কেটিং ফ্রেন্ডলি",
      desc: "গুগল/ ফেসবুক কোড ইন্ট্রিগ্রেড সিস্টেম।",
    },

  ];

  return (
    <section className="flex w-full justify-center bg-baseBlack text-white">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row gap-10 md:gap-20 w-full max-w-7xl px-5 md:px-10 py-20 ">
          <div className="flex flex-col justify-center gap-8 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              এবার ই-কমার্স ব্যবসা হবে ঝামেলাহীন
            </h1>
            <div className="flex flex-col gap-2">
              {services.map((service, index) => (
                <div
                  // initial={{x:-20}}
                  // whileInView={{x:0}}
                  // transition={{duration:0.3}}
                  key={index}
                  className="flex gap-3 items-center text-xl"
                >
                  {service.icon} {service.label}
                </div>
              ))}
            </div>
            <button className="bg-primaryBlue hover:bg-[#034e91] duration-300 rounded-lg py-3 text-xl font-semibold">
              যোগাযোগ করুন
            </button>
          </div>
          <div className="flex items-center justify-center w-full">
            <Image src="/img7.png" width={1280} height={450} alt="heroImg" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 bg-primaryBlue px-5 md:px-10 py-20">
          {features.map((feature, index) => (
            <div key="index" className="flex gap-3 items-center rounded-lg shadow-2xl border-2 border-dashed p-10 w-full">
              <div>{feature.icon}</div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-semibold">{feature.title}</h2>
                <p className="text-sm md:text-xl">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
