import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";

function Footer() {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap max-w-[1400px] mx-auto px-10 gap-y-12 md:gap-x-28">
        {/* Grocify */}
        <div className="w-full md:flex-1 md:basis-[100px]">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2025 &copy; All Rights Reserved</p>
        </div>

        {/* ✅ Company + Support (grouped for mobile) */}
        <div className="w-full flex justify-between md:flex-1 md:justify-start md:gap-28 mr-18">
          <ul>
            <li>
              <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                About
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                FAQ'S
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                Support Center
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                Feedback
              </a>
            </li>
            <li className="mt-6">
              <a href="#" className="text-zinc-800 hover:text-orange-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className="w-full md:flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="text-zinc-600 mt-6 max-w-[200px]">
            Questions or Feedback? we'd love to hear from you.
          </p>
          <div className="flex p-1 bg-white rounded-lg mt-6">
            <input
              className="flex-1 h-[5vh] pl-4 focus:outline-none"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email Address"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
