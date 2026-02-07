import React from 'react'

const Surprise = () => {
  return (
    <div
      className="w-full h-screen bg-rose-400 animate-[movePattern_30s_linear_infinite]"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/06/92/77/99/240_F_692779944_Bd1EC2H9vSyI5vV3rcxstvnxS2Uam246.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "30px 30px",
      }}
    >
      <div className='bg-rose-500 py-4 text-rose-200 text-xl text-white font-bold text-center'>
        <h1 id='qu'>Happy Rose Day My SweetHeart</h1>
      </div>
        <div className='h-[60%] w-[90%] flex flex-col relative top-[20%] ml-5 bg-rose-100'>
          <p className='font-bold text-xl mb-2 mt-1'>🌹 Roses are red, skies are blue,
              My life is beautiful just because of you.
          </p>
          <p className='font-bold text-xl mb-2'>🌹 “Ek gulab tere naam,
            Aur dil mein teri yaad —
            Happy Rose Day meri jaan.”
          </p>
          <p className='font-bold text-xl mb-2'>🌹 “Har roz tumhe yaad karta hoon,
            Har pal tumhe chahta hoon,
            Is Rose Day par bas itna kehna hai —
            Tum meri khushi ho, aur tumhe hi chahta hoon.”
          </p>
          <h1 className='bg-rose-300 py-3 text-center text-rose-600 font-bold mt-2'>I LOVE YOU MY SWEETHEART ❤️</h1>
        </div>
    </div>
  )
}

export default Surprise
