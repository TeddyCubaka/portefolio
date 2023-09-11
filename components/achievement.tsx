import achievements from "../datas/realizations.json";
import AchievementCard from "./achievementCard";

export default function Achievement() {
	return (
		<section id="achievements">
			<h2 className="font-bold text-3xl mb-5 text-[#123853]">Qu&#39;a déjà fait Teddy ?</h2>
			<div className="grid md:grid-cols-3 gap-5">
				{achievements.map((real) => (
					<AchievementCard
						achievement={real}
						key={real.name + real.description}
					/>
				))}
			</div>
		</section>
	);
}
