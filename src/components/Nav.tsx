import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex w-full h-[72px] z-[1] p-[1ram] fixed bg-red-500 justify-between items-center'>
        <div>
            <Link to="/">Logo</Link>
        </div>
        <div>
            <Link to="/register">สมัครสมาชิก</Link>
            <Link to="/login">เข้าสู่ระบบ</Link>
        </div>
    </nav>
  )
}

export default Nav