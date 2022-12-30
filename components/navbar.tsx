import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsTelephone, BsCheckCircleFill } from "react-icons/bs";
import { BiMenu, BiCaretRight } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

interface CopyType {
	mail: boolean;
	phone: boolean;
}

const Media = () => {
	const [buttonClass, setButtonClass] = useState("navigations_mobile");
	const [copy, setCopy] = useState<CopyType>({
		mail: false,
		phone: false,
	});

	return (
		<nav className={buttonClass}>
			<div
				onClick={() => {
					if (buttonClass === "navigations_mobile") {
						setButtonClass(buttonClass + " " + "navigations_mobile_focus");
					}
				}}>
				<div>
					<BiMenu size="40" />
				</div>
				<p onClick={() => setButtonClass("navigations_mobile")}></p>
				<div className="sidebar">
					<div
						className="menu_closer"
						onClick={() => setButtonClass("navigations_mobile")}>
						{" "}
						<TfiClose size="25" />{" "}
					</div>
					<a
						href="#about"
						className="navigations_contents"
						onClick={() => setButtonClass("navigations_mobile")}>
						A propos
					</a>
					<a
						href="#achievements"
						className="navigations_contents"
						onClick={() => setButtonClass("navigations_mobile")}>
						Réalisations
					</a>
					<a
						href="#career"
						className="navigations_contents"
						onClick={() => setButtonClass("navigations_mobile")}>
						parcours
					</a>
					<a
						href="#skills"
						className="navigations_contents"
						onClick={() => setButtonClass("navigations_mobile")}>
						Compétences
					</a>
					<div
						className="navigations_contents"
						onClick={() => {
							navigator.clipboard.writeText("+243 995 867 384");
						}}>
						+243 995 867 384{" "}
						<button
							onClick={() => {
								navigator.clipboard.writeText("teddycubaka96@gmail.com");
								setCopy({ ...copy, phone: true });
								setTimeout(() => setCopy({ ...copy, phone: false }), 2000);
							}}>
							{copy.phone ? <BsCheckCircleFill /> : <FiCopy />}
						</button>
					</div>
					<div className="navigations_contents">
						teddycubaka96@gmail.com{" "}
						<button
							onClick={() => {
								navigator.clipboard.writeText("teddycubaka96@gmail.com");
								setCopy({ ...copy, mail: true });
								setTimeout(() => setCopy({ ...copy, mail: false }), 2000);
							}}>
							{copy.mail ? <BsCheckCircleFill /> : <FiCopy />}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default function Navbar() {
	const router = useRouter();

	return (
		<div className="navbar">
			<h1 onClick={() => console.log(window.matchMedia("(max-width : 800px)"))}>
				Teddy Cubaka
			</h1>
			<nav className="navigations">
				<a href="#about">A propos</a>
				<a href="#achievements">Réalisations</a>
				<a href="#career">parcours</a>
				<a href="#skills">Compétences</a>
				<a href="#comments">commentaires</a>
				<button>
					<BsTelephone size="34px" />
				</button>
			</nav>
			<Media />
		</div>
	);
}
