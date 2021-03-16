import React from 'react'
import { Loader } from "react-bulma-components";

const Loading = () => {
    return (
        <div className="columns is-centered">
            <Loader className='has-text-success' style={{
                width: 100,
                border: '2px solid blue',
                borderTopColor: 'transparent',
                borderRightColor: 'transparent',
                height: 100}}/>
        </div>
    )
}

export default Loading
