import React from 'react'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {Gallery, About, Footer} from '../components'

const style = {color: 'black'}

export const links = [
    {
        id: 1,
        text: 'About',
        page: <About />
    },
    {
        id: 3,
        text: 'Galleray',
        page: <Gallery />
    },
    {
        id: 4,
        text: 'Footer',
        // page: <Footer />
    }
]




export const socials = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook size={20} style={style} />
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter size={20} style={style} />
    }
];

export const images = [
    {
        url: './RvBackground'
    }
]
