import React from 'react'
import "./Dct.css"
import { MdKeyboardArrowRight } from "react-icons/md";

const Dct = () => {
  return (
    <div className='Dct-text'>
        <span className='Dct-span'>
            가입 후 3일간 첫 주문
            <font color="FF5160">
                <b style={{marginLeft:5}}>990원</b>
            </font>
        </span>
        <p className='Dct-full'>전체보기
        <MdKeyboardArrowRight/></p>
    </div>
  )
}

export default Dct