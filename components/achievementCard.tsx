import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";

export default function AchievementCard({
	name,
	link,
	description,
	duration,
	image,
}: InferProps<typeof AchievementCard.propTypes>) {
	return (
		<div className="achievement_card">
			<div className="achievement_description">
				<a href={link} className="strong">
					{name}
				</a>
				<div>{description}</div>
				<sub className="blue_color">{duration}</sub>
			</div>
			<div className="achievement_img">
				<Image
					src={image}
					alt="Picture of the author"
					width="184"
					height="184"
				/>
			</div>
		</div>
	);
}

AchievementCard.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string.isRequired,
	description: PropTypes.string,
	duration: PropTypes.string,
	image: PropTypes.string.isRequired,
};
