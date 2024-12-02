'use client'

import Image from "next/image";
import * as React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const About = () => {
    const techStack = [
        { name: 'React', img: '/images/react.svg' },
        { name: 'Next.js', img: '/images/next.svg' },
        { name: 'NestJS', img: '/images/nestjs.svg' },
        { name: 'MySQL', img: '/images/mysql.svg' },
        { name: 'PostgreSQL', img: '/images/postgresql.svg' },
        { name: 'Redux', img: '/images/redux.svg' },
        { name: 'Redis', img: '/images/redis.svg' },
        { name: 'NodeJS', img: '/images/nodejs.svg' },
    ];

    const techInfo = {
        "Programming Languages": ["JavaScript", "TypeScript"],
        "Web technologies and Frameworks": ["React", "Next.js", "NestJS", "SCSS", "TailwindCSS"],
        "Database": ["MySQL", "PostgreSQL", "MongoDB"],
        "State Management": ["Redux"],
        "Tools": ["Jest", "Postman"],
        "Caching": ["Redis"],
        "Version Control": ["Git"],
        "Testing": ["Jest", "Cypress"],
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className='mt-24'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>About me</h1>
                <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg mx-auto">
                    Ready to take on projects ranging from simple one-page landing pages to complex e-commerce websites.
                </p>

                <h2>Current tech stack:</h2>
                <div className="w-[1000px] ">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="transform 1s ease-in-out"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"

                    >
                        {techStack.map((tech, index) => (
                            <div key={index} className="p-4 flex flex-col">
                                <Image src={tech.img} alt={tech.name} width={70} height={70} className="mx-auto" />
                                <p className="text-center mt-2">{tech.name}</p>
                            </div>

                        ))}
                    </Carousel>

                    <div className="overflow-x-auto bg-gray-200 rounded-xl shadow-sm mt-6">
                        <table className="table-auto w-full text-left border-collapse border border-gray-300">
                            <thead className="bg-gray-300">
                                <tr>
                                    <th className="border border-gray-400 px-4 py-2 w-1/3">Category</th>
                                    <th className="border border-gray-400 px-4 py-2 w-2/3">Technologies</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(techInfo).map(([category, technologies]) => (
                                    <tr key={category}>
                                        <td className="border border-gray-400 px-4 py-2">{category}</td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {technologies.join(', ')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
