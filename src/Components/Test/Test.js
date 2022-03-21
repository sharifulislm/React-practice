import React from 'react';

const Test = ({ count }) => {
//  const {count} =props;
 console.log(count);

    return (
        <div className='count mt-5'>
            <button onClick={count} className='ms-3 p-3'>+</button>
            <button className='ms-3 p-3'>- </button>

        </div>
    );
};

export default Test;