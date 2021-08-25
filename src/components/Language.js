import { useState } from "react";
import { useStoreContext } from "./Store";
import Dropdown from "./Dropdown";
import Button from "./Button";
import Icon from "./Icon";

function Language() {
	var {
		setMenuOpen,
		language,
		setLanguage,
		languages,
		Translate,
		translate,
		breakpointSmall
	} = useStoreContext();
	var [languageOpen, setLanguageOpen] = useState(false);

	function languageOpenHandler() {
		!breakpointSmall && setMenuOpen(false);
		setLanguageOpen(prev => !prev);
	}

	function languageClickHandler(lang) {
		setLanguage(lang);
		setLanguageOpen(false);
	}

	return (
		<Dropdown open={languageOpen} onChange={setLanguageOpen} onOpen={setLanguageOpen}>
			<Button
				className="Topbar__iconType"
				variation="icon"
				onClick={languageOpenHandler}
				aria-label={translate("aria-language")}
			>
				<Icon name={languages.find(lang => lang.code === language).icon} />
				<Icon.Cog className="Topbar__iconAbsolute" />
			</Button>
			<Dropdown.List
				style={{ minWidth: "200px", width: "200px", maxWidth: "200px" }}
			>
				<Dropdown.List.Header>
					<h3 style={{ margin: "0" }}>
						<Translate id="language" />
					</h3>
					<Dropdown.List.Item index={0}>
						<Button variation="icon" onClick={() => setLanguageOpen(false)} tabIndex="-1">
							<Icon.Close style={{ fill: "var(--primary-light)" }} />
						</Button>
					</Dropdown.List.Item>
				</Dropdown.List.Header>
				<Dropdown.List.Group>
					{languages.map((lang, index) => (
						<Dropdown.List.Item key={lang.code} index={index + 1}>
							<Button
								style={{ width: "100%" }}
								variation="mix"
								onClick={() => languageClickHandler(lang.code)}
								tabIndex="-1"
							>
								{lang.full}
								<Icon name={lang.icon} />
							</Button>
						</Dropdown.List.Item>
					))}
				</Dropdown.List.Group>
			</Dropdown.List>
		</Dropdown>
	);
}

export default Language;
