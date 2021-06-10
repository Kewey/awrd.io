import Head from 'next/head'
import { useEffect, useState } from 'react'
import Badge from '../component/Badge'
import Header from '../component/Header'

export default function Home() {
	const [games, setGames] = useState(null)
	const [events, setEvents] = useState(null)
	const [players, setPlayers] = useState([])
	const [selectedGame, setSelectedGame] = useState(null)

	const [isLoading, setIsLoading] = useState(false)

	function updateData(id) {
		fetch('http://127.0.0.1:8000/api/games/' + id)
			.then((res) => res.json())
			.then((res) => setSelectedGame(res))
		fetch('http://127.0.0.1:8000/api/games/' + id + '/eventdefinitions')
			.then((res) => res.json())
			.then((res) => setEvents(res['hydra:member']))
		fetch('http://127.0.0.1:8000/api/games/' + id + '/players')
			.then((res) => res.json())
			.then((res) => setPlayers(res['hydra:member']))
	}

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/games')
			.then((res) => res.json())
			.then((res) => setGames(res['hydra:member']))
	}, [])

	const handleChange = (id) => {
		const gameID = id.target.value
		updateData(gameID)
	}

	const submitAction = (e) => {
		e.preventDefault()
		setIsLoading(true)
		const data = {
			game: '/api/games/' + e.target.game.value,
			identifier: e.target.event.value,
			player: e.target.player.value,
		}

		fetch('http://127.0.0.1:8000/api/events', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(() => {
			updateData(e.target.game.value)
			setIsLoading(false)
		})
	}

	return (
		<div className='relative bg-gray-900 text-white'>
			<Head>
				<title>Demo | AWRD.io</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Header />
				<div className='grid grid-cols-2 min-h-screen pt-24'>
					<div className='flex justify-center'>
						<div className='max-w-lg mx-auto mx-4 py-3'>
							<h1 className='mb-4 text-3xl font-extrabold text-gray-100'>
								Begin your first story
							</h1>
							<p className='text-white text-opacity-75'>
								Select a game and a event, trigger the action, then look the
								scoreboard.
							</p>
							<form className='mt-6' onSubmit={submitAction}>
								<label htmlFor='game' className='block mb-1 font-bold'>
									Game
								</label>
								<select
									onChange={handleChange}
									name='game'
									id='game'
									className='mb-4 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm pr-4 pl-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500'
								>
									{games?.map((game) => (
										<option value={game?.id} key={game?.id}>
											{game?.name}
										</option>
									))}
								</select>

								<label htmlFor='event' className='block mb-1 font-bold'>
									Event
								</label>
								<select
									name='event'
									id='event'
									className='mb-4 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm pr-4 pl-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500'
								>
									{events?.map((event) => (
										<option value={event?.eventIdentifier} key={event?.id}>
											{event?.description}
										</option>
									))}
								</select>

								<label htmlFor='player' className='block mb-1 font-bold'>
									Player
								</label>
								<select
									name='player'
									id='player'
									className='mb-4 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm pr-4 pl-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500'
								>
									{players?.map((player) => (
										<option value={player?.identifier} key={player?.id}>
											{player?.identifier}
										</option>
									))}
								</select>
								<button
									type='submit'
									className='rounded py-2 px-4 bg-skin-fill mt-4 disabled:opacity-70 hover:bg-skin-button-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-500'
									disabled={isLoading}
								>
									Trigger action
								</button>
							</form>
						</div>
					</div>
					<div className='bg-white text-gray-900'>
						<div className='max-w-lg mx-auto py-3 h-[50vh]'>
							<h2 className='font-bold text-2xl'>Scoreboard</h2>
							<h3 className='font-semibold text-lg text-gray-700'>
								For {selectedGame?.name || 'unknow'}
							</h3>
							<table className='min-w-full divide-y divide-gray-200 mt-4'>
								<thead>
									<tr>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Name
										</th>
										<th
											scope='col'
											class='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Score
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{selectedGame?.scoreBoard?.map((score) => (
										<tr key={score.name + 'board'}>
											<td>
												<div className='px-6 py-4 whitespace-nowrap'>
													<p>{score.name}</p>
												</div>
											</td>
											<td>
												<p>{score.score}</p>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className='max-w-lg mx-auto py-3 h-[50vh]'>
							<h2 className='font-bold text-2xl'>
								Player : {players[0]?.identifier}
							</h2>
							<table className='min-w-full divide-y divide-gray-200 mt-4'>
								<thead>
									<tr>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Badge
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											createdAt
										</th>
										<th
											scope='col'
											className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
										>
											Player uri
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{players[0]?.badges.map((badge) => (
										<Badge key={badge} badgeURI={badge} />
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
