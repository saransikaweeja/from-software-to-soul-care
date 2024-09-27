import React from 'react';

function Blog2() {
    return (
        <>
            <div className="relative h-[20rem] md:h-[calc(100vh-156px)] flex items-center justify-center bg-cover bg-center bg-no-repeat blog1-thumbnail">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-bold lg:text-5xl lg:leading-tight text-white mb-3">Blog Details</h1>
                <ol className="flex items-center justify-center space-x-4">
                    <li className="inline-flex items-center">
                        <a className="text-sm text-gray-300 hover:text-white focus:outline-none focus:text-white" href="/blog">
                        Blog
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
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 mb-5">Unique Depression Symptoms in Children</h2>

                <section>
                    <p className="text-gray-500 dark:text-neutral-500">
                    Depression in children often looks different from how it presents in adults, which can make it challenging for parents and caregivers to recognize the signs. A child may not know how to express what they’re feeling, so it's important to understand some of the unique depression symptoms that can appear in kids.
                    </p>

                    <hr className="my-8" />

                    <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>Recognizing Unique Symptoms</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                    While sadness and withdrawal are common indicators, children may exhibit unique depression symptoms like:
                    </p>

                    <ul class="list-disc list-inside space-y-1 pl-4 text-gray-500 dark:text-neutral-500 mt-3">
                            <li class="text-sm">Frequent temper tantrums or increased irritability.</li>
                            <li class="text-sm">Complaints about physical pain (such as stomachaches or headaches) with no medical cause.</li>
                            <li class="text-sm">Difficulty concentrating or a sudden drop in academic performance.</li>
                            <li class="text-sm">A marked disinterest in activities they previously enjoyed.</li>
                            <li class="text-sm">Changes in eating or sleeping habits, such as insomnia or excessive sleep.</li>
                            <li class="text-sm">Outbursts of crying, even over minor events.</li>
                    </ul>


                    <hr className="my-8" />

                   <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>Importance of Mental Health Awareness in Children</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                    Building mental health awareness in parents, caregivers, and teachers is critical to early detection. Knowing the signs allows for timely intervention, which is crucial in preventing the symptoms from worsening or affecting the child’s development. Unlike adults, children might not articulate their feelings directly, so it's essential to watch for behavioral changes that might indicate emotional distress.
                    </p>

                    <p className="mt-2 text-gray-500 dark:text-neutral-500">Early intervention through counseling or child-specific therapy can significantly improve outcomes. By spreading awareness about these unique symptoms, we can make it easier to spot the signs of childhood depression and seek appropriate help.</p>
                </section>

               
                </article>
            </div>
        </>
    );
}

export default Blog2;