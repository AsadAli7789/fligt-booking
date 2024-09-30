import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import moment from 'moment';
import './datepicker.css'


export default function Asad () {


const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

    return (
        <div className='w-[16.875vw] h-[5.6vh] mx-auto  flex static flex-col my-auto mt-5 border border-black '>
           <label htmlFor="" className='relative z-100 bg-white ml-4 top-[-.8rem] w-fit  px-3'>Depart - return</label>
            <RangePicker  className='w-full border-none  h-4'
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
            />
        </div>
    );
};

// ReactDOM.render(<Asad/>, document.getElementById('mountNode'));
