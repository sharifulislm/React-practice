import React, { useState } from 'react';

const Test = (props) => {
//  const {count} =props;


 const [count , setCount] = useState(0);
     const minus = () => {
         if(count <= 0 ) {
          console.log('give Right numbar')
        }else{
            const newCount= count - 1;
        setCount(newCount);

        }

         
        
     };
     const plus = () => {
        const oldCount = count;
        const newCount = oldCount+1;
        setCount(newCount);
     };
     console.log(count);

    return (
        <div className='count mt-5'>

            <h1>{count}</h1>
            <button onClick={plus} className='ms-3 p-3'>+</button>
            <button onClick={minus} className='ms-3 p-3'>- </button>

        </div>
    );
};

export default Test;