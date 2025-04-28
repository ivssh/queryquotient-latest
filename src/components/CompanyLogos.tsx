import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const companies = [
  {
    name: 'Foundit',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Foundit-Logo.svg'
  },
  {
    name: 'Alphasense',
    logo: '/images/alphasense_logo.svg'
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
  },
  {
    name: 'HomeDepot',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/227px-TheHomeDepot.svg.png'
  },
  {
    name: 'Zepto',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Zepto_Logo.svg'
  },
  {
    name: 'Grabjobs',
    logo: '/images/grabjobs_logo.svg'
  },
  {
    name: 'Lenskart',
    logo: '/images/lenskart_logo.svg'
  }
];

const CompanyLogos: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            Empowering enterprise search solutions across industries
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="company-logos-slider"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24 px-8">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;