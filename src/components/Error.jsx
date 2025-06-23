import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>

            <div className='mx-auto sm:xs md:w-xl ml:w-md mt-5 '>
                <img src="https://i.ibb.co.com/kV3jqgjd/20945761.jpg" alt="" />
            </div>

            <div className='text-center items-center mb-10'>
                <Link to='/' className='btn btn-success text-white rounded-2xl sm:w-sm md:w-2xs lg:w-xl '> <span className='text-3xl'>
                    <IoIosArrowRoundBack></IoIosArrowRoundBack></span> Back to home</Link>
            </div>

        </div>
    );
};

export default Error;