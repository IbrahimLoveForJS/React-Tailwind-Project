import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Heading from "../Heading/Heading";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end py-5 gap-x-3">
          <button className=" custom-prev hover:text-white cursor-pointer text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100  hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500">
            <IoIosArrowBack />
          </button>
          <button className=" custom-next hover:text-white cursor-pointer text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {review.map(({ id, name, profession, rating, para, image }) => {
            return (
              <SwiperSlide key={id} className="!h-auto flex">
                <div className="bg-zinc-100 p-8 rounded-xl flex flex-col justify-between w-full h-full">
                  <div className="flex gap-5 items-center">
                    <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                      <img src={image} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold">{name}</h5>
                      <p className="text-zinc-600">{profession}</p>
                      <span className="flex text-yellow-400 text-xl mt-3 gap-1">
                        {Array.from({ length: rating }, (_, index) => (
                          <FaStar key={index} />
                        ))}
                      </span>
                    </div>
                  </div>

                  <div className="mt-10 flex-1">
                    <p className="text-zinc-600">{para}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 5,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },

  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 5,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];
