import React from 'react'

import '../styles/content.styl'

const Content: React.FC = ({ children }) => {
    return <div className='container'>
        {/* <div className='content'> */}
        {children}
        {/* </div> */}
    </div>
}

export default Content