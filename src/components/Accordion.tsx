import React from 'react'
interface AccordionProps {
    title: string;
    data: string;
    isOpen: boolean;
    toggleAccordion: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, data, isOpen, toggleAccordion }) => {
    return (
        <div className="rounded-md p-4 w-full">
            <button
                className="w-full text-left"
                onClick={toggleAccordion}
            >
                {title}
                <span className={`float-right transform ${isOpen ?
                    'rotate-180 p-1' : 'rotate-0'}  
                         transition-transform duration-1000`}>
                    &#9660;
                </span>
            </button>
            {isOpen && (
                <div className="text-sm">
                    {data}
                </div>
            )}
        </div>
    )
}

export default Accordion
