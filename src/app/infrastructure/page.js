import React from "react"
import Image from "next/image"
import "./styles.css"

export default function Infrastructure() {
	return (
		<div>
			<h2>Infrastructure</h2>
			<p>The AOT campus consists of following buildings:</p>
			<ul>
				<li>A Block</li>
				<li>B Block</li>
				<li>D Block</li>
				<li>E Block</li>
				<li>Administrative Building</li>
				<li>Central Library</li>
				<li>College Canteen (Amantran)</li>
				<li>Hostels</li>
			</ul>
			<Image src="/ablock.jpg" alt="A Block" width="440" height="220" style={{ float: "right" }}></Image>
			<h3>A Block</h3>
			<p>The A Block hosts two college departments:</p>
			<ul>
				<li>Engineering Science & Humanities (ESH)</li>
				<li>Master of Computer Application (MCA)</li>
			</ul>
			<p>The building contains the following rooms by floor number:</p>
			<table>
				<thead>
					<tr>
						<th>Ground Floor</th>
						<th>First Floor</th>
						<th>Second Floor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<ul>
								<li>Auditorium</li>
								<li>ESH faculty rooms</li>
								<li>MCA classrooms</li>
								<li>MCA faculty rooms</li>
								<li>Office of the Principal</li>
								<li>Staff toilets (men&apos;s and women&apos;s)</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>1st year CSBS classroom</li>
								<li>1st year CSE1 classroom</li>
								<li>1st year CSE2 classroom</li>
								<li>1st year CSE3 classroom</li>
								<li>1st year EEE classroom</li>
								<li>1st year ME classroom</li>
								<li>Balcony</li>
								<li>Office of the Head of Department (HoD), ESH</li>
								<li>Physics Lab</li>
								<li>Toilets (men&apos;s and women&apos;s)</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>1st year ECE1 classrooms</li>
								<li>1st year ECE2 classrooms</li>
								<li>1st year ECE3 classrooms</li>
								<li>1st year EE classroom</li>
								<li>Activity Centre</li>
								<li>Chemistry Lab</li>
								<li>Office of chemistry professors</li>
								<li>Toilets (men&apos;s and women&apos;s)</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
			<Image src="/bblock.jpg" alt="B Block" width="440" height="220" style={{ float: "right" }}></Image>
			<h3>B Block</h3>
			<p>The B Block hosts two college departments:</p>
			<ul>
				<li>Electrical Engineering (EE)</li>
				<li>Electrical & Electronics Engineering (EEE)</li>
			</ul>
			<p>The building contains the following rooms by floor number:</p>
			<table>
				<thead>
					<tr>
						<th>Ground Floor</th>
						<th>First Floor</th>
						<th>Second Floor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<ul>
								<li>2nd year EE classroom</li>
								<li>2nd year EEE classroom</li>
								<li>Admission Office</li>
								<li>Auditorium</li>
								<li>Electrical Machines Lab</li>
								<li>Men&apos;s toilet</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>3rd year EE classroom</li>
								<li>3rd year EEE classroom</li>
								<li>Basic Electrical Engineering Lab</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>4th year EE classroom</li>
								<li>Other EE labs</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
			<Image src="/dblock.jpg" alt="B Block" width="440" height="220" style={{ float: "right" }}></Image>
			<h3>D Block</h3>
			<p>The D Block hosts two college departments:</p>
			<ul>
				<li>Computer Science & Business System (CSBS)</li>
				<li>Computer Science & Engineering (CSE)</li>
				<li>Electrical & Electronics Engineering (EEE)</li>
			</ul>
			<div className="clear"></div>
			<p>The building contains the following rooms by floor number:</p>
			<table>
				<thead>
					<tr>
						<th>Ground Floor</th>
						<th>First Floor</th>
						<th>Second Floor</th>
						<th>Third Floor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<ul>
								<li>2nd year CSE1 classroom</li>
								<li>2nd year CSE2 classroom<br/>(Prasanta Mahalanabis Lecture Hall)</li>
								<li>Computer Labs 1-6</li>
								<li>Faculty room</li>
								<li>Main Auditorium</li>
								<li>Staff Quarter</li>
								<li>TCS iON Zone laboratory<br/>(Computer Centre)</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>2nd year CSBS classroom</li>
								<li>2nd year CSE3 classroom<br/>(Mother Teresa Lecture Hall)</li>
								<li>3rd year CSE1 classroom</li>
								<li>Computer Labs 7-12</li>
								<li>Faculty rooms</li>
								<li>Office of the Head of Department (HoD), CSE</li>
								<li>TCS iON Zone laboratory<br/>(CAD Lab)</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>3rd year CSBS classroom</li>
								<li>3rd year CSE2 classroom</li>
								<li>3rd year CSE3 classroom</li>
								<li>4th year EEE classroom</li>
								<li>Computer Laboratory 13</li>
								<li>Faculty rooms</li>
								<li>Office of the Head of Department (HoD), EEE</li>
								<li>TCS iON Zone laboratory</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>4th year CSBS classroom</li>
								<li>4th year CSE1 classroom<br/>(Ramanujam Lecture Hall)</li>
								<li>4th year CSE2 classroom</li>
								<li>4th year CSE3 classroom</li>
								<li>Computer Laboratory 14</li>
								<li>Faculty rooms</li>
								<li>TCS iON Zone laboratory</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
			<Image src="/eblock.jpg" alt="B Block" width="440" height="220" style={{ float: "right" }}></Image>
			<h3>E Block</h3>
			<p>The E Block hosts two college departments:</p>
			<ul>
				<li>Electronics & Communication Engineering (ECE)</li>
				<li>Mechanical Engineering (ME)</li>
			</ul>
			<p>The building contains the following rooms by floor number:</p>
			<table>
				<thead>
					<tr>
						<th>Ground Floor</th>
						<th>First Floor</th>
						<th>Second Floor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<ul>
								<li>2nd year ME classroom</li>
								<li>3rd year ME classroom</li>
								<li>4th year ME classroom</li>
								<li>Mechanical Workshop I</li>
								<li>Mechanical Workshop II</li>
								<li>Other ME labs</li>
								<li>Staff toilet</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>2nd year ECE1 classroom</li>
								<li>2nd year ECE2 classroom</li>
								<li>2nd year ECE3 classroom</li>
								<li>Analog Electronics Lab</li>
								<li>CAD Lab</li>
								<li>Computer Organization Lab</li>
								<li>Digital Electronics Lab</li>
								<li>Electrical Circuits Lab</li>
								<li>Office of the Head of Department (HoD), ME</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>3rd year ECE1 classroom</li>
								<li>3rd year ECE2 classroom</li>
								<li>3rd year ECE3 classroom</li>
								<li>4th year ECE1 classroom</li>
								<li>4th year ECE2 classroom</li>
								<li>4th year ECE3 classroom</li>
								<li>Engineering Drawing Lab</li>
								<li>Other ECE labs</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
			<Image src="/admin.jpg" alt="B Block" width="440" height="220" style={{ float: "right" }}></Image>
			<h3>Administrative Building</h3>
			<h3>Central Library</h3>
			<p>The Central Library is located between the A Block and the D Block. It contains the following services by floor number:</p>
			<table>
				<thead>
					<tr>
						<th>Ground Floor</th>
						<th>First Floor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<ul>
								<li>Book Bank Counter</li>
								<li>Book Requisition Counter</li>
								<li>General Book Counter</li>
								<li>Xerox Centre</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>Digital Library</li>
								<li>Reading Room</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
			<Image src="/canteen.jpg" alt="B Block" width="440" height="220" style={{ float: "right" }}></Image>
			<h3>College Canteen (Amantran)</h3>
			<p>A one-storey building serving different kinds of food and drink to students and faculty.</p>
			<h3>Hostels</h3>
			<p>The college campus has two hostels for student housing.</p>
			<ul>
				<li>Boys&apos; Hostel</li>
				<li>Girls&apos; Hostel</li>
			</ul>
			<h3>Playgrounds</h3>
			<p>The college campus has three playgrounds.</p>
			<ul>
				<li>Badminton Gound (between Boys&apos; Hostel and Girls&apos; Hostel)</li>
				<li>Basketball Ground (between B Block and E Block)</li>
				<li>Football Gound (between Administrative Building and Girls&apos; Hostel)</li>
			</ul>
			<h2>Video</h2>
		</div>
	)
}