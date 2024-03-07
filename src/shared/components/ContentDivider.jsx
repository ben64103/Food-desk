import React from 'react';

const ContentDivider = ({ width, content }) => {
  return (
    <div className={`relative w-[${width}] mx-auto`}>
      <div className='absolute inset-0 flex items-center'>
        <div className='w-full border-2 border-t border-gray-200/80'></div>
      </div>
      <div className='relative flex items-center justify-center text-xs'>
        <span className='px-4 bg-white font-medium text-gray-500/90'>{content}</span>
      </div>
    </div>
  );
};

export default ContentDivider;
