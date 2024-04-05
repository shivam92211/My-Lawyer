'use client'

import React, { useState } from 'react';
import { User } from './law';
import Table from './Table';

const Filter = () => {

  const [query, setQuery] = useState("");

  const keys = ["Name", "Designation", "Address", "Remarks"]

  const search = (data) => {
    return data.filter(
        (item) => 
        item.Name.toLowerCase().includes(query) ||
        item.Address.toLowerCase().includes(query) ||
        item.Remarks.toLowerCase().includes(query) ||
        item.Designation.toLowerCase().includes(query) 
        );
  }

  return (
    <div className='grid justify-items-center flex-col justify-center'>
        <div className='my-6 border-2 border-gray-400 border-rounded'>
        <input 
            type="text" 
            placeholder='Search...' 
            className='search' 
            onChange={(e) => setQuery(e.target.value)} 
        />
        </div>
        
        {/* <div className='mb-2'>
        <ul className='list'>
            {User.filter(user=>user.Name.toLowerCase().includes(query)
            ).map(user=>(
                <li key={user.Num} className='listItems'></li>
            ))}
        </ul>
        </div> */}
        
    <Table data={search(User)}/>
    </div>
  )
}

export default Filter