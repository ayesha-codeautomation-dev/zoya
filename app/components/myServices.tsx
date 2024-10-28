// MyServices.jsx
import React from 'react';

const MyServices = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/59e1d4d7bf28f2cd4a0f9c313a181c1e4e8abd94ded361880b6f0ff90d33928f?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-pink-700",
    },
    {
      title: "Quality Assurance (QA) & Testing",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/ad9edaf5476ab5affc33c8e81e92cc17e695b22bb49a32203033531222fd8ca9?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-white bg-opacity-10",
    },
    {
      title: "TECH-SAVVY VIRTUAL ASSISTANT",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/feb0172b80af3510672ed085b5ed8af23a93a9fa98a313668ee86804cc7b03f6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-pink-700",
    },
    {
      title: "Digital Marketing & SEO Strategy",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a1bf436c6d0c387db6e1119ef324d31990b678de69593b51f998317983cdd3c7?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-white bg-opacity-10",
    },
    {
      title: "SOCIAL Media MANAGEMENT",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/35f2cd45ed03f41ddd563bfac499245340d4e4427b14e24efe687fd0bf86d13f?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-yellow-500 text-black",
    },
    {
      title: "E-commerce Excellence",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/e2f2fd8aed66cc3118d8627d0eb83af2967050b0fc73facc870ce996c53556ea?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-white bg-opacity-10",
    },
    {
      title: "GRAPHIC DESIGNING",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/ff9946c6288c627ce8e15a93f6afcb94876b5dd9611e4dd6e6720e766ab67530?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-pink-700",
    },
    {
      title: "CONTENT WRITING",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/ad9edaf5476ab5affc33c8e81e92cc17e695b22bb49a32203033531222fd8ca9?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-zinc-800",
    },
    {
      title: "Digital Product Management",
      image: "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/19b91c0893ca0165af366c061d589906e313fc2b56d0094560ff535514ec5792?apiKey=4bbac2e9fd8543319fbc188f9510a76b&",
      bgColor: "bg-pink-700",
    },
  ];

  return (
    <div id='services' className="flex flex-col justify-center py-16 items-center px-16 pb-0.5 text-2xl font-bold text-white bg-[#1D2121] max-md:px-5">
      <div className="flex justify-between px-6 md:px-16 items-end max-w-full text-5xl leading-none text-center text-pink-700 rounded-2xl w-[1200px] max-md:text-4xl">
        <div className="flex-1 shrink w-full min-w-[240px] max-md:max-w-full max-md:text-4xl">
          <span className="border-b-4 border-[#F4BE00] pb-2">My Services</span>
        </div>
      </div>
      <div className="flex flex-col mt-10 mx-auto leading-9 text-center uppercase max-w-7xl">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center self-stretch p-12 my-auto ${service.bgColor} rounded-xl border border-solid backdrop-blur-[15px] border-white border-opacity-10 w-[320px] md:w-[400px] max-md:px-5`}
            >
              <img
                loading="lazy"
                src={service.image}
                className="object-contain w-16 rounded aspect-square"
                alt={service.title}
              />
              <div className="mt-8">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-lg leading-relaxed text-center max-md:mt-10 max-md:max-w-full">
        Let&apos;s Schedule a call to get the best quotation of your project
      </div>
      <div className="flex justify-center items-center w-full mb-10">
        <button className="flex justify-center gap-2.5 px-14 py-3 mt-12 text-xl font-semibold text-black tracking-tight bg-[#F4BE00] rounded-[12px] max-md:px-5 max-md:mt-10 cursor-pointer">
          Schedule Meeting
        </button>
      </div>
    </div>
  );
};

export default MyServices;
