import { useStoreContext } from "./Store";
import Button from "./Button";
import Icon from "./Icon";
import "./Profile.scss";

function Profile() {
	var { translate, Translate, menuOpen } = useStoreContext();

	return (
		<article className="Profile">
			<h3>Sune Seifert</h3>
			<img
				src="/images/profil.jpg"
				title={translate("profile-image")}
				alt={translate("profile-image")}
			/>
			<p>
				<Translate id="profile-teaser" />
			</p>
			<div className="Profile__social">
				<Button href="https://linkedin.com/in/sune-seifert" variation="mix" tabIndex={menuOpen ? null : "-1"}>
					<Icon.Linkedin className="Profile__icon Profile__icon--linkedin" />
					LinkedIn
				</Button>
				<Button href="https://github.com/bqardi" variation="mix" tabIndex={menuOpen ? null : "-1"}>
					<Icon.Github className="Profile__icon Profile__icon--github" />
					GitHub
				</Button>
			</div>
		</article>
	);
}

export default Profile;
