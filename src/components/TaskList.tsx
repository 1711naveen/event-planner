import { tasksProvided } from '@/data'
import React from 'react'
import TaskCard from './TaskCard'


const TaskList = () => {
    return (
        <section className='mx-20 my-28'>
            <h1 className='text-3xl font-medium my-8'>What are you looking for ?</h1>
            <div className='flex flex-row justify-center'>
                {tasksProvided.map(task => {
                    return <TaskCard name={task.name} img={task.img} />
                })}
            </div>
        </section>
    )
}

export default TaskList
