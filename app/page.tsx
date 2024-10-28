import React from 'react'
import MyWorkSection from './components/workPagination'
import MyServices from './components/myServices'
import ContactSection from './components/contactForm'


const Homepage = () => {


  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full max-md:max-w-full">
        {/* HERO SECTION */}
        <div id='home' className="py-6 px-6 flex flex-col lg:flex-row relative bg-black gap-10 justify-center w-full min-h-[630px] text-[#171717] mx-auto items-center">
          <div className="flex absolute z-0 flex-col items-center text-center min-w-[240px] top-[37px] max-w-4xl mx-auto max-md:relative max-md:top-auto max-md:my-5">
            <div className="flex z-0 flex-col items-center self-center mx-auto max-w-full">
              <div className="mt-2.5 tracking-tighter leading-none">
                <span className="font-semibold text-white text-5xl">A </span>
                <span className="font-semibold text-[#F4BE00] text-5xl">Full Stack Digital Manager</span>
              </div>
              <div className="mt-2.5 font-light text-2xl text-white font-light leading-7 ">
                Integrated project management, quality assurance, web development and digital marketing solutions to build or improve your brand as well as activate results.
              </div>
            </div>
          </div>
          <div className="flex absolute left-2/4 z-0 flex-col text-white rounded-none md:mt-32 -translate-x-2/4 max-md:relative max-md:bottom-auto max-md:left-auto max-md:translate-x-0 max-md:w-full">
            {/* Vertical Name on Right */}
            <div className="flex relative flex-col justify-center items-center md:px-20 md:mt-24">
              <div className="hidden md:flex absolute md:right-[750px] 2xl:right-[950px] -mt-[220px] py-2 px-1 h-[400px] flex flex-col text-center justify-center items-center bg-[#D01760] text-white font-light text-xl tracking-[.5em] z-10 max-md:left-10">
                <span className="mt-4">Z</span>
                <span className="my-4">O</span>
                <span className="my-4">Y</span>
                <span className="my-4">A</span>
                <br />
                <span className="my-4">K</span>
                <span className="my-4">O</span>
                <span className="my-4">U</span>
              </div>

              <img
                loading="lazy"
                srcSet="/zoya-hero.png"
                className="object-cover h-[400px] max-md:h-auto"
                alt="Hero Image"
              />

              <div className="flex md:flex-nowrap flex-wrap gap-1.5 -mt-60 self-start leading-none text-center text-white md:absolute md:left-[350px] xl:left-[480px] max-md:static max-md:w-full max-md:order-1 max-md:flex-col max-md:items-center max-md:text-xl max-md:mt-10">
                <img
                  loading="lazy"
                  src="hero-arrow.png"
                  className="hidden lg:block object-contain shrink-0 mt-3 aspect-[2.81] w-[90px] xl:w-[130px] max-md:hidden"
                  alt="Arrow"
                />
                <div className="flex-auto w-[450px] max-md:w-full text-center max-md:mt-5 max-md:mb-5">
                  <span className="text-3xl">Hi, I’m </span><span className="text-[#D01760] text-3xl font-bold">Zoya Kou!</span>
                  <br />
                  <br />
                  <span className="font-light mt-6 text-xl text-white max-md:mt-2">
                    Let&apos;s collaborate to get prompt solutions for your digital concerns and create something amazing together.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get To Know ME */}
        <div className="flex overflow-hidden flex-col bg-[#1D2121] justify-center items-center py-14 w-full min-h-[703px]">
          <div className="flex flex-col px-6 md:flex-row gap-24 relative justify-center items-center mx-auto max-w-7xl w-full min-h-[600px]">
            {/* Right side - Content */}
            <div className="flex flex-col flex-1 shrink my-auto items-center md:items-start text-center md:text-left">
              <div style={{ letterSpacing: "3px" }} className="text-3xl font-semibold tracking-tighter leading-none text-white md:text-4xl">
                Get To <span className="text-[#D01760]">Know </span>Me
              </div>
              <div className="mt-6 md:mt-12 text-lg md:text-xl text-white font-light max-w-[490px] leading-7 md:mt-10">
                I’ve discovered my passion for the T-trio: the joys of <span className='text-[#F4BE00]'>Tea</span>, the thrill of <span className='text-[#F4BE00]'>Traveling</span>, and the <span className='text-[#F4BE00]'>Tech</span> that transforms.
                <br />
                <br />
                I&apos;m Zoya, a <span className='text-[#F4BE00]'>Tech-savvy virtual assistant</span> with the ease of simplifying the most complicated tasks. From QA automation and technical writing to website and mobile app development, I specialize in creating efficient solutions that work for you. With a focus on precision, creativity, and timely delivery, I&apos;m dedicated to helping businesses streamline their processes for a smoother digital transformation.
                <br />
                Let’s connect and explore how I can contribute to your next exciting project.
              </div>

              <button className='flex justify-center md:justify-start gap-2.5 md:self-start px-14 py-3 mt-12 text-lg md:text-2xl font-semibold text-black tracking-tight bg-[#F4BE00] rounded-[12px] max-md:px-5 max-md:mt-10 cursor-pointer'>
              Uncover My World
              </button>

            </div>

            {/* Left side - Image */}
            <img
              loading="lazy"
              src="zoya-contact.png"
              className="object-contain md:h-[450px] max-md:max-w-full mx-auto"
              alt="Contact"
            />
          </div>
        </div>


        {/* My Work Section */}
        <MyWorkSection />

        {/* Why Hire Me */}
        <div id='hire' className="flex flex-col text-white items-center">
          <div className="flex flex-col justify-center items-center px-5 md:px-20 py-16 w-full bg-neutral-800">
            <div className="flex flex-col w-full max-w-[1030px] items-center">
              <div className="self-center text-4xl font-light leading-none text-center">
                <span className="text-5xl font-medium text-white leading-[53px]">
                  Why
                </span>{" "}
                <span className="text-5xl italic font-semibold text-yellow-500 leading-[53px]">
                  Hire
                </span>
                <span className="text-5xl italic font-semibold text-pink-700 leading-[53px]">
                  {" "}
                  me?
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-8 md:gap-24 items-center mx-auto mt-10 text-center min-h-[174px] w-full">
                <div className="flex flex-col items-center w-[175px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/58cce3f927ba004a8d776eb1f1939becc6dde89928c09e41580954f4e1a59f96?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                    className="object-contain w-16 rounded-none aspect-square"
                  />
                  <div className="text-center mt-3">
                    <div className="text-3xl font-semibold">9+ Years</div>
                    <div className="text-2xl">Experience</div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[175px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/58cce3f927ba004a8d776eb1f1939becc6dde89928c09e41580954f4e1a59f96?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                    className="object-contain w-16 rounded-none aspect-square"
                  />
                  <div className="text-center mt-3">
                    <div className="text-3xl font-semibold">5.0</div>
                    <div className="text-2xl">Rating</div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[175px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/58cce3f927ba004a8d776eb1f1939becc6dde89928c09e41580954f4e1a59f96?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                    className="object-contain w-16 rounded-none aspect-square"
                  />
                  <div className="text-center mt-3">
                    <div className="text-3xl font-semibold">10+</div>
                    <div className="text-2xl">Clients</div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-[175px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/58cce3f927ba004a8d776eb1f1939becc6dde89928c09e41580954f4e1a59f96?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                    className="object-contain w-16 rounded-none aspect-square"
                  />
                  <div className="text-center mt-3">
                    <div className="text-3xl font-semibold">50+</div>
                    <div className="text-2xl">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div id='testimonials' className="flex bg-black flex-col items-center px-6 py-16">
          <div className="flex justify-between items-end max-w-full text-center rounded-2xl w-[1200px]">
            <div className="flex flex-col flex-1 shrink items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="text-5xl font-bold leading-none text-pink-700 max-md:max-w-full max-md:text-4xl">
                Testimonials
              </div>
              <div className="mt-4 text-lg leading-7 text-white w-[600px] max-md:max-w-full">
                See what my clients have to say about working with me and the
                results I helped them achieve.
              </div>
            </div>
          </div>
          <div className="flex md:flex-col mt-16 max-w-full w-[1200px] max-md:mt-10">
            <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full h-full">
              <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full h-full ">
                <div className="flex flex-col justify-center p-12 w-full rounded-sm border border-solid backdrop-blur-[15px] bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
                    <div className="flex overflow-hidden flex-col items-center self-stretch my-auto h-[60px] rounded-[500px] w-[60px]">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/beac0e28b83344d156926a51950f23cf360a07db65bdbc2c7354a2db21f7e444?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                        className="object-contain aspect-square w-[60px]"
                      />
                    </div>
                    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto leading-relaxed basis-0 min-w-[240px]">
                      <div className="text-sm tracking-widest text-orange-200 uppercase">
                        Cameron Williamson
                      </div>
                      <div className="text-sm font-light text-white text-opacity-60">
                        2024-08-06
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="text-2xl font-semibold tracking-wider leading-none text-white max-md:max-w-full">
                        QA Manual and Automation Engineer
                      </div>
                      <div className="mt-3 text-base leading-7 text-white text-opacity-80 max-md:max-w-full">
                        She is very detailed Manual QA tester. We were very
                        satisfied with her work! A very solid Hire. She was very
                        good at daily updates and learning a sophisticated
                        application.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center self-start mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-12 mt-8 w-full rounded-sm border border-solid backdrop-blur-[15px] bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-wrap gap-4 items-center w-full leading-relaxed max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/9691530ae58994ad5ba559c6254e5a5d7978d273e371d816ba3a22e610026e5b?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[500px] w-[60px]"
                    />
                    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
                      <div className="text-sm tracking-widest text-orange-200 uppercase">
                        Jenny Wilson
                      </div>
                      <div className="text-sm font-light text-white text-opacity-60">
                        2024-08-06
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="text-2xl font-semibold tracking-wider leading-none text-white max-md:max-w-full">
                        Social Media Manager/ Marketing S...
                      </div>
                      <div className="mt-3 text-base leading-7 text-white text-opacity-80 max-md:max-w-full">
                        Zoya has been absolutely amazing. She is an extremely
                        talented marketing strategist and did an amazing job in
                        running all the social media channels for our organization.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center self-start mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex flex-col justify-center p-12 w-full rounded-sm border border-solid backdrop-blur-[15px] bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-wrap gap-4 items-center w-full leading-relaxed max-md:max-w-full">
                    <div className="flex shrink-0 self-stretch my-auto h-[60px] rounded-[500px] w-[60px]" />
                    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
                      <div className="text-sm tracking-widest text-orange-200 uppercase">
                        Guy Hawkins
                      </div>
                      <div className="text-sm font-light text-white text-opacity-60">
                        2024-08-06
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="text-2xl font-semibold tracking-wider leading-none text-white max-md:max-w-full">
                        Campaign for my So
                      </div>
                      <div className="mt-3 text-base leading-7 text-white text-opacity-80 max-md:max-w-full">
                        Zoya demonstrated exceptional proficiency in WordPress, PHP,
                        CSS, and CSS liquid along with a strong understanding of
                        REST APIs. We highly recommend Zoya.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center self-start mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-12 mt-8 w-full rounded-sm border border-solid backdrop-blur-[15px] bg-white bg-opacity-10 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-wrap gap-4 items-center w-full leading-relaxed max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/466b9c7247aab5629943a98ccaed15107a7f5c8a02aecf5b02f60db9c03b0216?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[500px] w-[60px]"
                    />
                    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
                      <div className="text-sm tracking-widest text-orange-200 uppercase">
                        Esther Howard
                      </div>
                      <div className="text-sm font-light text-white text-opacity-60">
                        2024-08-06
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="text-2xl font-semibold tracking-wider leading-none text-white max-md:max-w-full">
                        QA Testing
                      </div>
                      <div className="mt-3 text-base leading-7 text-white text-opacity-80 max-md:max-w-full">
                        Fantastic team to work with. Really stepped up and took care
                        of everything we asked them to do for us! Would rehire her
                        in the future!. Highly recommended!
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center self-start mt-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4b61a13d6cd68288b142a27b453c21ce8c3b6990455a57939fe088535d687ae6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center items-center w-full md:mb-10">
            <button className="flex justify-center gap-2.5 px-14 py-3 mt-12 text-xl font-semibold text-black tracking-tight bg-[#F4BE00] rounded-[12px] max-md:px-5 max-md:mt-10 cursor-pointer">
              See More            </button>
          </div> */}
        </div>


        {/* My Services Section */}
        <MyServices />

        {/* Contact section */}
      <ContactSection/>

      </div>
    </div >
  )
}

export default Homepage