import { tasksProvided } from '@/data'
import React from 'react'
import TaskCard from './TaskCard'


const TaskList = () => {
    return (
        <section className='mx-4 my-10 md:mx-20 md:my-28'>
            <h1 className='text-2xl md:text-3xl font-medium my-8'>What are you looking for ?</h1>
            <div className='grid grid-cols-3 gap-4 md:flex md:flex-row md:justify-center'>
                {tasksProvided.map(task => {
                    return <TaskCard name={task.name} img={task.img} />
                })}
            </div>
        </section>
    )
}

export default TaskList
