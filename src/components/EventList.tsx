import React from 'react'
import { eventSupported } from '@/data';
import EventCard from './EventCard';

const EventList = () => {
    return (
        <section className='md:mx-20 mx-2'>
            <h1 className='text-2xl md:text-3xl font-medium my-8'>The events supported by our platform</h1>
            <div className='grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-center'>
                {eventSupported.map((event, i) => {
                    return <EventCard key={i} name={event.eventName} img={event.img} />
                })}
            </div>
        </section>
    )
}

export default EventList
