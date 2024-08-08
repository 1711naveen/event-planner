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
        <div className='flex justify-center mx-20 border-2'>
            <div className='w-1/4 border-2 flex justify-center items-center'>
                <h1 className='text-4xl'>Frequently
                    Asked Questions</h1>
            </div>
            <div className='w-3/4'>
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
