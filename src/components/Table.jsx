import React from 'react'



const Table = ({data}) => {
  return (
    <table className='table-fixed'>
        {/* <caption class="caption-top">
            Experiance lawyers.
        </caption> */}
        <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Date of Designation</th>
            <th>Remarks</th>
        </tr>
        </thead>
        
        <tbody className='mb-4'>
        {data.map((item) => (
            <tr key={item.Num} className=''>
                <td>{item.Name}</td>
                <td>{item.Address}</td>
                <td>{item.Designation}</td>
                <td>{item.Remarks}</td>
            </tr>
        ))}
        </tbody>
    </table>
  )
}

export default Table