
// import images from '../../../assets/images/about.jpg'
import { FaSearch, FaUsers } from 'react-icons/fa';
import { HiPhoto } from "react-icons/hi2";
import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const MostPopular = () => {
    return (
      <div className="max-w-screen-xl px-5 mx-auto my-20">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <img
              src="https://img.freepik.com/free-psd/circle-discount-sale-podium_35913-2513.jpg?w=740&t=st=1698835443~exp=1698836043~hmac=2f221553046b9f9b5074eea76946b14c4f4293c4f18da7e37069617f15467cd7"
              alt="bg-[#09867E] images"
              className="rounded-md"
              draggable="false"
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-bold"> Why We are Most Popular</h1>
            <p className=" mt-4 text-justify">
              We are the most popular product in our category because of our
              exceptional quality, innovative features, and unbeatable value for
              money. Our product is user-friendly, highly reliable, and
              continually updated to meet customer demands. Key factors for our
              popularity include reliability, affordability, customer support,
              innovation, ease of use, and a loyal customer base
            </p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <FaUsers />
                </button>
                <h1 className="font-semibold">Career Connect</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <FaSearch />
                </button>
                <h1 className="font-semibold">Product Search</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <HiPhoto />
                </button>
                <h1 className="font-semibold">User buy</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <GoDeviceDesktop />
                </button>
                <h1 className="font-semibold"> Top Companies</h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <MdOutlineShoppingBag />
                </button>
                <h1 className="font-semibold">International </h1>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <button className="bg-[#09867E] rounded-full p-2 text-white">
                  <TfiWrite />
                </button>
                <h1 className="font-semibold"> Trusted & Quality </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MostPopular;