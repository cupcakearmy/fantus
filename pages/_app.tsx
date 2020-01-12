import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import getConfig from 'next/config'

import 'tachyons/css/tachyons.min.css'
import '../styles/app.styl'
import Menu from '../screens/menu'
import Content from '../components/content'

const Background = dynamic(() => import('../components/background'), { ssr: false })
const { RECAPTCHA_CLIENT } = getConfig().publicRuntimeConfig

export default class extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <React.Fragment>
                <Head>
                    <title>fantus</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap" rel="stylesheet" />
                    <script src={'https://www.google.com/recaptcha/api.js?render=' + RECAPTCHA_CLIENT}></script>
                </Head>
                <Menu />
                <Background />
                <Content>
                    <Component {...pageProps} />
                </Content>
            </React.Fragment>
        )
    }
}