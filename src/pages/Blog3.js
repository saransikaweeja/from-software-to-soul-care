import React from 'react';

function Blog3() {
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
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 mb-5">The Importance of Child Development for Mental Health</h2>

                <section>
                    <p className="text-gray-500 dark:text-neutral-500">
                    Child development is a crucial phase where both physical and emotional changes occur rapidly. The experiences and challenges a child faces during their formative years can have long-lasting effects on their mental health, academic well-being, and social relationships.
                    </p>

                    <hr className="my-8" />

                    <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>Child Development and Mental Health</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                    Research shows that strong emotional and social development in childhood provides the foundation for good mental health later in life. Children who feel secure, valued, and supported by their families tend to cope better with challenges and stressors. In contrast, children who face chronic stress, neglect, or trauma are more prone to experiencing mental health issues like anxiety, depression, and behavioral disorders.
                    </p>

                    <hr className="my-8" />

                   <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>Academic Well-Being: A Key Factor</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                    Academic well-being is also closely tied to mental health. Children who struggle with emotional or mental health issues often face academic difficulties, which can further exacerbate their stress and self-esteem problems. Similarly, children who excel academically but face high pressure to perform may experience heightened anxiety, which can lead to burnout or depression.
                    </p>

                    <hr className="my-8" />

                    <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>The Mental Health Impact of Proper Development</h3>

                    <p className="text-gray-500 dark:text-neutral-500">
                    Fostering a supportive environment where emotional expression is encouraged can significantly improve both mental health impact and academic performance. When children have a healthy outlet for their emotions, they are better equipped to deal with challenges, build resilience, and form meaningful relationships.
                    </p>

                    <p className="mt-2 text-gray-500 dark:text-neutral-500">Ensuring a holistic approach to child development, encompassing both emotional and academic support, is essential to nurturing well-rounded, mentally healthy children.</p>
                </section>

                </article>
            </div>
        </>
    );
}

export default Blog3;