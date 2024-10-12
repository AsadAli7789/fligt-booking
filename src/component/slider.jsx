import React from 'react';
import { Slider } from 'antd';
const Sllider = () => (
<div className='w-[90vw] py-1'>
    <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[20, 50]}
  />
  </div>
);
export default Sllider;