import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlant, PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import Heading from "../Heading/Heading";
// import { IoTerminal } from "react-icons/io5";

function Process() {
  const renderSteps = steps.map(
    ({ id, number, title, description, icon: Icon }) => {
      return (
        <div key={id} className={`flex-1 basis[300px] ${id % 2 === 0 ? 'md:-mt-100'  : ''}`}>
          <span className="flex basis-[300px] mx-auto justify-center items-center rounded-full w-18 h-18 text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
            {number}
          </span>

          <div className="flex items-center mt-10 gap-x-5">
            <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full">
              {Icon}
            </span>

            <div className="flex-1">
              <h4 className="text-zinc-800 text-2xl font-bold">{title}</h4>
              <p className="text-zinc-600 mt-2 whitespace-nowrap">
                {description}
              </p>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>
        <div className="flex md:flex-row flex-col gap-y-17 justify-center items-center md:mt-20 mt-10 md:pt-50">
          {renderSteps}
        </div>
      </div>
    </section>
  );
}

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    description: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    description: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    description: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    description: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];
