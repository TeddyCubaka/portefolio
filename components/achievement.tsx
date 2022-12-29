import { Octokit } from "@octokit/rest";
import axios from "axios";
import { useEffect, useState } from "react";
import AchievementCard from "./achievementCard";

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

export default function Achievement() {
	const [repos, setRepos] = useState<LocalProps[]>([]);
	const [trigger, setTrigger] = useState<number>(0);
	let [newRepos, setNewRepos] = useState<LocalProps[]>([]);

	useEffect(() => {
		axios("https://api.github.com/users/TeddyCubaka/repos")
			.then((response) => {
				let repos: LocalProps[] = [];
				setTrigger(1);
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
				setRepos(repos);
			})
			.catch((error) => console.log(error));
	}, [repos]);

	useEffect(() => {
		if (repos.length > 0) {
			repos.map((repo) => {
				axios(repo.languages_url)
					.then((data) => {
						let lang: string = "";
						Object.keys(data.data).map((language) => {
							repo.language = lang;
							lang += language + " ";
						});
						setNewRepos((prev) => [...prev, repo]);
						setRepos(newRepos);
					})
					.catch((err) => console.log(err));
			});
		}
	}, [trigger]);

	return (
		<section id="achievements">
			<h2>Qu'a déjà fait Teddy ?</h2>
			{/* <AchievementCard /> */}
			<div>
				{repos.length === 0
					? "Nous appellons des données vers Github"
					: repos.map((repo, index) => (
							<ul key={repo.id} className="repo_card">
								<div className="strong">
									<a href={repo.html_url}> {repo.name} </a>
								</div>
								<div> {repo.description} </div>
								<div className="sub_info_repo_card small">
									<div>
										{" "}
										<b>language</b> {repo.language}
									</div>
									<div> {repo.created_at} </div>
								</div>
							</ul>
					  ))}
			</div>
		</section>
	);
}
