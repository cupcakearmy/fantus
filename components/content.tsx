import React from 'react'

import '../styles/content.styl'

const Content: React.FC = ({ children }) => {
    return <div className='container'>
        {children}
    </div>
}

export default Content