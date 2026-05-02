import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/Kj8FJ32t/Banner.jpg')] h-[60vh] max-w-7xl bg-cover bg-no-repeat bg-center mx-auto my-5 flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-sm md:text-sm mb-6 max-w-xl text-gray-200">
            Thousands of Books. Endless stories. <br />
            One place to discover your next favorite.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Browse Now
              </Button>
            </Link>

            {/* <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;