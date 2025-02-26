import React from 'react';
import { GiArrowsShield } from "react-icons/gi";
import { RiFacebookFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex items-center justify-center bg-baseBlack w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 w-full  max-w-7xl text-white px-5 md:px-10 py-20">

        <div className='flex flex-col gap-2'>
          <h3 className="text-primaryBlue font-semibold inline-block">
            নিড হেল্প?
            <div className="h-0.5 mt-1 bg-primaryBlue rounded"/> 
          </h3>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <p className='text-sm'>019 50 60 60 20</p>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <p className='text-sm'>info@storex.com.bd</p>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <p className='text-sm'>৬/এ,লিফট-৬,ডিএম ভবন-২, <br />
            বসিলা গার্ডেন সিটি, ঢাকা-১২০৭</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className="w-auto mt-5 text-primaryBlue font-semibold">
              যুক্ত হোন আমাদের কমিউনিটিতে
              <div className="h-0.5 mt-1 w-full bg-primaryBlue rounded"/> 
            </h3>
            <div className='flex gap-3'> 
              <div className="h-10 w-10 p-2 rounded-full bg-primaryBlue flex items-center justify-center"><RiFacebookFill size={20} /></div>
              <div className="h-10 w-10 p-2 rounded-full bg-primaryBlue flex items-center justify-center"><TbBrandYoutubeFilled size={20} /></div>
              <div className="h-10 w-10 p-2 rounded-full bg-primaryBlue flex items-center justify-center"><BsLinkedin size={20} /></div>
              <div className="h-10 w-10 p-2 rounded-full bg-primaryBlue flex items-center justify-center"><FaSquareXTwitter size={20} /></div>           
            </div>                   
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className=" text-primaryBlue font-semibold inline-block">
            গ্রাহকের একাউন্ট
            <div className="h-0.5 mt-1 bg-primaryBlue rounded"/> 
          </h3>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm"> লগ ইন</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">সাইন আপ</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">যোগাযোগ</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">রিফান্ড পলিসি</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">প্রাইভেসি পলিসি</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">টার্মস এন্ড কন্ডিশন</Link>
          </div>
        </div> 

        <div className='flex flex-col gap-2'>
          <h3 className=" text-primaryBlue font-semibold inline-block">
            প্রয়োজনীয় পেইজ
            <div className="h-0.5 mt-1 bg-primaryBlue rounded"/> 
          </h3>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm"> ফিচার</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">প্রাইসিং</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">ফ্রড চেকার</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">হেল্প পোষ্ট</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">বিজনেস গ্রোথ</Link>
          </div>
          <div className='flex gap-3 items-center'>
            <GiArrowsShield size={26} color='green' />
            <Link href="#" className="text-sm">মার্কেটিং স্ট্র্যাটেজি ২০২৫</Link>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className="text-primaryBlue font-semibold inline-block">
            পেমেন্টের মাধ্যমে
            <div className="h-0.5 mt-1 bg-primaryBlue rounded"/> 
          </h3>
          <div className='flex gap-3 items-center'>
            <Image src='/payments.png' height={200} width={800} alt="payment" className='w-auto' />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
