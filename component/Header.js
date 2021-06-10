import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex justify-between items-center absolute top-4 right-8 left-8'>
			<nav className='flex items-center'>
				<Link href='#'>
					<a className='flex items-center mr-8'>
						<Image
							src='/Logo_AWRD_color.svg'
							alt='Back to home'
							height='64'
							width='48'
						/>
						<p className='ml-2 text-2xl font-bold text-skin-base'>AWRD.io</p>
					</a>
				</Link>
				<div className='relative'>
					<button className='p-4 text-white group rounded-md inline-flex items-center text-base font-medium hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-600'>
						<span>Features</span>
						<svg
							className='text-white ml-2 h-5 w-5 group-hover:text-white'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<Link href='#'>
					<a className='p-4 text-white group rounded-md inline-flex items-center text-base font-medium hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-600'>
						Pricing
					</a>
				</Link>
				<Link href='#'>
					<a className='p-4 text-white group rounded-md inline-flex items-center text-base font-medium hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-600'>
						Contact
					</a>
				</Link>
			</nav>
			<Link href='#'>
				<a className='bg-skin-fill text-skin-inverted rounded-md py-2 px-3 focus:ring-2 focus:ring-offset-purple-600 focus:ring-purple-400'>
					Get Started
				</a>
			</Link>
		</header>
	)
}
