"user client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { GiArrowsShield } from "react-icons/gi";


const Importance = () => {
  const services = [
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "সবচাইতে সহজ Check Out সিস্টেম",
      desc: "সবচাইতে সহজ Check Out সিস্টেম ব্যবহারের কারনে সেলস ড্রপ হওয়ার সম্ভাবনা সর্বোচ্চ পরিমান কমে আসবে",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "সবচাইতে দ্রুত website Loading",
      desc: "NodeJS, MongoDB, Cloud Server এর সমন্বয়ে তৈরি করা হয়েছে বাংলাদেশের সবথেকে ফাস্ট লোডিং ইকমার্স সল্যুশন",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "সিকিউরড Customer Data",
      desc: "বিজনেসের গোপনীয় সকল ডাটা থাকবে সর্বোচ্চ সুরক্ষিত ও নিরাপদ, যা Storex কর্তৃপক্ষের পক্ষেও অ্যাক্সেস সম্ভব নয়।",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "আনলিমিটেড Landing Page",
      desc: "কোডিং দক্ষতা ছাড়াই প্রয়োজনমত যত ইচ্ছা নিজের মত কাস্টমাইজ ডিজাইন ল্যান্ডিংপেইজ তৈরির করার সুযোগ।",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "Customer Support",
      desc: "সাপোর্টের ক্ষেত্রে একবিন্দু অভিযোগের সুযোগ আমরা দিবোনা, এই চ্যালেঞ্জ নিয়ে ওয়ান টু ওয়ান সাপোর্ট প্রদান করা হচ্ছে।",
    },
  ];

  return (
    <section className="flex w-full justify-center bg-[#1c1c1c] text-white">
      <div className="flex flex-col">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row gap-10 md:gap-20 w-full max-w-7xl px-5 md:px-10 py-20 ">
          <div className="flex flex-col justify-center gap-8 w-full">
            <h1 className="text-2xl text-center md:text-start  md:text-3xl lg:text-4xl font-semibold">
              যে কারণে <span className="text-red-500">storex</span>  আপনার ই-কমার্স বিজনেসের জন্য গুরুত্বপূর্ণ
            </h1>
            <div className="flex flex-col gap-2">
              {services.map((service, index) => (
                <div
                key="index"
                className="flex gap-5 items-center rounded-lg shadow-2xl bg-baseBlack px-10 py-5 w-full"
              >
                <div>{service.icon}</div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-xl text-gray-400">{service.desc}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <Image src="/img1.png" width={1280} height={450} alt="heroImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;









