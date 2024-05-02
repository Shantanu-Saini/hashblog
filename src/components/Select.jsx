import React, { forwardRef, useId } from 'react'

const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='w-full'>
            {
                label && <label className='' htmlFor={id}></label>
            }

            <select
                {...props}
                id={id}
                className={`border-2 border-gray-300 rounded-md py-1 px-4 block w-full ${className}`}
                ref={ref}>

                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}


            </select>
        </div>
    )
}

export default forwardRef(Select)