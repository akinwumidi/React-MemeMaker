import React from 'react'
import "./Loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";


const Loading = () => {
    return (
        <div className='Loading__container'>
            <FontAwesomeIcon
                icon={faSpinner}
                className="fa-pulse loadingIcon"
            />
            <h1>Aplication is Loading</h1>
            <p>Please Ensure your internet is turned on!!!</p>
        </div>
    )
}
export default Loading