import React from 'react';

function Blog4() {
    return (
        <>
            <div className="relative h-[20rem] md:h-[calc(100vh-156px)] flex items-center justify-center bg-cover bg-center bg-no-repeat blog1-thumbnail">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-bold lg:text-5xl lg:leading-tight text-white mb-3">Blog Details</h1>
                <ol className="flex items-center justify-center space-x-4">
                    <li className="inline-flex items-center">
                        <a className="text-sm text-gray-300 hover:text-white focus:outline-none focus:text-white" href="/blog">
                        Blog 4
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
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 mb-5">Mental Health Support for Children</h2>

                <section>
                    <p className="text-gray-500 dark:text-neutral-500">
                        Ensuring proper mental health support for children is vital in addressing issues like anxiety, depression, or behavioral problems. Early intervention can make a world of difference in how a child copes with emotional challenges and develops throughout their life.
                    </p>

                    <hr className="my-8" />

                    <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>The Role of Therapy for Kids</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                        One of the most effective methods of mental health intervention for children is therapy for kids. Cognitive Behavioral Therapy (CBT) is often recommended for children dealing with depression, anxiety, or stress-related disorders. Therapy provides a safe space where children can learn to express their feelings, develop coping mechanisms, and better understand their emotions. Play therapy, art therapy, and family therapy are also highly effective in helping children communicate their feelings in ways they might struggle to articulate verbally.
                    </p>

                    <hr className="my-8" />

                   <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>The Importance of Family Support</h3>
                   
                    <p className="text-gray-500 dark:text-neutral-500">
                        While therapy is vital, family support is equally crucial. A child’s mental health often depends on the environment at home. Families should create a supportive, non-judgmental atmosphere where children feel safe expressing themselves. Family therapy can also be helpful, as it provides tools for parents and siblings to learn how to better support their loved ones.
                    </p>

                    <hr className="my-8" />

                    <h3 className='mb-4 font-bold text-1xl lg:text-1xl text-gray-800 dark:text-neutral-200'>Promoting Mental Health Support in Schools</h3>

                    <p className="text-gray-500 dark:text-neutral-500">
                    Schools play an essential role in supporting children's mental health by providing counselors, resources, and fostering a community that values emotional well-being. Teachers, too, can help by recognizing signs of emotional distress and encouraging positive mental health habits.
                    </p>

                    <p className="mt-2 text-gray-500 dark:text-neutral-500">In conclusion, the combination of professional therapy, family support, and school-based mental health initiatives creates a comprehensive approach that ensures children receive the care they need.</p>
                </section>

                </article>
            </div>
        </>
    );
}

export default Blog4;