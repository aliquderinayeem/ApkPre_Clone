import React from 'react';
import downloadIcon from '../../../assets/icon-downloads.png';
import IconRating from '../../../assets/icon-ratings.png';
import { useNavigate } from 'react-router';
const AppCard = ({ app }) => {
    const {image,title,rating,downloads,id}=app;
    const modifiedDownload=downloads/1000000;
    const navigate=useNavigate();
    const gotoDetails=()=>{
        // console.log(id);
        navigate(`/apps/${id}`);
    }
    return (
        <div onClick={gotoDetails} className='w-full h-full p-3 sm:p-4 md:p-4 hover:scale-104 transition ease-in-outs flex flex-col gap-3 sm:gap-4 md:gap-4 rounded-lg bg-white shadow-sm hover:shadow-md duration-300'>
            <div className='w-full h-[435px] overflow-hidden rounded-[15px]'>
                <img 
                    src={image}
                    className='w-full h-full object-cover'
                    alt={title}
                />
            </div>
            <div className='grow'>
                <h1 className='text-base sm:text-lg md:text-xl lg:text-[24px] font-bold leading-tight lg:leading-6 line-clamp-2'>
                    {title}
                </h1>
            </div>
            <div className='flex justify-between mt-auto'>
                <div className='flex gap-1 sm:gap-2 items-center bg-[#F1F5E8] py-1 sm:py-2 px-2 sm:px-3 rounded-[5px]'>
                    <img 
                        src={downloadIcon} 
                        className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' 
                        alt='downloads'
                    />
                    <h1 className='text-xs sm:text-sm md:text-[20px] font-bold text-[#00D390]'>
                        {modifiedDownload.toFixed(2)}&nbsp;M
                    </h1>
                </div>
                <div className='flex gap-1 sm:gap-2 items-center bg-[#FFF0E1] py-1 sm:py-2 px-2 sm:px-3 rounded-[5px]'>
                    <img 
                        src={IconRating} 
                        className='w-3 h-3 sm:w-4 sm:h-4 md:w-[22px] md:h-[22px]' 
                        alt='ratings'
                    />
                    <h1 className='text-xs sm:text-sm md:text-[20px] font-bold text-[#ff8811]'>
                        {rating}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default AppCard;