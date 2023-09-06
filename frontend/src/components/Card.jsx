import React from 'react'

const Card = ({key, user_id, first_name, last_name, start_date, end_date, type, status}) => {
    return (
        <div key={key} className='relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl'>
            <div className='w-4/6'>
                <p className='text-lg font-medium text-gray-800'>
                    {first_name} {last_name}
                </p>
                <p className='text-md text-gray-800 mb-2'>
                    {type}
                </p>
                <p className='text-xs text-gray-400'>
                    {start_date} - {end_date}
                </p>
                <p className='text-xl font-medium text-indigo-500'>
                    {status ? 'Paid' : 'Unpaid'}
                </p>
            </div>
        </div>
    )
}

export default Card