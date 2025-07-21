

import { X } from 'lucide-react';
import { nanoid } from 'nanoid'
import { useState } from 'react';
import AddToCartButton from './Custom button/AddToCartButton';



export const shirts = [
  {
    id: nanoid(),
    name: "Manchester United 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/mu mock.webp",
    category: "pl",
    players: ["Bruno Fernandes", "Rasmus Højlund", "Marcus Rashford"]
  },
  {
    id: nanoid(),
    name: "Manchester City 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/MCFC.png",
    category: "pl",
    players: ["Erling Haaland", "Kevin De Bruyne", "Phil Foden"]
  },
  {
    id: nanoid(),
    name: "Real Madrid C,F 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/real madrid.jpg",
    category: "la liga",
    players: ["Vinícius Jr.", "Jude Bellingham", "Rodrygo"]
  },
  {
    id: nanoid(),
    name: "FC Barcelona 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/barca.webp",
    category: "la liga",
    players: ["Pedri", "Frenkie de Jong", "Robert Lewandowski"]
  },
  {
    id: nanoid(),
    name: "Arsenal 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/arsenal.webp",
    category: "pl",
    players: ["Bukayo Saka", "Martin Ødegaard", "Gabriel Jesus"]
  },
  {
    id: nanoid(),
    name: "Paris Saint Germain 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/psg.webp",
    category: "ligue 1",
    players: ["Kylian Mbappé", "Ousmane Dembélé", "Achraf Hakimi"]
  },
  {
    id: nanoid(),
    name: "Bayern Munich 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/bayern.webp",
    category: "bundesliga",
    players: ["Harry Kane", "Jamal Musiala", "Joshua Kimmich"]
  },
  {
    id: nanoid(),
    name: "Liverpool 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/liverpool.jpeg",
    category: "pl",
    players: ["Mohamed Salah", "Darwin Núñez", "Trent Alexander-Arnold"]
  },
  {
    id: nanoid(),
    name: "Juventus 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/juventus.webp",
    category: "seria A",
    players: ["Dušan Vlahović", "Federico Chiesa", "Adrien Rabiot"]
  },
  {
    id: nanoid(),
    name: "Portugal 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/portugal.webp",
    category: "international",
    players: ["Cristiano Ronaldo", "Bernardo Silva", "Bruno Fernandes"]
  },
  {
    id: nanoid(),
    name: "LYON 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/LYON.webp",
    category: "ligue 1",
    players: ["Alexandre Lacazette", "Rayan Cherki", "Corentin Tolisso"]
  },
  {
    id: nanoid(),
    name: "AC Milan 25/26 Home Jersey",
    price: "Rs.3,000.00 PKR",
    pic: "/images/ac milan.webp",
    category: "seria A",
    players: ["Rafael Leão", "Christian Pulisic", "Theo Hernández"]
  }
];


const plKits = shirts.filter((shirt)=>shirt.category === "pl");

function Product({category,length,title}) {

   const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className='w-full  font-Poppins flex items-center justify-center '>
        <div className='w-full lg:w-[75%] '>
            
            <h1 className='text-center font-semibold text-lg  lg:text-3xl px-10 text-[#2f7eff]  lg:px-15 pt-5  lg:pt-10'>{title}</h1> 

              <div className='p-5  lg:p-10  flex items-center justify-center flex-wrap gap-3 '>

            {
            shirts
            .filter(
              (shirt) =>
               category === "all"?true:shirt.category === category
            )
            .slice(0, length)
            .map((shirt) => (
              <div className='w-68 cursor-pointer mb-2' key={shirt.id}>
                <div className='w-68 h-80 overflow-hidden'>
                  <img
                    src={shirt.pic}
                    loading='lazy'
                    className='w-full h-full hover:scale-110 transition-transform delay-100 ease-linear object-cover'
                  />
                </div>
                <div className='font-Dm-Sans text-gray-700'>
                  <button onClick={()=>handleProductClick(shirt)} className='my-2 text-sm hover:underline'>{shirt.name}</button>
                  <h4 className='my-2 text-md hover:underline'>{shirt.price}</h4>
                </div>
              </div>
            ))
        }
            </div>
         </div>
       {showModal && selectedProduct && (
        <div className="fixed inset-0  bg-[rgba(0,0,0,0.2)] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg  w-[80%] h-[55%]  relative overflow-hidden">
               <button
              className="absolute top-4 right-4 text-black text-xl"
              onClick={closeModal}
            >
              <X className='bg-white rounded-4xl' strokeWidth={1.5} size={30} absoluteStrokeWidth={true}/>
            </button>
           
            <div className='flex flex-row'>
             
            <div className='w-136 h-160  overflow-hidden '>
              <img src={selectedProduct.pic} alt={selectedProduct.name} className="w-full h-full object-cover " />
              </div>

              <div className='flex  flex-col  w-[60%] h-[45%] pl-10 flex-wrap'>
                <h2 className="text-md text-4xl  pt-4">{selectedProduct.name}</h2>
                 <p className="text-gray-600 text-lg ">{selectedProduct.price}</p>
                 <div>
                   <h3 className='mt-3 text-gray-700'>Size</h3>
                   <div className='flex flex-wrap gap-2 mt-2'>
                   <button className='text-gray-500 border rounded-4xl w-12  h-6  bg-black'>S</button>
                   <button className='text-gray-500 border rounded-4xl w-12  h-6 '>M</button>
                   <button className='text-gray-500 border rounded-4xl w-12  h-6 '>L</button>
                   <button className='text-gray-500 border rounded-4xl w-12  h-6 '>XL</button>
                   <button className='text-gray-500 border rounded-4xl w-12  h-6 '>XXL</button>
                   </div>
                      <div>
                   <h3 className='mt-3 text-gray-700'>Player Options</h3>
                   <div className='flex flex-wrap gap-2 mt-2'>
                    {selectedProduct.players.map((player,index)=>(
                      <button key={index} className='text-gray-500 border rounded-4xl px-3 py-1  '>{player}</button>
                    ))}
                   </div>
                  </div>

                    <div >
                      <h3 className='mt-3 text-gray-700'>Quantity</h3>
                      <div className='flex gap-4 mt-2'>
                        <button className='h-8 w-8 border text-gray-500 flex  items-center justify-center'>-</button>
                        <h1 className='h-8 w-8 border text-gray-500 flex  items-center justify-center'>1</h1>
                        <button className='h-8 w-8 border text-gray-500 flex  items-center justify-center'>+</button>
                      </div>
                      </div>
                  </div>
               <div>
                <p className=" text-gray-600 mt-5  w-132 text-justify space-y-2">
          <li>Embroided Logo</li>
          <li>Stretchable Ribbed Sleeve and Neck</li>
          <li>Premium Mesh Sports Fabric</li>
           <li>Velvet Patches</li>
        </p>
                </div>

            <div className='absolute bottom-10 right-10  mt-2'>
           
            <AddToCartButton/>
                </div>
                
            </div>
             </div>
          </div>
        </div>
      )}
        </div>
  )
}

export default Product;