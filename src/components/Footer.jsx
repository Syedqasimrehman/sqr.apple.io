import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <div>
                <p className='font-semibold text-gray text-xs'>
                    More Ways to shop {' '}
                    <span className='underline text-blue'>
                        Find an Apple Store {' '}
                    </span>
                    or {' '}
                    near you.
                </p>
                <p className='font-semibold text-gray text-xs'>
                    Or call 000800-0500-1977
                </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full' />
            <div className="flex flex-col justify-between md:flex-row md:items-center">
                <p className="font-semibold text-gray text-xs">
                Copyright © 2024 Apple Inc. All rights reserved.
                </p>
                <div className="flex">
                    {footerLinks.map((link ,i) => (
                        <p key={link} className='font0semibold text-gray text-xs'>
                            {link}{' '}
                            {i !== footerLinks.length -1 && (
                                <span className='mx-2'> | </span>
                            )}
                        </p>
                    ) )}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
