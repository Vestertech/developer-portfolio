import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';

const SingleProject = ({ project }) => {
  const { name, description, tags, code, demo, image } = project;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {name}
        </p>
      </div>

      <div className='flex flex-col items-center justify-between w-full h-full'>
        <h2 className='text-[#EFF3F4] font-semibold text-[1.525rem] text-center capitalize'>{name}</h2>
        <div className='p-6'>
          <Image
            src={image || '/png/placeholder.png'}
            alt={name}
            width={1080}
            height={720}
            className='w-80 h-64 transition-opacity duration-[0.7s] rounded-lg group-hover:opacity-0'
          />
        </div>
        <div className='flex items-center justify-between w-full'>
          <Link href={demo} target='_blank' className='flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all hover:bg-[#231d4b] hover:text-violet-600 hover:scale-110'>
            <FaPlay />
          </Link>
          <Link href={code} target='_blank' className='flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all hover:bg-[#231d4b] hover:text-violet-600 hover:scale-110'>
            <FaCode />
          </Link>
        </div>
      </div>
      <p className='absolute w-[90%] md:w-[85%] p-6 rounded-[0_20px_20px_0] left-0 top-0 bg-[#0f0b24] text-[#EFF3F4] text-xs md:text-sm translate-x-[-110%] transition-transform duration-[0.9s] group-hover:translate-x-[-2%]'>
        {description}
      </p>
      <div className='group-hover:translate-x-0 absolute w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-[0.5s] delay-[0.3s] p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-4 bg-[#0f0b24] text-[#EFF3F4]'>
        {tags.map((tag, id) => (
          <span className='font-medium break-words text-xs' key={id}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;
