import Heading from "./Heading/Heading";
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import Basket from "../assets/basket-full-vegetables.png";

function Values() {
  const leftValues = value
    .slice(0, 2)
    .map(({ id, title, description, icon: Icon }) => {
      return (
        <div key={id} className="flex md:flex-row-reverse items-center gap-7">
          <div>
            <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
              {Icon}
            </span>
          </div>

          <div className="md:text-right">
            <h3 className="text-zinc-800 text-3xl font-bold">{title}</h3>
            <p className="text-zinc-600 mt-2">{description}</p>
          </div>
        </div>
      );
    });

  const rightValues = value
    .slice(2)
    .map(({ id, title, description, icon: Icon }) => {
      return (
        <div key={id} className="flex items-center gap-7">
          <div>
            <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
              {Icon}
            </span>
          </div>

          <div className="">
            <h3 className="text-zinc-800 text-3xl font-bold">{title}</h3>
            <p className="text-zinc-600 mt-2">{description}</p>
          </div>
        </div>
      );
    });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="values" />
        <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
          {/* Left Values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>
          <div className="md:flex w-1/2 hidden">
            <img src={Basket} />
          </div>
          {/* Right Values */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% organic",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaSeedling />,
  },
];
