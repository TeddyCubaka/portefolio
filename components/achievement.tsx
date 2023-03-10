import { Octokit } from "@octokit/rest";
import axios from "axios";
import { useEffect, useState } from "react";
import repositories from "../datas/repos.json";

export interface LocalProps {
	name: string;
	created_at: string;
	description: string;
	full_name: string;
	id: number;
	language: string;
	pushed_at: Date;
	html_url: string;
	languages_url: string;
}
export interface LocalLanguageType {
	languages: string;
	index: number;
}

interface HandelDescriptionLengthProps {
	string: string;
}

function HandelDescriptionLength({ string }: HandelDescriptionLengthProps) {
	const [buttonState, setButtonState] = useState(false);

	return string.length < 45 ? (
		<span>{string}</span>
	) : buttonState === false ? (
		<span className="sapce_between_row max_width">
			{string.substring(0, 40) + "..."}
			<button onClick={() => setButtonState(true)}>Plus</button>
		</span>
	) : (
		<span className="sapce_between_row max_width">
			{" "}
			{string} <button onClick={() => setButtonState(false)}>cacher</button>{" "}
		</span>
	);
}

export default function Achievement() {
	const [repoLink, setRepoLink] = useState<string>("#");

	return (
		<section id="achievements">
			<h2>Qu&#39;a déjà fait Teddy ?</h2>
			<div className="achievement_block">
				{repositories.length === 0
					? "Nous appellons des données vers Github"
					: repositories.map((repo) =>
							repo.description !== null ? (
								<div key={repo.id} className="repo_card">
									<div className="strong">
										<a
											href={repoLink}
											target="_blank"
											rel="noreferrer"
											onClick={() => {
												setRepoLink("");
												if (
													prompt(
														"Vous serez redirigé vers le repo github de Teddy" +
															repo.html_url,
														"oui"
													)
												) {
													setRepoLink(repo.html_url);
												}
											}}>
											{" "}
											{repo.name}{" "}
										</a>
									</div>
									<div>
										<HandelDescriptionLength string={repo.description} />
									</div>
									<div className="sub_info_repo_card small">
										<div>
											{" "}
											<b>languages : </b> {repo.language ? repo.language : "_"}
										</div>
										<div>
											crée le {new Date(repo.created_at).toLocaleDateString()}{" "}
										</div>
									</div>
								</div>
							) : null
					  )}
			</div>
		</section>
	);
}
