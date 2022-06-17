import React from 'react';
import './Experts.css';
import Expert from '../Expert/Expert';

import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'



const Experts = () => {

    const experts = [
        {id:1, name: 'Sam Mukherjee', img: expert1},
        {id:2, name: 'John cena', img: expert2},
        {id:3, name: 'Dwanye Rock ', img: expert3},
        {id:4, name: 'Salman Khan', img: expert4},
        {id:5, name: 'Dilip Ghosh', img: expert5},
        {id:6, name: 'Bibhas Basu', img: expert6},
    ];
    return (
        <div id="experts" className='container mt-4'>
            <h1 className='text-primary text-center'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;