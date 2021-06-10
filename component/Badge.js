import React, { useEffect, useState } from 'react'

export default function Badge({ badgeURI }) {
	const [badge, setBadge] = useState(null)

	useEffect(() => {
		fetch('http://127.0.0.1:8000' + badgeURI)
			.then((res) => res.json())
			.then((res) => {
				setBadge(res)
			})
	}, [])

	return (
		<tr key={badge?.name + 'board'}>
			<td>
				<div className='px-6 py-4 whitespace-nowrap'>
					<p>{badge?.name}</p>
				</div>
			</td>
			<td>
				<p>{badge?.createdAt}</p>
			</td>
			<td>
				<p>{badge?.player}</p>
			</td>
		</tr>
	)
}
