import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Layout({children}) {
	let date=new Date()
	let year=date.getUTCFullYear()%100
	let fiesta=`https://www.aotfiesta${year}.tech/`
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
									<p style={{ textAlign: "center" }}>translate your vision into reality</p>
								</td>
							</tr>
						</tbody>
					</table>
				</Link>
				<nav>
					<Link className="header-links" href="/admission">Admission</Link>
					<Link className="header-links" href="/downloads">Downloads</Link>
					<div className="events">
						<div className="header-links">Events</div>
						<ul>
							<li><Link href="/arcadia">Arcadia</Link></li>
							<li><Link href="https://c3it2024.aot.edu.in/">C3IT 2024</Link></li>
							<li><Link href={fiesta}>Techfiesta 20{year}</Link></li>
						</ul>
					</div>
					<Link className="header-links" href="/infrastructure">Infrastructure</Link>
					<Link className="header-links" href="/jobs">Jobs</Link>
					<Link className="header-links" href="/rules">Rules</Link>
					<Link className="header-links" href="/videos">Videos</Link>
					<Link className="header-links" href="/contacts">Contact Us</Link>
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