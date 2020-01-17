import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import axios from 'axios'

const Home: NextPage = () => {

    const [links, setLinks] = useState([] as string[])

    useEffect(() => {
        axios.get('https://api.fantus.studio/directus/items/mixes?status=published')
            .then(({ data }) => {
                setLinks(data.data.map((entry: any) => entry.link))
            })
    }, [])

    return <div className='sets'>
        <h1 className='ma0'>sets</h1>
        <p>
            collection of some sets made here and there.
        </p>
        <ul>
            {links.map(link => (
                <li key={link}>
                    <iframe width="100%" height="120" src={link} />
                </li>
            ))}
        </ul>
    </div>
}

export default Home