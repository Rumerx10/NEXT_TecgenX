"user client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import { GiArrowsShield } from "react-icons/gi";

const Features = () => {
  const services = [
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "সুপার ফাস্ট ওয়েবসাইট",
      desc: "আপডেটেড টেকনোলজি ব্যাবহারের ফলে ওয়েবসাইট ১০০ মিলি সেকেন্ড এর মধ্যে লোড হতে সক্ষম",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "প্রোডাক্ট ম্যানেজমেন্ট",
      desc: "আমাদের রয়েছে কমপ্লিট প্রোডাক্ট ম্যানেজমেন্ট সিস্টেম - যে কোন ধরণের প্রোডাক্ট ম্যানেজ করতে পারবেন সহজেই",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "পেমেন্ট গেটওয়ে",
      desc: "আমাদের রয়েছে পেমেন্ট ইন্ট্রিগ্রেটেড সিস্টেম (বিকাশ, নগদ, রকেট, ssl comerz, amarpay)",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "ডিজিটাল মার্কেটিং ফ্রেন্ডলি",
      desc: "গুগোল এনালিটিক্স, সার্ভার সাইড ট্যাগিং, ট্যাগ ম্যানেজার, কনভার্সন এপিআই সহ সকল সুবিধা আছে",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "ডেলিভারি ম্যানেজমেন্ট",
      desc: "আমাদের রয়েছে ওয়ান ক্লিক কুরিয়ার ইন্ট্রিগ্রেটেড সিস্টেম (পাঠাও, স্টিডফাস্ট, RedX)",
    },
    {
      icon: <MdOutlineSpeed size={32} />,
      title: "অর্ডার ম্যানেজমেন্ট",
      desc: "আমাদের রয়েছে সম্পূর্ণ অটোমেটেড অর্ডার ম্যানেজমেন্ট সিস্টেম",
    },
  ];

  return (
    <section className="flex w-full justify-center bg-primaryBlue text-white">
      <div className="flex flex-col">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row gap-10 md:gap-20 w-full max-w-7xl px-5 md:px-10 py-20 ">
          <div className="flex flex-col justify-center gap-8 w-full">
            <h1 className="text-2xl text-center  md:text-4xl lg:text-5xl font-semibold">
              আমাদের <span className="text-red-500">ফিচারসমূহ</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {services.map((service, index) => (
                <div
                  key="index"
                  className="flex gap-5 items-center rounded-lg shadow-2xl bg-baseBlack px-5 md:px-10 py-5 w-full"
                >
                  <div>{service.icon}</div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {service.title}
                    </h2>
                    <p className="text-sm md:text-xl text-gray-400">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
