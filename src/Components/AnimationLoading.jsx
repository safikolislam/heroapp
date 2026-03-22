import React from 'react';

import Puff from 'react-loading-icons/dist/esm/components/puff';

const AnimationLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in duration-700">
      <Puff stroke="purple" 
        strokeWidth={4} 
        strokeOpacity={.9} 
        speed={5} 
        width={120} 
        height={120} />
    </div>
  );
};

export default AnimationLoading;
