

import { nanoid } from 'nanoid'


const shirts = [
    {id:nanoid(),name:"Manchester United 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/mu mock.webp", category:"pl"},
    {id:nanoid(),name:"Manchester City 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/MCFC.png", category:"pl"},
    {id:nanoid(),name:"Real Madrid C,F 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/real madrid.jpg", category:"la liga"},
    {id:nanoid(),name:"FC Barcelona 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/barca.webp", category:"la liga"},
    {id:nanoid(),name:"Arsenal 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/arsenal.webp", category:"pl"},
     {id:nanoid(),name:"Paris Saint Germain 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/psg.webp", category:"la liga"},
    {id:nanoid(),name:"Bayern Munich 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/bayern.webp", category:"pl"},
    {id:nanoid(),name:"Liverpool 25/26 Home Jersey", price :"Rs.3,000.00 PKR", pic : "/images/liverpool.jpeg", category:"pl"},
      
 
]

const plKits = shirts.filter((shirt)=>shirt.category === "pl");

function Product() {
  return (
    <div className='w-full  font-Poppins flex items-center justify-center'>
        <div className='w-full lg:w-[75%] '>
            
            <h1 className='font-semibold text-lg  lg:text-3xl px-10 text-[#2f7eff]  lg:px-15 pt-5  lg:pt-10'>Featured products</h1> 

              <div className='p-5  lg:p-10  flex items-center justify-center flex-wrap gap-3 '>

 
                {
                    shirts.map((shirt)=>(
                <div className='w-68 cursor-pointer mb-2 ' key={shirt.id}>
                    <div className='w-68 h-80 overflow-hidden'>
                         <img src={shirt.pic} className='w-full h-full  hover:scale-110 transition-transform delay-100 ease-linear  object-cover'></img>
                    </div>
                    <div className='font-Dm-Sans  text-gray-700'>
                        <h3 className='my-2 text-sm hover:underline'>{shirt.name}</h3>
                    <h4 className='my-2  text-md hover:underline'>{shirt.price}</h4>
                    </div>
                </div>
                    ))


                }
               
            </div>
         </div>
       
        </div>
  )
}

export default Product