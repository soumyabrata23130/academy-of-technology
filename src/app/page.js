import React from "react"
import Image from "next/image"

export default function Home() {
	return (
		<div>
			<Image src="/aotbanner.jpg" alt="Academy of Technology" width="660" height="330"></Image>
			<h2>About</h2>
			<p>The Academy of Technology (AOT), located amidst the beautiful surroundings of Adisaptagram, has been a beacon of educational excellence since its founding in 2003. It is one of the most acclaimed self-financed engineering colleges in West Bengal. More than just an educational institution, AOT is a symbol of ingenuity and dedication, weaving a lovely mix of technology and ethics.</p>
			<p>It is founded by the visionary Jagannath Banerjee, an alumnus of IIT Kharagpur and IIM Calcutta, with the objective of instituting academic excellence and a spirit of enquiry among young minds. He was also the head of the Ananda Educational Development and Charitable Organisation (AEDCO), a trust known for its deep sense of social commitment and dedicated to the promotion of education by inculcating appropriate ethics and attitude. Several renowned educationists, prominent alumni from IITs & IIMs and experts from the industry have been at the helm of the college from its very inception. During its early years, Prof. G S Sanyal&mdash;distinguished academician, outstanding teacher and ex-Director of IIT Kharagpur&mdash;was the Chairman of the Advisory Committee of the college.</p>
			<p>In a metamorphosis of over 20 years, our college has been reinventing itself to embrace the boundless horizons of engineering and technology. Our journey is not merely about imparting knowledge; it&apos;s a transformative experience that encourages every student to think differently and explore new possibilities.</p>
			<p>Situated on the side of the Grand Trunk Road in Adisaptagram, Hooghly, our campus is not just a physical space but a nurturing environment where academic integrity meets the vibrant spirit of innovation. AOT is not just a college; it&apos;s a preferred career destination for meritorious students, known for its academic standards and compelling campus placements.</p>
			<p>We have around 2,600 undergraduate engineering students of Computer Science & Engineering (CSE), Computer Science & Business System (CSBS), Mechanical Engineering (ME), Electronics & Communication Engineering (ECE), Electrical Engineering (EE) and Electrical & Electronics Engineering (EEE). We have a fully functional AICTE Institute Innovation Cell at our college and currently several start-ups are being seeded under it. We aim at widening the scope of our activities and intend to submit projects in other areas as well as work further on our Entrepreneurship Cell.</p>
			<h3>Vision and Mission</h3>
			<ul>
				<li><b>Vision:</b> Aspires to be a pre-eminent deemed university of national standing in education and innovation</li>
				<li><b>Mission:</b> We are committed to maintain an academic environment where teaching-learning is enjoyable, where enough space is there for independent thinking and creative urge, where scope is there to cultivate and sustain the vitality of campus social and cultural life with honour.</li>
			</ul>
			<h3>Recognition</h3>
			<p>All academic programmes are approved by AICTE, recognized by Department of Higher Education, Government of West Bengal and affiliated to Maulana Abul Kalam Azad University of Technology, West Bengal (formerly West Bengal University of Technology).</p>
			<p>In 2020, the Academy of Technology has received the Certificate of Appreciation from Tata Consultancy Services (TCS) in recognition of an exemplary partnership and collaboration&mdash;and only very few institutes in India have achieved so.</p>
		</div>
	)
}

/* import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<ol>
					<li>
						Get started by editing <code>src/app/page.js</code>.
					</li>
					<li>Save and see your changes instantly.</li>
				</ol>

				<div className={styles.ctas}>
					<a
						className={styles.primary}
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={styles.logo}
							src="/vercel.svg"
							alt="Vercel logomark"
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.secondary}
					>
						Read our docs
					</a>
				</div>
			</main>
			<footer className={styles.footer}>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
} */