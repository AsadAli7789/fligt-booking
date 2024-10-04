import React from 'react';
import { Slider, Tooltip } from 'antd';
import './slider.css'
function Sllider () {
  <div className='' >
  <Slider 
      range={{
          draggableTrack: true,
      }}
      tooltip={{
          open: true,
      }}
      defaultValue={[20, 50]}
  />

</div>
}

export default Sllider;