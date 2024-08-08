'use client'
import { accordions } from '@/data'
import React, { useState } from 'react'
import Accordion from './Accordion'

interface AccordionType {
    key: number;
    title: string;
    data: string;
    isOpen: boolean;
}

const AccordionPage = () => {
    const [accordionsHere, setAccordionsHere] = useState<AccordionType[]>(accordions);

    const toggleAccordion = (accordionkey: number) => {
        const updatedAccordions = accordionsHere.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });
        setAccordionsHere(updatedAccordions);
    };
    return (
        <div className='md:flex md:justify-center md:mx-20 '>
            <div className='md:w-1/4  flex justify-center items-center'>
                <h1 className='text-4xl mx-8'>Frequently
                    Asked Questions</h1>
            </div>
            <div className='md:w-3/4'>
                <div>
                    <div className="p-2 m-8">
                        {accordionsHere.map((accordion) => (
                            <Accordion
                                key={accordion.key}
                                title={accordion.title}
                                data={accordion.data}
                                isOpen={accordion.isOpen}
                                toggleAccordion={() => toggleAccordion(accordion.key)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionPage
