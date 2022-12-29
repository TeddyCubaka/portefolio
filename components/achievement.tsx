import axios from "axios";
import { useEffect, useState } from "react";

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

interface GetLanguagesProps {
	url: string;
	defaultLanguage: string;
}

function GetLanguages({ url, defaultLanguage }: GetLanguagesProps) {
	const [languages, setLanguages] = useState<string>(defaultLanguage);
	axios({
		method: "get",
		url: url,
		headers: {
			Authorization:
				"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",
		},
	})
		.then((data) => {
			let lang: string = "";
			Object.keys(data.data).map((language) => {
				lang += language + " ";
			});
			setLanguages(lang);
		})
		.catch((err) => setLanguages(defaultLanguage));

	return <span> {languages} </span>;
}

export default function Achievement() {
	const [repos, setRepos] = useState<LocalProps[]>([]);
	const [repoLink, setRepoLink] = useState<string>("#");

	useEffect(() => {
		axios({
			method: "get",
			url: "https://api.github.com/users/TeddyCubaka/repos",
			headers: {
				Authorization:
					"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",
			},
		})
			.then((response) => {
				let repos: LocalProps[] = [];
				response.data.map((data: any) => {
					repos.push({
						name: data.name,
						created_at: data.created_at,
						description: data.description,
						full_name: data.full_name,
						id: data.id,
						language: data.language,
						pushed_at: data.pushed_at,
						html_url: data.html_url,
						languages_url: data.languages_url,
					});
				});
				repos = repos.filter(
					(repo) => repo.description !== null && repo.language !== null
				);
				setRepos(repos);
			})
			.catch((error) => console.log(error));
	}, [repos.length]);

	return (
		<section id="achievements">
			<h2>Qu`apos`a déjà fait Teddy ?</h2>
			<div className="achievement_block">
				{repos.length === 0
					? "Nous appellons des données vers Github"
					: repos.map((repo) =>
							repo.description !== null ? (
								<div key={repo.id} className="repo_card">
									<div className="strong">
										<a
											href={repoLink}
											target="_blank"
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
											<b>languages : </b>{" "}
											<GetLanguages
												url={repo.languages_url}
												defaultLanguage={repo.language}
											/>
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
