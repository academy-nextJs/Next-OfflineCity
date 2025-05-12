import { useForm } from '@tanstack/react-form'
import React from 'react'

interface Values {
inDate: string;
exitdate: string;
people: number;
}

export const HouseReserveInput = () => {
    const form = useForm<Values , any , any , any , any , any , any ,any , any , any >({
        defaultValues: {
            inDate: '',
            exitdate: '',
            people: 0,
        },
        onSubmit: async({value}) => {
            console.log('form submitting' , value)
        }
    })
  return (
    <div>
        <span>  همین حالا رزرو کنید  </span>
        <form onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit()
        }}>
            <div>
                <label>  indate </label>
                <form.Field
                 name='inDate'
                 children={(field) => (
                    <input
                     value={field.state.value}
                     onBlur={field.handleBlur}
                     onChange={(e) => field.handleChange(e.target.value)}
                    />
              
                 )}
                 validators={{
                    onChange: ({value}) => ! value ? "نام الزامی است " : undefined
                 }}
                />              
            </div>

            <div>
                <label>  indate </label>
                <form.Field
                 name='exitdate'
                 children={(field) => (
                    <input
                     value={field.state.value}
                     onBlur={field.handleBlur}
                     onChange={(e) => field.handleChange(e.target.value)}
                    />
              
                 )}
                 validators={{
                    onChange: ({value}) => ! value ? "نام الزامی است " : undefined
                 }}
                />              
            </div>
            <div>
                <label>  indate </label>
                <form.Field
                 name='people'
                 children={(field) => (
                    <input
                     value={field.state.value}
                     onBlur={field.handleBlur}
                     onChange={(e) => field.handleChange(Number(e.target.value))}
                    />
              
                 )}
                 validators={{
                    onChange: ({value}) => ! value ? "نام الزامی است " : undefined
                 }}
                />              
            </div>
            <button
              type='button'
              onClick={() => form.handleSubmit()}
            >
                بده برعه
            </button>
        </form>
    </div>
  )
}

