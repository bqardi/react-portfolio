import Button from "./Button";
import "./OnlineProfiles.scss";

function OnlineProfiles() {
	return (
		<article className="OnlineProfiles">
			<ul>
				<li>
					Smartr:&nbsp;
					<Button href="https://www.smartr.me/public/profiles/sune.seifert">
						https://www.smartr.me/public/profiles/sune.seifert
					</Button>
				</li>
				<li>
					iHeadHunt:&nbsp;
					<Button href="https://jobs.iheadhunt.dk/">
						https://jobs.iheadhunt.dk/
					</Button>
				</li>
				<li>
					Bloom:&nbsp;
					<Button href="https://bloom.dk/">
						https://bloom.dk/
					</Button>
				</li>
			</ul>
		</article>
	);
}

export default OnlineProfiles;
