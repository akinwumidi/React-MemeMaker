import React from 'react'
import "./MemeDisplay.css";

const MemeDisplay = (props) => {
    return (
        <>
            <div className='MemeDisplayBox'>
                <p className='MemeDisplayBox_TopText'>{props.topMemeText}</p>
                <p className='MemeDisplayBox_BottomText'>{props.bottomMemeText}</p>
                <img src={props.RandomMemeImage} name='RandomMemeImage' />
            </div>
        </>
    )
}

export default MemeDisplay