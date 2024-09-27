import React from 'react';

function Blog1() {
    return (
        <>
            <div className="relative h-[20rem] md:h-[calc(100vh-156px)] flex items-center justify-center bg-cover bg-center bg-no-repeat blog1-thumbnail">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-bold lg:text-5xl lg:leading-tight text-white mb-3">Blog Details</h1>
                <ol className="flex items-center justify-center space-x-4">
                    <li className="inline-flex items-center">
                        <a className="text-sm text-gray-300 hover:text-white focus:outline-none focus:text-white" href="/blog">
                        Blog 1
                        </a>
                        <svg className="shrink-0 w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </li>
                    <li className="inline-flex items-center text-sm font-semibold text-white truncate" aria-current="page">
                        Details
                    </li>
                </ol>
            
                </div>
            </div>  

             {/* Blog Content */}
            <div className="container mx-auto px-6 py-10">
                <article className="max-w-4xl mx-auto">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 mb-5">Introduction of depression</h2>

                <section>
                    <p className="text-gray-500 dark:text-neutral-500">
                    Depression is often misunderstood as an adult-centric mental health condition, but research indicates that children, too, are highly susceptible to its effects. Child depression is a serious mental health issue that can manifest in kids as young as preschool age. It’s not just about feeling sad; depression in children involves persistent feelings of hopelessness, anger, or irritability, along with physical symptoms like fatigue or changes in appetite.
                    </p>

                    <hr className="my-8" />

                    <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>Mental Health Causes in Children</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                    Several factors contribute to mental health causes in children. Genetics plays a role—children with a family history of depression are more likely to experience it themselves. Environmental stressors, such as family conflicts, bullying, or academic pressures, can also trigger depression. Additionally, traumatic experiences, including abuse or neglect, often result in significant mental health challenges.
                    </p>

                    <hr className="my-8" />

                   <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>Kids' Well-Being and Its Connection to Depression</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                    Children's emotional and well-being are closely tied to their overall mental health. When their emotional needs go unmet or they face prolonged stress, it can lead to a higher risk of developing depression. Parents, caregivers, and teachers need to ensure that kids have a supportive environment where they feel heard, loved, and safe.
                    </p>

                    <p className="mt-2 text-gray-500 dark:text-neutral-500">Depression is not a sign of weakness, and understanding the causes and symptoms in children is a crucial first step in tackling this growing mental health concern. The earlier the intervention, the better the outcome for the child.</p>
                </section>

               
                </article>
            </div>
        </>
    );
}

export default Blog1;