import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card 1*/}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Hot Burger</p>
                <p className='px-2'>Try it! 18$</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.pexels.com/photos/10701944/pexels-photo-10701944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
            />
        </div>

             {/* Card 2*/}
             <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Cicis Buffet Pizza </p>
                <p className='px-2'>Try it! 20$</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
            />
        </div>

             {/* Card 3*/}
             <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Chiken Fries</p>
                <p className='px-2'>Try it! 49$</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.pexels.com/photos/5718025/pexels-photo-5718025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
            />
        </div>
    </div>
  )
}

export default HeadlineCards