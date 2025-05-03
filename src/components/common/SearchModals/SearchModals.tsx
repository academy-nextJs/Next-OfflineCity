'use client'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    Input,
    Select,
    SelectItem,
    Tabs,
    Tab,
  } from "@heroui/react";
import { useState } from "react";
import {CalendarDays} from 'lucide-react'
import { useForm , Controller } from "react-hook-form";

type IProps = {
    isOpen:boolean;
    onClose: () => void;
    onFilter: (filters:FormValues) => void;
}

type FormValues = {
  destination: string;
  persons: number;
  entryDate:string;
  exitDate:string;
  city:string;
  deposit:number;
  rent:number;
  budget:number;
  area:number;
}

const tabs = ['خرید و فروش' , 'رهن و اجاره' , 'رزرو ملک']

function CustomTabs ({
    selected,
    onChange,
} : {
    selected : string;
    onChange : (tab:string) => void
}){
    return(
        <div className="flex gap-2 bg-gray-100 p-1 rounded-full w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onChange (tab)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
                ${selected === tab ? 'bg-blue-600 text-white shadow' : 'bg-gray-200 text-black'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>
    )
}


  const SearchModals = ({isOpen , onClose , onFilter }:IProps) => {
  const [selectedtab, setSelectedtab] = useState<string>("رزرو ملک")

  const {
    register ,
    handleSubmit,
    control,
    reset,
  } = useForm<FormValues>({
    defaultValues:{
      destination: '',
      persons: 1,
      entryDate: '',
      exitDate: '',
      city: '',
      deposit: 0,
      rent: 0,
      budget: 0,
      area:0,
    
    }
  })

  const onSubmit = (data:FormValues) =>{
    console.log('فیلتر شد' , data);
    onFilter(data);
    onClose();
  } 

const renderContent = () => {
    switch (selectedtab) {
        case 'رزرو ملک':

    return(

     <div className="flex gap-[31px]" >
       <div className="w-1/2"> 
        <div>
          <label className="font-[600] "> مقصد </label>
           <Controller 
              control={control}
              name="destination"
              render={({field}) => (
             <Select className="pt-3"  label='مقصد' placeholder="انتخاب مقصد" {...field} >
                <SelectItem  key="tehran" > tehran </SelectItem >
                <SelectItem  key="sari" > sari </SelectItem >
                <SelectItem  key="rasht" > rasht </SelectItem >
            </Select>
            )} 
          />
        </div>
        <div className="pt-6"> 
        <label className="font-[600]  "> تاریخ ورود </label>   
          <Input  
             className="pt-3"
             label="تاریخ ورود"
             placeholder="انتخاب کنید"
             startContent={<CalendarDays />}
             {...register('entryDate')}
           />
        </div>
        </div>
         <div className="w-1/2">
          <div>
          <label className="font-[600] "> تعداد نفرات </label>
            <Input
              className="pt-3"
              label='تعداد نفرات' 
              placeholder="مثلا 2" 
              type="number"
              {...register('persons' , {valueAsNumber: true})}        
             />
           </div>
           <div className="pt-6"> 
           <label className="font-[600] "> تاریخ خروج </label>
               <Input 
                 className="pt-3"
                 label="تابع خروج"
                 placeholder="انتخاب کنید"
                 startContent={<CalendarDays />}
                 {...register('exitDate')}
               />  
            </div>               
           </div>
         </div>
);

case 'رهن و اجاره' :

return (
    <>
       <Select label='مقصد' placeholder="انتخاب مقصد">
          <SelectItem  key="tehran" > tehran </SelectItem >
          <SelectItem  key="sari" > sari </SelectItem >
       </Select>

       <Input label='ودیعه تومان' type="number" />
       <Input label='ودیعه تومان' type="number" />       
    </>
);

case 'خرید و فروش':
    return(
        <>
        <Controller
          control={control}
          name="city"
          render={({field}) => (
         <Select label='مقصد' placeholder="انتخاب مقصد" {...field}>
             <SelectItem  key="tehran" > tehran </SelectItem >
             <SelectItem  key="sari" > sari </SelectItem >
         </Select>            
          )}
        />


         <Input 
            label='ودیعه تومان'
             type="number" 
             {...register('area' , {valueAsNumber : true})}
             />
        </>
    );
    default:
        return null

}
}

return(
    <Modal  isOpen={isOpen} onClose={onClose} placement="center" size="2xl"> 
        <ModalContent>
            <ModalHeader> <CustomTabs selected={selectedtab} onChange={setSelectedtab} /> </ModalHeader>
                <ModalBody>
                  <form className="space-y-4" onSubmit={handleSubmit(onSubmit) }>
                    <Tabs
                       selectedKey={selectedtab}
                       onSelectionChange={(key) => setSelectedtab(String(key))}
                       aria-label="انتخاب بخش"
                       color="primary"
                       variant="underlined"
                    >
                    </Tabs>
                   {renderContent()}

                   <Button color="primary" className="mt-4" type="submit">
                        جستجو
                   </Button>
                   </form>
                </ModalBody>          
        </ModalContent>
    </Modal>
)

    
    
  }

  export default SearchModals