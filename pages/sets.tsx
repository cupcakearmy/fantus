import React from 'react'

const Home = () => {
    return <div className='sets'>
        <h1 className='ma0'>sets</h1>
        <p>
            collection of some sets made here and there.
        </p>
        <ul>
            <li>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffantus%2Fmxs04-lounge%2F" />
            </li>
            <li>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffantus%2Fmxs03-techno%2F" />
            </li>
            <li>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffantus%2Fmxs02-techno%2F" />
            </li>
            <li>
                <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffantus%2Fmxs01-melodic-techno%2F" />
            </li>
        </ul>
    </div>
}

export default Home