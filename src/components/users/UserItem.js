import React from 'react'

function UserItem({user:{html_url, login, avatar_url}}) {
  return (
    <div className='card text-center'>
        <img src={avatar_url}
         alt='user'
         className='round-img'
         style={{width:"60px"}}
    
        />
        <h3>{login}</h3>
        <a href={html_url}
        className="btn btn-dark btn-sm my-1">More</a>
    </div>
  )
}

export default UserItem