'use client'

import { FormEvent, JSX, useState } from "react";

export default function HouseFormAi(): JSX.Element {
const [description, setDescription] = useState<string>('')
const [advice, setAdvice] = useState<string>('')
const [loading, setLoading] = useState<boolean>(false)

const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    try {
        const res = await fetch('api/house-advice' , {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({description})
        })

        const data : {advice ? : string, error?:string} = await res.json()
        setAdvice(data.advice || data.error || 'هیچی دنیه برار')
    } catch (error) {
        setAdvice('خطا در ارتباط با سرور')
    }
    setLoading(true)
}
return (
    <div className="max-w-xl mx-auto p-4">
        <form onSubmit={handleSubmit}>
           <textarea 
            className="w-full border p-2 rounded mb-2"
            placeholder="توضیحی در باره خانه بنویس"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
           />
           <button 
             type="submit"
             className="bg-blue-600 text-white px-4 py-2 rounded"
             disabled={loading}
           >
            {loading ? 'دریافت پیشنهاد ' : "در حال پردازش ......"}
           </button>
        </form>
        {advice && (
            <div className="mt-4 p-4 bg-gray-100 rounded"> 
               <strong>   پیشنهاد : </strong>
               <p>    {advice}  </p>
            </div>
        )}
    </div>
)
} 