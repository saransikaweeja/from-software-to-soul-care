import React from 'react';
import blog_img_1 from '../assets/images/1.jpg';
import blog_img_2 from '../assets/images/2.jpg';
import blog_img_3 from '../assets/images/3.jpg';
import blog_img_4 from '../assets/images/4.jpg';
import contact_img from '../assets/images/5.jpg';
import bannerimg1 from '../assets/images/6.jpg';
import bannerimg2 from '../assets/images/5.jpg';
import bannerimg3 from '../assets/images/2.jpg';


function Home() {

  return (
    <div>
    
    {/* Main Content */}
    <main id="content">
      {/* Slider */}
      <div className="px-4 lg:px-6 lg:px-8">
      <div data-hs-carousel='{"loadingClasses": "opacity-0"}' className="relative">
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            
            {/* Item 1 */}
            <div className="hs-carousel-slide">
              <div
                style={{ backgroundImage: `url(${bannerimg1})` }}
                className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat"
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Causes of Depression in Children</span>
                  <span className="block text-white text-xl md:text-3xl">
                    Depression in children can result from genetics, stress, and trauma.
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="hs-carousel-slide">
              <div
                style={{ backgroundImage: `url(${bannerimg2})` }}
                className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat"
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Symptoms of Depression in Children</span>
                  <span className="block text-white text-xl md:text-3xl">
                    Symptoms include sadness, irritability, withdrawal, and appetite changes.
                  </span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="hs-carousel-slide">
              <div
                style={{ backgroundImage: `url(${bannerimg3})` }}
                className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat"
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">Impact of Depression on Child Development</span>
                  <span className="block text-white text-xl md:text-3xl">
                    Depression affects a child's development and academic performance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg className="flex-shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg className="flex-shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </span>
        </button>
      </div>
      </div>
      {/* * End Slider * */}
      {/* <!-- Blogs --> */}
      <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
            Latest Blogs
          </h1>
        </div>

        {/* <!-- Card Grid --> */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* <!-- Card --> */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={blog_img_1} alt="Image Description" />
            </div>

            <div className="pt-4">
              <h3
                className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                Blog 1
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Introduction of Depression
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Child Depression
                </span>
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Mental Health Causes
                </span>
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Kids Well being
                </span>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={blog_img_2}  alt="Image Description" />
            </div>

            <div className="pt-4">
              <h3
                className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                Blog 2
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Unique Depression Symptoms in Child
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Unique Depression Symptoms
                </span>
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Mental Health Awareness
                </span>
                <span
                  class="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Know The Signs
                </span>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={blog_img_3}  alt="Image Description" />
            </div>

            <div className="pt-4">
              <h3
                className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                Blog 3
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Importance of Child Development
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Child Development
                </span>
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Academic Well being
                </span>
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Mental Health Impact
                </span>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group block" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={blog_img_4}  alt="Image Description" />
            </div>

            <div className="pt-4">
              <h3
                className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                Blog 4
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Mental Health Support for Child
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Mental Health Support
                </span>
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Therapy For Kids
                </span>
                <span
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                  Family Support
                </span>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Card Grid --> */}

        <div className="mt-10 lg:mt-20 text-center">
          <a className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
            href="#">
            View all Blogs
          </a>
        </div>
      </div>
      {/* <!-- End Blogs --> */}

        {/* Video Section */}
        <div className="bg-black">
          <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
            <blockquote className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl md:leading-normal text-white">
                Essential tips for recognizing signs of depression in children,
                including changes in mood, behavior, and physical health. It
                emphasizes the importance of early detection and intervention.
                Parents are encouraged to watch this informative guide to better
                understand and support their children's mental health.
              </p>

              <footer class="mt-6 md:mt-10">
                <div class="border-neutral-700">
                  <a href="https://youtu.be/kWC2JKYjMOk">
                    <button type="button"
                      class="group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                      <span
                        class="size-8 md:size-10 flex flex-col justify-center items-center bg-white text-black rounded-full group-hover:bg-lime-400 group-focus:bg-lime-400">
                        <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          fill="currentColor" viewBox="0 0 16 16">
                          <path
                            d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                        </svg>
                      </span>
                      Watch the Video
                    </button>
                  </a>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* End Video Section */}

        {/* <!-- Contact --> */}
        <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
          <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
            <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
              Contacts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
            <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
              <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src={contact_img} alt="contact image" />
            </div>
           

            <div className="space-y-8 lg:space-y-16">
              <div>
                <h3 className="mb-5 font-semibold text-black dark:text-white">
                  Address
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div className="flex gap-4">
                    <svg className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>

                    <div className="grow">
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Sri Lanka
                      </p>
                      <address className="mt-1 text-black not-italic dark:text-white">
                        Maharagama
                      </address>
                    </div>
                  </div>
                </div>
                
              </div>

              <div>
                <h3 className="mb-5 font-semibold text-black dark:text-white">
                  Our contacts
                </h3>

              
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div className="flex gap-4">
                    <svg className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z">
                      </path>
                      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                    </svg>

                    <div className="grow">
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Email us
                      </p>
                      <p>
                        <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                          href="mailto:example@site.so">
                          softwaretosoulcare@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <svg className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>

                    <div className="grow">
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Call us
                      </p>
                      <p>
                        <a className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                          href="mailto:example@site.so">
                          +94 70 453 7658
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Contact --> */}
    </main>

    {/* Footer */}
    <footer className="mt-auto border-t md:border-t-0 border-gray-200 dark:border-neutral-700">
      <div className="w-full max-w-7xl py-10 md:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          {/* Footer content */}
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Home;
