import React from 'react'

const Reason = ({ ques, ans }: { ques: string, ans: string }) => {
    return (
        <div>
            <h1 className='font-bold mt-8'>{ques}</h1>
            <p className='mb-6'>{ans}</p>
        </div>
    )
}

export default Reason
