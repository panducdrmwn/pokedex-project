import React from 'react'
import PropTypes from 'prop-types';

const HomeCard = ({id, height, weight, abilities ,image, name, types}) => {
    
  return (
    <div
        className={`h-full w-52 rounded-3xl p-2 shadow-2xl cursor-pointer`}
    >
    <div className="h-full w-full ">
    <div className="w-full h-3/5 flex items-center justify-center">
      <img
        className=" h-full"
        src={image}
        alt={name}
        draggable="false"
      ></img>
    </div>

    <div className="h-2/5 px-3 text-sm">
      <p className="">#{id.toString().padStart(4, "0")}</p>

      <div className="h-1/6 w-full "></div>

      <div>
        <h2 className="text-lg capitalize font-bold">{name}</h2>
      </div>

      <div className=" flex flex-wrap justify-between">
        <p className="text-sm text-purpleTheme">Weight: {weight}</p>
        <p className="text-sm text-darkYellowFontColor">Height: {height}</p>
        <p className="text-sm text-darkYellowFontColor">Abilites: {abilities.length}</p>
      </div>

      <div className='pt-2'>
        <h2 className='font-semibold'>Type</h2>
        <div className='flex flex-row gap-1 py-2'>
            {types.map((type, idx) => {
                    return(
                    <div key={idx} className='capitalize  rounded-3xl text-sm bg-green-200 p-2'>{type?.type?.name}</div> 
                    )
            })}
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

HomeCard.propTypes = {
    height: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
    openDetails: PropTypes.func,
  };

export default HomeCard