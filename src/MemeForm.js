import React from 'react'
import "./MemeForm.css";

const MemeForm = (props) => {
    return (
        <form onSubmit={(e) => props.handleSubmit(e)}>
            <input
                type='text'
                name='topMemeText'
                onChange={props.handlechange}
                value={props.topMemeText}
                placeholder="Top text"
                className='formInput'
            />
            <input
                type='text'
                name='bottomMemeText'
                onChange={props.handlechange}
                value={props.bottomMemeText}
                placeholder="Bottom text"
                className='formInput'
            />
            <button className="MemeForm__button">Suprise Me</button>

        </form>
    )
}

export default MemeForm