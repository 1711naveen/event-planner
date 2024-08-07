import React from 'react'
import { eventSupported } from '@/data';
import EventCard from './EventCard';

const EventList = () => {
    return (
        <section className='mx-20'>
            <h1 className='text-3xl font-medium my-8'>The events supported by our platform</h1>
            <div className='flex flex-row justify-center'>
                {eventSupported.map(event => {
                    return <EventCard name={event.eventName} img={event.img} />
                })}
            </div>
        </section>
    )
}

export default EventList
