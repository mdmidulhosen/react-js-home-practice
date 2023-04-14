import React from 'react'

function SearchResultList({results}) {
  return (
    <div>
      {
        results.map((result, id)=>{
            return <div style={{borderBottom:'red', widht:'2px'}} className='p-3 text-black bg-white' key={id}>{result.name}</div>
        })
      }
    </div>
  )
}

export default SearchResultList
