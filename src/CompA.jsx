import React, { memo } from 'react'

const CompA = ({ incrementCount }) => {
   console.log('rendering ChildCallBack Comp');

  return (
    <>
        <div>ChildCallBack</div>
        <button onClick={() => incrementCount(5)}>+</button>
    </>
  )
}

export default memo(CompA)