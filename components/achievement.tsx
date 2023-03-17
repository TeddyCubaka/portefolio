import achievements from "../datas/realizations.json";
import AchievementCard from "./achievementCard";

export default function Achievement() {
	return (
		<section id="achievements">
			<h2>Qu&#39;a déjà fait Teddy ?</h2>
			<div className="achievement_block">
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
