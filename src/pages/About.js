import React from 'react'
import about_img from '../assets/images/7.jpg';
import '../assets/css/About.css'

function About() {
  return (
    <div>
        <div className="relative h-[20rem] md:h-[calc(100vh-156px)] flex items-center justify-center bg-cover bg-center bg-no-repeat about-thumbnail">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold lg:text-5xl lg:leading-tight text-white mb-3">About Us</h1>
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
                    About Us
                </li>
            </ol>
        
            </div>
        </div>
     
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div>
                <img className="rounded-xl" src={about_img} alt="Features Image"/>
                </div>
                

                <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">
                    
                    <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                        We detect depression in children using machine learning
                    </h2>
                    <p className="text-gray-500 dark:text-neutral-500">
                        We use machine learning to spot signs of depression in children. By analyzing answers from questionnaires, our system helps find early warning signs and offers timely support. This approach aims to improve mental health by allowing for more accurate and early interventions.
                    </p>
                    </div>
                    

                
                    <ul className="space-y-2 sm:space-y-4">
                    <li className="flex gap-x-3">
                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                            <span className="font-bold">Easy to </span> navigate
                        </span>
                        </div>
                    </li>

                    <li className="flex gap-x-3">
                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                            Understandable <span className="font-bold">questionnarier</span>
                        </span>
                        </div>
                    </li>

                    <li className="flex gap-x-3">
                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <div className="grow">
                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                            Learning material
                        </span>
                        </div>
                    </li>
                    </ul>
                
                </div>
                </div>
            
            </div>
        </div>
       
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

                <footer className="mt-6 md:mt-10">
                    <div className="border-neutral-700">
                    <a href="https://youtu.be/kWC2JKYjMOk">
                        <button type="button"
                        className="group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                        <span
                            className="size-8 md:size-10 flex flex-col justify-center items-center bg-white text-black rounded-full group-hover:bg-lime-400 group-focus:bg-lime-400">
                            <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
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
    </div>
  );
}

export default About;
