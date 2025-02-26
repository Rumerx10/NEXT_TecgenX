import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";

const PriceCard = () => {
  const pricingData = [
    {
      name: "Startup",
      price: "99",
      plan:"yearly",
      services: [
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "সুপারফাস্ট এবং কম লেটেন্সি" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "হোস্টিং প্রাইস" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "অর্ডার ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "ইনভেন্টরি ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "ডিসকাউন্ট/কুপন ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড প্রোডাক্ট ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড এমপ্লয়ী ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড ব্যান্ডউইডথ" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "আনলিমিটেড পেমেন্ট মেথডস" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "আনলিমিটেড স্টোরেজ" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "প্রোডাক্ট এনালিটিসি" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "অর্ডারস এনালিটিসি" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "এমপ্লয়ীজ এনালিটিসি" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "কাস্টমাইজেশন" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "অর্ডার প্রসেস" },
      ],
    },
    {
      name: "Regular",
      price: "240",
      plan:"yearly",
      services: [
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "সুপারফাস্ট এবং কম লেটেন্সি" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "হোস্টিং প্রাইস" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "অর্ডার ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "ইনভেন্টরি ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "ডিসকাউন্ট/কুপন ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড প্রোডাক্ট ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড এমপ্লয়ী ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড ব্যান্ডউইডথ" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড পেমেন্ট মেথডস" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড স্টোরেজ" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "প্রোডাক্ট এনালিটিসি" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "অর্ডারস এনালিটিসি" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "এমপ্লয়ীজ এনালিটিসি" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "কাস্টমাইজেশন" },
        { icon: <MdOutlineRemoveCircle size={24}  color="#C70039" />, desc: "অর্ডার প্রসেস" },
      ],
    },
    {
      name: "Monthly Package",
      price: "25",
      plan:"monthly",
      services: [
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "সুপারফাস্ট এবং কম লেটেন্সি" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "হোস্টিং প্রাইস" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "অর্ডার ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "ইনভেন্টরি ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "ডিসকাউন্ট/কুপন ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড প্রোডাক্ট ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড এমপ্লয়ী ম্যানেজমেন্ট" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড ব্যান্ডউইডথ" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড পেমেন্ট মেথডস" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "আনলিমিটেড স্টোরেজ" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "প্রোডাক্ট এনালিটিসি" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "অর্ডারস এনালিটিসি" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "এমপ্লয়ীজ এনালিটিসি" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "কাস্টমাইজেশন" },
        { icon: <FaCheckCircle size={24}  color="#00b22d" />, desc: "অর্ডার প্রসেস" },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between w-full ">
      {pricingData.map((item, index) => (
        <div key={index} className="flex flex-col shadow-xl border-2 border-dashed border-gray-300    rounded-xl">
          <div className="px-10 py-10 bg-[#f7f8fc] rounded-t-xl">
            <p className="text-2xl font-semibold text-center mb-4 ">{item.name}</p>
            <h2 className="text-4xl font-semibold text-center">${item.price}</h2>
            <p className="text mt-2 text-center">/{item.plan}</p>
            <div className="flex items-center justify-center">
              <button className="bg-[#171f24] mt-6 text-white px-8 rounded-lg hover:bg-black py-3">
                Get started
              </button>
            </div>
          </div>
          <div className="bg-white p-10 rounded-b-xl">
            {item.services.map((service,index)=>(
              <div key={index} className="mt-0.5 flex gap-2 items-center">
                {service.icon}
                <p className="text-lg">{service.desc}</p>
              </div>
            ))}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
