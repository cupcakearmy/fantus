import React from 'react'
import getConfig from 'next/config'

const config = getConfig()

const Env = () => <div>
    {JSON.stringify(config)}
</div>

export default Env