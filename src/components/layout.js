import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Layout({children}) {
	return (
		<div>
			<header>
				<Link href="/">
					<table>
						<tbody>
							<tr>
								<td><Image src="AOT.svg" alt="Academy of Technology"  height="80" width="80"></Image></td>
								<td>
									<h1>Academy of Technology</h1>
									<p>translate your vision into reality</p>
								</td>
							</tr>
						</tbody>
					</table>
				</Link>
				<nav>
					<Link href="/admission">Admission</Link>
					<Link href="/downloads">Downloads</Link>
					<Link href="/events">Events</Link>
					<Link href="/events">Infrastructure</Link>
					<Link href="/jobs">Jobs</Link>
					<Link href="/rules">Rules</Link>
					<Link href="/videos">Videos</Link>
					<Link href="/contacts">Contact Us</Link>
				</nav>
				<button>Log in</button>
			</header>
			<main>
				{children}
			</main>
			<footer>
				<p>Copyright © 2008-2025 Academy of Technology. All rights reserved.</p>
			</footer>
		</div>
	)
}