import React from 'react';
import blog_img_1 from '../assets/images/1.jpg';
import blog_img_2 from '../assets/images/2.jpg';
import blog_img_3 from '../assets/images/3.jpg';
import blog_img_4 from '../assets/images/4.jpg';

function Blog() {
    return (
        <div>
            {/* --- Breadcrumb Start--- */}
            <div className="relative h-[20rem] md:h-[calc(100vh-156px)] flex items-center justify-center bg-cover bg-center bg-no-repeat about-thumbnail">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-bold lg:text-5xl lg:leading-tight text-white mb-3">Blogs</h1>
                <ol className="flex items-center justify-center space-x-4">
                    <li className="inline-flex items-center">
                        <a className="text-sm text-gray-300 hover:text-white focus:outline-none focus:text-white" href="#">
                        Home
                        </a>
                        <svg className="shrink-0 w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </li>
                    <li className="inline-flex items-center text-sm font-semibold text-white truncate" aria-current="page">
                        Blogs
                    </li>
                </ol>
            
                </div>
            </div>
            {/* --- Breadcrumb End--- */}
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
                <a className="group block" href="/blog-1">
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
            </div>
            {/* <!-- End Blogs --> */}
         </div>
    );
}

export default Blog;