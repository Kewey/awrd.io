import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='relative bg-gray-900 text-white'>
			<Head>
				<title>Make your users feel legendary | AWRD.io</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<header className='flex justify-between items-center absolute top-4 right-8 left-8'>
					<nav className='flex items-center'>
						<Link href='#'>
							<a className='flex items-center mr-8'>
								<Image
									src='/Logo_AWRD_color.svg'
									alt='Back to home'
                  height="64"
                  width="48"
								/>
								<p className="ml-2">AWRD.io</p>
							</a>
						</Link>
						<div className='relative'>
							<button className='p-4 text-white group rounded-md inline-flex items-center text-base font-medium hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-600'>
								<span>Features</span>
								<svg
									class='text-white ml-2 h-5 w-5 group-hover:text-white'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='true'
								>
									<path
										fill-rule='evenodd'
										d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
										clip-rule='evenodd'
									/>
								</svg>
							</button>
							<div class='absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
								<div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
									<div class='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
										<Link href='#'>
											<a class='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
												<svg
													class='flex-shrink-0 h-6 w-6 text-skin-base'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													aria-hidden='true'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
													/>
												</svg>
												<div class='ml-4'>
													<p class='text-base font-medium text-gray-900'>
														Analytics
													</p>
													<p class='mt-1 text-sm text-gray-500'>
														Get a better understanding of where your traffic is
														coming from.
													</p>
												</div>
											</a>
										</Link>
									</div>
								</div>
							</div>
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
				<div className='container h-screen flex items-center'>
					<div className='2xl:w-2/3 w-4/5'>
						<h1 className='md:text-8xl sm:text-6xl text-5xl text-white font-bold mb-10'>
							Make your users
							<br /> feel <span className='text-skin-base'>legendary</span>.
						</h1>
						<p className='text-skin-base- text-lg mb-10'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
							dolores id quisquam delectus rerum, neque quo non possimus! Ad
							incidunt repudiandae placeat sapiente eum magni fugit harum
							excepturi nostrum? Debitis.
						</p>
						<Link href='#'>
							<a className='bg-skin-fill text-skin-inverted rounded-md py-2 px-3 focus:ring-2 focus:ring-offset-purple-600 focus:ring-purple-400'>
								Get started
							</a>
						</Link>
					</div>
					<div></div>
				</div>
			</main>

			<footer className='flex items-center justify-center w-full h-24 border-t'></footer>
		</div>
	)
}
