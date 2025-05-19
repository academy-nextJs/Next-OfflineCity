import openai from "@/utils/helpers/openai/lib/openai";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest ): Promise<NextResponse>{
    const body : {description? : string} = await req.json();
    const {description} = body;

    if (!description) {
    return NextResponse.json({error : 'توضیح خانه الزامی است '} , {status: 400})    
   }
   try {
    const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {role: 'system' , content: 'تو یک مشاور طراح خانه هستی و فقط فارسی صحبت میکنی'},
            {role: 'user' , content: `لطفا پیشنهاد بده چیکار کنبم ${description}`},
        ]
    })

    const advice = completion.choices[0].message.content;
    return NextResponse.json({advice})
   } catch (error) {
    console.log('Ai errror' , error)
    return NextResponse.json({error: 'خطا در دریافت پاسخ هوش مصنوعی'} , {status: 500})    
   }
}