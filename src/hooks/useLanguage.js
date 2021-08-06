import { Fragment } from "react";
import helper from "./helper";
import useLocalStorage from "./useLocalStorage";
import useLorem from "./useLorem";
import Code from "../components/Code";

const translations = {
	"languages": [
		{
			code: "dan",
			full: "Dansk",
			icon: "DanishFlag"
		},
		{
			code: "eng",
			full: "English",
			icon: "BritishFlag"
		},
		{
			code: "lorem",
			full: "Lorem ipsum",
			icon: "LoremFlag"
		}
	],
	"missing": {
		dan: "Oversæt",
		eng: "Translate:",
		lorem: "Lorem ipsum"
	},
	"landing-title": {
		dan: "På udkig efter en Web udvikler?",
		eng: "Looking for a Web developer?"
	},
	"landing-text": {
		dan:
			"Søger jeres virksomhed en passioneret web udvikler/programmør med et solidt kendskab til [languages].",
		eng:
			"Is your company looking for a passionate web developer/programmer with a solid amount of experience in [languages]."
	},
	"landing-skill": {
		dan: "Så er det lige mig I mangler!",
		eng: "Then I am the one you are looking for!"
	},
	"landing-work": { dan: "Projekter", eng: "Projects" },
	"landing-contact": { dan: "Kontakt", eng: "Contact" },
	"landing-cv": { dan: "CV", eng: "CV" },
	"landing-cta": { dan: "Se mine projekter", eng: "View my projects" },
	"landing-cta-secondary": { dan: "Mit CV", eng: "My CV" },
	"landing-theme-orange": {
		dan: "Skift tema farve til orange",
		eng: "Change to orange theme color"
	},
	"landing-theme-blue": {
		dan: "Skift tema farve til blå",
		eng: "Change to blue theme color"
	},
	"landing-theme-purple": {
		dan: "Skift tema farve til lilla",
		eng: "Change to purple theme color"
	},
	"landing-theme-red": {
		dan: "Skift tema farve til rød",
		eng: "Change to red theme color"
	},
	"landing-theme-green": {
		dan: "Skift tema farve til grøn",
		eng: "Change to green theme color"
	},
	"landing-theme-cyan": {
		dan: "Skift tema farve til cyan",
		eng: "Change to cyan theme color"
	},

	"dashboard-contact": { dan: "Kontakt", eng: "Contact" },

	"dashboard": { dan: "Dashboard", eng: "Dashboard" },
	"work": { dan: "Projekter", eng: "Projects" },
	"language": { dan: "Sprog", eng: "Language" },
	"cv": { dan: "CV", eng: "CV" },
	"my-best-work": { dan: "Mine bedste projekter", eng: "My best projects" },
	"birth-date": { dan: "15. oktober 1976", eng: "October 15. 1976" },
	"drivers-license": {
		dan: "Kørekort type B - egen bil",
		eng: "Drivers license type B - Own car"
	},
	"current-occupation": {
		dan: "Uddannelse - Roskilde Teknisk Skole",
		eng: "Education - Roskilde Teknisk Skole"
	},
	"birth-date-title": { dan: "Fødselsdag:", eng: "Birth date:" },
	"current-occupation-title": {
		dan: "Nuværende beskæftigelse:",
		eng: "Current occupation:"
	},
	"expand": { dan: "udvid", eng: "expand" },
	"hide": { dan: "skjul", eng: "hide" },
	"a-little-about-me": { dan: "Lidt om mig:", eng: "About me:" },
	"and": { dan: "og", eng: "and" },

	"aria-menu": { dan: "Navigationsmenu", eng: "Navigation menu" },
	"aria-language": { dan: "Vælg sprog", eng: "Select language" },
	"aria-settings": { dan: "Indstillinger", eng: "Settings" },

	"about-image-alt": { dan: "Sådan ser jeg ud", eng: "This is how I look" },

	"profile-image": { dan: "Sådan ser jeg ud", eng: "This is how I look" },
	"profile-teaser": { dan: "Web udvikler", eng: "Web developer" },

	"experience": { dan: "Erfaring", eng: "Experience" },
	"experience-city": { dan: "by", eng: "city" },
	"experience-contact-link": { dan: "kontakt", eng: "contact" },

	"button-hire-me": { dan: "Ansæt mig", eng: "Hire me" },
	"button-hire-me-variable": {
		dan: "Ansæt [my-custom-variable]",
		eng: "Hire [my-custom-variable]"
	},
	"button-hire-me-contact": { dan: "Kontakt mig", eng: "Contact me" },

	"skills": { dan: "Faglige kompetencer:", eng: "Professional skills:" },
	"skills-languages": {
		dan: "Programmeringssprog:",
		eng: "Programming languages:"
	},
	"skills-tech": { dan: "Andre tech:", eng: "Other tech:" },
	"skills-other": {
		dan: "Relaterede programmer:",
		eng: "Related applications:"
	},
	"skills-fiddle": {
		dan: "Ting jeg har snuset til:",
		eng: "Things I have fiddlet with:"
	},

	"personal-skills": {
		dan: "Personlige kompetencer:",
		eng: "Personal skills:"
	},
	"personal-skills-01": { dan: "Detalje orienteret", eng: "Detail oriented" },
	"personal-skills-01-description": {
		dan:
			"Fokus, opmærksomhed og kvalitet er nøgleordene her. Jeg er fokuseret når jeg arbejder, jeg dobbelttjekker altid mit arbejde for at være sikker på at det lever op til mine kritiske standarder og så ved jeg at det er de små detaljer der gør et godt stykke arbejde, fantastisk.",
		eng:
			"Focus, attention and quality are the key-words here. I am focused when I work, I always doublecheck things I'm working on to make sure they live up to my critical standards and then I am well aware that it's the small details that make a decent job, great."
	},
	"personal-skills-02": { dan: "Struktureret", eng: "Structured" },
	"personal-skills-02-description": {
		dan:
			"Struktur er vigtigt, især ved større opgaver. Det handler om overblik. React har hjulpet mig meget til at bevare overblikket, da det er nemt at lave små kode-stykker (komponenter) og stykke dem sammen som et puslespil. Strukturelle- og organisatoriske evner er ikke noget jeg besidder fra naturens side, men da det er noget jeg altid gerne har ville have som egenskab, har jeg brugt mange år på at lære det og mener selv at jeg nu kan tillade mig at kalde mig en struktureret person.",
		eng:
			"Structure is important, especially on bigger projects. It's all about overview. React has helped me a lot to maintain this overview, since it is easy to make small code-fragments (components) and piece them together like a puzzle. Structurel- and organisatoric abilities are not something I possess from natures side, but since it is something I have always wanted as a skill, I have spent a lot of years to achieve this and now believe I can call myself a structured person."
	},
	"personal-skills-03": { dan: "Problem løser", eng: "Problem solver" },
	"personal-skills-03-description": {
		dan:
			"Da jeg er analytisk af natur, har en kreativ tankegang og er god til at skelne mellem fordele og ulemper ved forskellige løsninger til et problem gør det mig i stand til at løse forskellige problemer relativt nemt.",
		eng:
			"Since I am analytical in nature, is creative in the way I think and can differentiate between pros and cons in different solutions to a problem, it makes me capable of solving different problems with relative ease."
	},
	"personal-skills-04": { dan: "Omstillingsparat", eng: "Flexibilty skills" },
	"personal-skills-04-description": {
		dan:
			"Skift af fokus når et problem opstår og skal løses, mens overblikket bevares. Klar og villig til at tilpasse mig når resultater skal leveres selvom forventningerne ændres.",
		eng:
			"Shift of focus when a problem arises and must be solved, while still maintaining a bigger overview. Ready and willing to adapt to deliver results even if expectations are changed."
	},

	"resume": {
		dan: [
			"Når jeg vågner op om morgenen, foregår det med en positiv forventning til dagen, så jeg kan tilgå de forskellige ting jeg vil opnå med gejst, energi og lidenskab.",
			"Påbegyndte arbejdsopgaver bliver afsluttet og afleveret til tiden samtidig med at jeg er koncentreret, fokuseret og nyder hele forløbet.",
			"Venner og kollegaer opfatter mig som værende klog og jeg finder ofte mig selv i at rådgive og hjælpe andre uden at virke bedrevidende."
		],
		eng: [
			"When I wake up in the morning, I have a positive expectation for the day, so I can approach the different things I want to achieve with enthusiasm, energy og passion.",
			"Work assignments that I begin working on are completed and handed in on time while at the same time I am concentrated, focused and enjoying the whole process.",
			"Friends and colleagues perceive me as being wise and I often find myself in advising and helping others without being a know-it-all-person."
		]
	},

	// "title-home": {"dan": "Dashboard", "eng": "Dashboard"},
	// "description-home": {"dan": "Find hurtigt det du leder efter", "eng": "Quickly find what you're looking for"},
	"title-build-process": { dan: "Opbygning", eng: "Build process" },
	"description-build-process": {
		dan: "Hvordan jeg byggede dette portfolio",
		eng: "How I build this portfolio"
	},
	"title-web": { dan: "Websites", eng: "Websites" },
	"description-web": {
		dan: "Her er nogle af mine website projekter og designs",
		eng: "Here are some of my website projects and designs"
	},
	"resume-web": {
		dan:
			"På denne side finder du mine websites som jeg har bygget fra bunden af. De er alle lavet med JavaScript, HTML og CSS som minimum. Jeg begyndte at arbejde med React i januar 2021, så nogle projekter er lavet i React og flere bliver tilføjet med tiden.",
		eng:
			"On this page you will find websites that I have build from the ground up. They are all made with JavaScript, HTML og CSS as a minimum. I started using React back in january 2021, so some projects are made with React and more will be added over time."
	},
	"title-tutorial": { dan: "Tutorials", eng: "Tutorials" },
	"description-tutorial": {
		dan: "Læs mine tutorials og bliv klogere",
		eng: "Read my tutorials and get smarter"
	},
	"resume-tutorial": {
		dan:
			"Dette er alt sammen tutorial orienteret. Nogle er blot artikler og ikke websites jeg har lavet.",
		eng:
			"These are all tutorial orientet. Some are articles and not websites I have created."
	},
	"title-game": { dan: "Spil", eng: "Games" },
	"description-game": {
		dan: "Nogle spil jeg har lavet",
		eng: "Some games I've built"
	},
	"resume-game": {
		dan:
			"Online, gratis spil jeg har lavet. Et enkelt (Lego sjov) er lavet i 3D med Unity 3D og konverteret til web venlige filer så du kan nyde det.",
		eng:
			"Online, free games I have made. One (Lego fun) was made with the Unity 3D engine and converted to web friendly files for you to enjoy."
	},
	"title-about": { dan: "Om mig", eng: "About me" },
	"description-about": {
		dan: "Jeg er programmør/frontend developer",
		eng: "I'm a programmer/frontend developer"
	},
	"title-contact": { dan: "Kontakt", eng: "Contact" },
	"description-contact": {
		dan: "Her kan du komme i kontakt med mig",
		eng: "Here you can get in touch with me"
	},
	"title-cv": { dan: "CV", eng: "CV" },
	"description-cv": {
		dan: "Mit CV (Curriculum Vitae)",
		eng: "My CV (Curriculum Vitae)"
	},

	"contact-text": {
		dan:
			"Står du/I og mangler en dygtig web udvikler, så send mig en hurtig besked:",
		eng: "Are you in need of a skilled web developer, then send me a message:"
	},
	"contact-name": { dan: "Navn (påkrævet):", eng: "Name (required):" },
	"contact-name-required": {
		dan: "Navn skal udfyldes",
		eng: "Name is required"
	},
	"contact-email": { dan: "Email (påkrævet):", eng: "Email (required):" },
	"contact-email-required": {
		dan: "Email skal udfyldes",
		eng: "Email is required"
	},
	"contact-email-wrong": {
		dan: "Dette er ikke en korrekt email",
		eng: "Not a correct email"
	},
	"contact-message": { dan: "Besked:", eng: "Message:" },
	"contact-submit": { dan: "Send", eng: "Submit" },

	"settings": { dan: "Indstillinger", eng: "Settings" },
	"settings-darkmode": { dan: "Darkmode", eng: "Darkmode" },

	// ********************************************************************************************
	// Build process
	// ********************************************************************************************

	"build-process": {
		"title-01": { dan: "Ideen", eng: "The idea" },
		"title-01-p-01": {
			dan:
				"Min generelle ide var at designe dette portfolio på en måde som gør det nemt og hurtigt for eventuelle arbejdsgivere at lære mig og mine færdigheder at kende.",
			eng:
				"My general idea was to design this portfolio in a way that makes it easy and fast for potential employers to learn about me and my skills."
		},
		"title-01-p-02": {
			dan: "Portfolio'et skal være:",
			eng: "The portfolio should be:"
		},
		"title-01-li-01-span": { dan: "Attraktivt at tilgå", eng: "Engaging" },
		"title-01-li-01": {
			dan: "- Du har viiirkelig lyst til at trykke på den cta-knap.",
			eng: "- You reeealy want to press that cta-button."
		},
		"title-01-li-02-span": {
			dan: "Nem at navigere rundt i",
			eng: "Easy to navigate"
		},
		"title-01-li-02": {
			dan:
				"- Skal være nemt at finde relevante ting (som mine projekter, CV, kontakt informationer, osv.)",
			eng:
				"- Must be easy to find relevant things (like my work, resume, contact information, etc.)."
		},
		"title-01-li-03-span": { dan: "Rig på features", eng: "Feature rich" },
		"title-01-li-03": { dan: "- ikke så kedelig.", eng: "- less boring." },
		"title-01-li-04-span": {
			dan: "Bygget fra bunden",
			eng: "Built from scratch"
		},
		"title-01-li-04": {
			dan:
				"- Betyder at jeg bygger det hele fra bunden med React (dvs. sådan noget som bl.a. oversættelse-, accordion-, tooltip- og dropdown-komponenter har jeg bygget selv, på trods af de allerede eksisterende npm pakker med disse features der findes derude).",
			eng:
				"- Meaning I will build everything myself using only React (things like translation-, accordion-, tooltip- and dropdown-components amongst others, where build by myself, despite the existense of npm packages with these features already out there)."
		},

		"title-02": { dan: "Tech", eng: "Tech" },
		"title-02-p-03": {
			dan: "Liste over techs jeg har brugt til at bygge dette portfolio site:",
			eng: "A list of techs I have used to build this portfolio site:"
		},
		"title-02-li-01": {
			dan: "- med [link] mønsteret.",
			eng: "- with [link] pattern."
		},
		"title-02-li-02": {
			dan:
				"- Router feature til nemt at route/navigere sider uden et pageload.",
			eng: "- Router feature for easy routing/navigation without a pageload."
		},
		"title-02-li-03": {
			dan:
				'- Man er ikke bundet af at skrive al kode på "React-måden", man kan tilføje alm. JavaScript hvis man vil!',
			eng:
				'- You are not bound to write all code "the React way", you can add ordinary JavaScript if you want!'
		},
		"title-02-li-04": {
			dan:
				"- Som i React kaldes JSX og som i virkeligheden bare er JavaScript med en HTML lignende syntaks.",
			eng:
				"- Which in React is called JSX and in reality is plain JavaScript with an HTML like syntax."
		},
		"title-02-li-05": {
			dan:
				"- er lidt hurtigere og nemmere at bruge pga. muligheden for at neste CSS-classes og pga. variabler (har dog brugt CSS variabler til f.eks. darkmode).",
			eng:
				"- is a little faster and easier to use because of the nesting feature and because of variables (though I have used CSS variables for things like darkmode)."
		},
		"title-02-li-06": {
			dan: "- JavaScript runtime.",
			eng: "- JavaScript runtime."
		},
		"title-02-li-07": {
			dan:
				"- Et Node.js framework til at hjælpe med at organisere webapps. Brugt som backend til at vise mit portfolio site (frontend) online.",
			eng:
				"- A Node.js framework to help organize webapps. Used as backend to serve my portfolio site (frontend) online."
		},

		"title-03": { dan: "Processen", eng: "The process" },

		"title-04": { dan: "Ansæt mig", eng: "Hire me" },
		"title-04-p-01": {
			dan:
				"Hvis du har læst igennem alle (eller blot nogle) af mine tanke processer og du ikke er helt afskrækket, hvorfor så ikke invitere mig til en samtale og en kop kaffe hvor vi kan diskutere hvordan jeg kan hjælpe din/jeres virksomhed med at vokse?",
			eng:
				"If you have read through all (or some) of my process thoughts and you are not completely discouraged, then why not invite me over for an interview and a cup of coffee, and we can disuss how I can help your business grow?"
		}
	},

	"build-process-brainstorm": {
		"summary": { dan: "Brainstorm", eng: "Brainstorm" },
		"title-01-p-01": {
			dan:
				"Her er en liste jeg lavede da jeg brainstormede projektet. Det er bare en liste over sider og indhold jeg ville have med i mit portfolio site:",
			eng:
				"Here is a list I made when I brainstormed the project. This is just a list of pages and content that should go into the portfolio site:"
		}
	},
	// "build-process-mockup": {"dan": "Mockup", "eng": "Mockup"},
	"build-process-state-management": {
		"summary": { dan: "State management", eng: "State management" },
		"title-01": {
			dan: "State management - håndtering af global state",
			eng: "State management - handling global state"
		},
		"title-01-p-01": {
			dan:
				"Med mit oversættelsesmodul havde jeg behov for at alle mine komponenter vidste hvilket sprog de skulle vise teksten for. Til det har jeg brugt context API'et til at styre states på et globalt plan (med states defineret i den yderste forældre-komponent `App`).",
			eng:
				"With my translation module I needed for all my components to know which language they should show the text for. For that I used the context API to control states globally (with states defined in the outermost parent component `App`)."
		},
		"title-01-p-02": {
			dan:
				"Også andre mindre features som darkmode og fetch af portfolio data er brugt i det globale state.",
			eng:
				"Smaller features like darkmode and fetch of portfolio data is used in the global state as well."
		},
		"title-01-p-03": {
			dan:
				'Dette "state management system" består af et custom hook (`useStoreContext`) og en provider-komponent (`Store`) der begge bliver eksporteret, så jeg kan bruge dem der hvor jeg har behov for det:',
			eng:
				'This "state management system" consists of a custom hook (`useStoreContext`) and a provider component (`Store`) that both gets exported, so I can use them whereever I need to:'
		},
		"title-01-p-04": {
			dan:
				"I `App` pakker jeg alt ind i `Store` -komponenten og sætter mine states til `value` (som et objekt):",
			eng:
				"In `App` I wrap everything inside the `Store` -component and set my states to `value` (as an object):"
		},
		"title-01-code-01": {
			dan: "Alle sub-komponenter her",
			eng: "All child components go here"
		},
		"title-01-p-05": {
			dan:
				"Og alle andre steder jeg har brug for de værdier jeg sender igennem `value` -prop'en, bruger jeg `useStoreContext` -hook'en:",
			eng:
				"And whereever I need the values i pass through the `value` -prop, I use the `useStoreContext` -hook:"
		},
		"title-01-button-light": {
			dan: "Lad der være lys",
			eng: "Let there be light"
		},
		"title-01-button-dark": { dan: "Sluk lyset", eng: "Shut the light" },
		"title-01-p-06": {
			dan: "For god ordens skyld får du lige et eksempel på knappen her:",
			eng: "For the sake of good order, here is an example for the button here:"
		},
		"title-01-p-07": {
			dan: "Bum! Hvem har brug for Redux? Ikke mig!",
			eng: "Boom! Who needs Redux? Not me!"
		}
	},
	"build-process-landing-page": {
		"summary": { dan: "Landing page", eng: "Landing page" },
		"title-01": { dan: "Det første du ser", eng: "The first thing you see" },
		"title-01-p-01": {
			dan:
				"Da denne side (normalt) er det første man ser/lander på, er det vigtigt at man bliver fascineret og har lyst til at blive hængende lidt mere end 3 sekunder. Derfor har jeg prøvet at lave siden lækker, imødekommende, simpel og nem at navigere rundt i, samtidig med at den giver en kort beskrivelse af hvem jeg er.",
			eng:
				"Since this page (normally) is the first thing you see/land on, it is important that you become intrigued and want to stay a while longer than 3 seconds. This is why I have tried to make this page nice, engaging, simple and easy to navigate, while giving a short description og who I am."
		},
		"title-01-p-02": { dan: "__TILFØJ_TEKST__", eng: "__ADD_TEXT__" },
		"title-01-p-03": { dan: "__TILFØJ_TEKST__", eng: "__ADD_TEXT__" },
		"title-01-p-04": { dan: "__TILFØJ_TEKST__", eng: "__ADD_TEXT__" },
		"title-01-p-05": { dan: "__TILFØJ_TEKST__", eng: "__ADD_TEXT__" }
	},
	"build-process-work": {
		"summary": { dan: "Projekter", eng: "Projects" },

		"title-01": { dan: "Data", eng: "Data" },
		"title-01-array": {
			dan: [
				"Alle informationer på projekt-kortene kommer fra en ekstern JSON fil, hvor jeg bruger `fetch` til at hente fra.",
				"Via context API'et sender jeg data'ene til et globalt state og hvis der bliver navigeret til en anden side som også skal bruge disse data, tjekkes der om data'ene allerede er sat i det globale state og hvis de er, bruges disse data i stedet for at fetche. Dette sikrer at der kun bliver fetched én gang og dermed bliver der sparet på trafikken.",
				"Iblandt disse data har jeg også en rating property som jeg bruger til at sortere mine projekter, fra bedst til ikke så bedst (efter min egen vurdering)."
			],
			eng: [
				"All information on the project cards come from an external JSON file, where I use `fetch` to get from.",
				"With the context API I send the data to a global state and if another page needing these data are navigated to, a check is performed to see if data already exists in the global state and if they do, these data are used instead of fetching. This ensures only one fetch is performed and thereby reduces traffic.",
				"Among these data I also have a rating property I use to sort my projects, from best to not so best (according to my own assessment)."
			]
		}
	},
	"build-process-contact": {
		"summary": { dan: "Kontakt", eng: "Contact" },

		"title-01": { dan: "Kontaktinformationer", eng: "Contact information" },
		"title-01-p-01": {
			dan:
				"Det skal være nemt for dig at tage kontakt til mig, så udover de almindelige kontaktinformationer, ville jeg gerne have en kontakt formular.",
			eng:
				"It should be easy for you to get in touch with me, so apart from the basic contact information, I wanted a simple contact form."
		},
		"title-01-p-02": {
			dan:
				"Her vil jeg prøve at gå igennem min process da jeg lavede denne kontakt formular.",
			eng:
				"Here I'll try to walk you through my process of creating this contact form."
		},
		"title-01-p-03": { dan: "Funktionalitet:", eng: "Functionality:" },
		"title-01-li-01-span": {
			dan: "Tilgængelighed (accessibility)",
			eng: "Accessibility"
		},
		"title-01-li-01": {
			dan: "- Semantisk HTML, WAI-ARIA, intuitiv.",
			eng: "- Semantic HTML, WAI-ARIA, intuitive."
		},
		"title-01-li-02-span": { dan: "Validering", eng: "Validation" },
		"title-01-li-02": {
			dan:
				"- Navn og email er påkrævet, hold styr på at der rent faktisk bliver skrevet en reel email adresse.",
			eng:
				"- Name and email required, check if an actual email address was entered."
		},
		"title-01-li-03-span": { dan: "Send email", eng: "Send email" },
		"title-01-li-03": {
			dan:
				"- Serveren skal sende en email til mig når formularen bliver submitted (og valideret).",
			eng:
				"- Server should send an email to me when form is submitted (and validated)."
		},
		"title-01-li-04-span": {
			dan: "Vis en succes besked",
			eng: "Display success message"
		},
		"title-01-li-04": {
			dan:
				"- Når formularen er blevet sendt og valideret, skal der vises en succes besked for at vise at der rent faktisk skete noget.",
			eng:
				"- When form is submitted and validated, show a success message to let you know that something actually happened."
		},

		"title-02": { dan: "Tilgængelighed (accessibility)", eng: "Accessibility" },
		"title-02-p-01": {
			dan:
				'Jeg brugte en semantisk struktur for mine formularer ved hjælp af `<label>` til `<input>` og `<textarea>` elementer. Dette er en fordel da man får både funktionalitet og tilgængelighed helt "gratis". Når jeg siger "gratis" snakker jeg om hvordan skærmlæsere annoncerer den korrekte intention for formularen, samt ting som at trykke på `TAB` -knappen på tastaturet navigerer dig igennem `<input>` felterne, eller fokus på et `<input>` -felt viser en simpel men nødvendig markering rundt om dette `<input>`, bare for at nævne nogle få.',
			eng:
				'I created a semantic structure for my form with `<label>` for `<input>` and `<textarea>` elements. This has the benefit of providing a lot of functionality and accessibility "for free". When I say "for free" I am talking about screen readers announcing the intent of the form correctly, as well as things like pressing the `TAB` -key on the keyboard navigates through the `<input>` fields, or focusing an `<input>` displays a simple but neccesary outline around the edges of said `<input>`, just to name a few.'
		},

		"title-03": { dan: "Validering", eng: "Validation" },
		"title-03-p-01": {
			dan:
				"Jeg ville gerne have min egen valideringsmekanik, så jeg fjernede den indbyggede `HTML` validering med `noValidate` -attributen på `<form>` -elementet og tilføjede `required` attributen til de to `<input>` -felter og lavede en noget kompleks (og genanvendelig) formular-validerings-hook, som ultimativt er i stand til at vise en fejlmeddelelse når et `<input>` -felt bliver udfyldt forkert.",
			eng:
				"Since I wanted my own validation I removed the native `HTML` validation with the `noValidate` -attribute on the form element and added the `required` attribute to the two `<input>` -fields and created a somewhat complex (and reusable) form validation hook, which in the end is capable of displaying an error message when an `<input>` -field is not filled out correctly."
		},
		"title-03-p-02": {
			dan: "Hele validerings-processen består af tre custom hooks:",
			eng: "The whole validation process consists of three custom hooks:"
		},
		"title-03-li-01": {
			dan: "- Til at håndtere `onSubmit` og `onChange` -events",
			eng: "- For handling `onSubmit` and `onChange` -events"
		},
		"title-03-li-02": {
			dan:
				"- En hook der indeholder alle mulige validerings-typer (required, isEmail, min, max, etc.).",
			eng:
				"- A hook containing all possible validation-types (required, isEmail, min, max, etc.)."
		},
		"title-03-li-03": {
			dan:
				'- En bruger-oprettet, custom hook der benytter `useFormValidation` -hook\'ens validerings-funktioner (dette betyder at `useContactValidation` (eller hvad man nu har kaldt den) er "tightly coupled" med en specifik `<form>` og skal oprettes for hver unikke `<form>`)',
			eng:
				"- A user-created, custom hook utilizing the `useFormValidation` -hooks validation functions (this means that `useContactValidation` (or whatever it's been named) is tightly coupled with a specific `<form>` and should manually be created for each unique `<form>`)."
		},
		"title-03-p-03": {
			dan:
				"`useContactValidation` -hook'en for kontakt formularen i dette portfolio projekt, ser sådan her ud:",
			eng:
				"The `useContactValidation` -hook for the contact form in this portfolio project, looks like this:"
		},
		"title-03-p-04": {
			dan:
				"men, kunne se fuldstændig anerledes ud for en anden `<form>`, selv i et andet projekt.",
			eng:
				"but, could look completely different for another `<form>`, even in another project"
		},

		"title-04": { dan: "Send email", eng: "Send email" },
		"title-04-p-01": {
			dan:
				"Jeg skal modtage besked når nogen submitter formularen, derfor har jeg behov for at modtage en email med indholdet fra denne kontakt formular.",
			eng:
				"When submitting the form I should get informed about it, therefore I want to get an email with the content from this contact form."
		},
		"title-04-p-02": {
			dan:
				"Jeg bruger ExpressJS i backend'en til at vise dette portfolio og her bruger jeg en npm pakke kaldet nodemailer, til at sende emails.",
			eng:
				"I am using ExpressJS in the backend to serve this portfolio and here I am using the nodemailer npm package to send emails."
		},

		"title-05": { dan: "Vis en succes besked", eng: "Display success message" },
		"title-05-p-01": {
			dan:
				"Til sidst viser jeg en popup besked (en modal) for at informere om at en email er blevet sendt.",
			eng:
				"Lastly I am displaying a popup message (modal) to inform you that you have successfully sent an email."
		}
	},
	"build-process-cv": {
		"summary": { dan: "CV", eng: "CV" },
		"title-01": { dan: "CV - Curriculum Vitae", eng: "CV - Curriculum Vitae" },
		"title-01-p-01": {
			dan: "Her har jeg brug for at vise følgende:",
			eng: "Here I needed to display the following:"
		},
		"title-01-li-01-span": {
			dan: "Kontakt informationer",
			eng: "Basic contact information"
		},
		"title-01-li-01": {
			dan: "- Adresse, telefon, email, m.m.",
			eng: "- Address, phone, email, etc."
		},
		"title-01-li-02-span": {
			dan: "Et billede der tydeligt viser hvordan jeg ser ud",
			eng: "An image that clearly displays how I look"
		},
		"title-01-li-02": {
			dan: "- Det er mig...",
			eng: "- (is that a mugshot?)."
		},
		"title-01-li-03-span": { dan: "Resume", eng: "Resume" },
		"title-01-li-03": {
			dan: "- En kort beskrivelse af mig i forhold til min erhvervs-karriere.",
			eng: "- A short description of me in relation to my professional career."
		},
		"title-01-li-04-span": {
			dan: "Mine bedste projekter",
			eng: "My best projects"
		},
		"title-01-li-04": {
			dan: "- Tre projekter jeg er allermest stolt af.",
			eng: "- Three projects I am most proud of."
		},
		"title-01-li-05-span": { dan: "Faglige kompetencer", eng: "Skills" },
		"title-01-li-05": {
			dan: "- En liste over de kompetencer jeg besidder.",
			eng: "- A list of the skills I possess."
		},
		"title-01-li-06-span": {
			dan: "Personlige kompetencer",
			eng: "Personal skills"
		},
		"title-01-li-06": {
			dan: '- En liste over personlige kompetencer/"soft skills".',
			eng: "- A list of personal skills/soft skills."
		},
		"title-01-li-07-span": { dan: "Erfaring", eng: "Experience" },
		"title-01-li-07": {
			dan: "- Relevant erhvervserfaring/uddannelse.",
			eng: "- Relevant career path/education."
		}
	},
	"build-process-translation": {
		"summary": { dan: "Oversættelse", eng: "Translation" },
		"title-01": { dan: "Oversættelse", eng: "Translation" },
		"title-01-p-01": {
			dan:
				"Jeg ville gerne tilføje lidt ekstra funktionalitet til sitet, udover bare at vise information omkring mig selv.",
			eng:
				"I wanted to add a little more functionality to the site besides just showing information about me."
		},
		"title-01-p-02": {
			dan:
				"Årsagen til beslutningen om at tilføje oversættelsesfunktionalitet var at signalere at jeg både forstår engelsk og dansk, samtidig med at jeg viser mine evner til at implementere noget lidt mere kompleks.",
			eng:
				"The reason for the translation functionality was to signal my understanding of both the danish and the english language, as well as my ability to implement something a bit more complex."
		},
		"title-02": { dan: "Hvordan virker det?", eng: "How does it work?" },
		"title-02-p-01": {
			dan:
				"Det er jeg glad for at du spørger om. Min idé var at tilføje et objekt der indeholder alle oversættelserne. Dertil har jeg et custom hook som kan slå den rette oversættelse op baseret på et `id`, sådan her:",
			eng:
				"I'm glad you asked. My idea was to add an object containing all the translations. For this I use a custom hook to lookup the correct translation, based on an `id`, like this:"
		},
		"title-02-tooltip": {
			dan: "Hvorfor den JSON -lignende syntaks (strings som properties)?",
			eng: "Why the JSON -like syntax (strings for properties)?"
		},
		"title-02-tooltip-text": {
			dan:
				'Tjaa, i tilfælde af at jeg ville konvertere det til et API eller en separat JSON fil og fetche det, men også fordi nogle af properties\'ne består af flere ord adskilt af en bindestreg, som så er nødt til at blive pakket ind i anførselstegn (som `"button-hire-me"`), så for at tilfredsstille mit kode-OCD, så måtte jeg bare gøre det for alle properties.',
			eng:
				'Well in case I wanted to port it to an API or a separate JSON file and then fetching it, and also because some of the properties are several words separated by hyphens, which then must be wrapped inside quotes (like `"button-hire-me"`), so to satisfy my coding-OCD, I just had to do it for all properties.'
		},
		"title-02-p-02": {
			dan:
				"Lad os sige at jeg ville have en komponent med en call-to-action-knap i den, og teksten indeni skulle ændres i forhold til det valgte sprog. Når jeg importerer min custom `useLanguage` -hook og destrukturerer `Translate` -komponenten fra den, kommer koden til at se sådan her ud:",
			eng:
				"Then say, I wanted a component with a call-to-action-button in it, and the text inside should change according to the chosen language. Importing my custom `useLanguage` -hook and destructuring the `Translate` -component from it, the code could look something like this:"
		},
		"title-02-p-03": {
			dan: "og knappen vil se nogenlunde sådan her ud:",
			eng: "and the button would look something like this:"
		},
		"title-02-p-04": {
			dan:
				"Der er også support for variabler, og koden for det ser ca. sådan her ud:",
			eng:
				"There is also support for variables, and the code for that could look something like this:"
		},
		"title-02-p-05": {
			dan: "camelCase variabel-navne fungerer lige så vel:",
			eng: "camelCased variable-names works just as well:"
		},
		"title-02-p-06": {
			dan: "resultatet vil se sådan her ud for koden ovenover:",
			eng: "the result would look like this for the code above:"
		}
	},
	"build-process-darkmode-theme": {
		"summary": { dan: "Darkmode / farve tema", eng: "Darkmode / color theme" },
		"title-01": { dan: "Darkmode", eng: "Darkmode" },
		"title-01-array-01": {
			dan: [
				"Der er blevet brugt CSS variabler til farverne igennem hele projektet som forberedelse til darkmode.",
				"Ét sæt `hsl()` farver til darkmode og ét sæt til lightmode:"
			],
			eng: [
				"CSS variables has been used for colors throughout the entire project as preparation for darkmode.",
				"One set of `hsl()` colors for darkmode and one for lightmode:"
			]
		},
		"title-01-array-02": {
			dan: [
				"Til at skifte mellem dark- og lightmode bruger jeg en event der sætter en global state til `true` eller `false` og samme værdi i local storage, samtidig med at jeg toggler en CSS class på `body` -elementet i DOM'en.",
				"Til det har jeg brugt en useEffect hook hvor jeg med almindelig JavaScript manipulerer DOM'en:"
			],
			eng: [
				"To change between dark- and lightmode I use an event which sets a global state to either `true` or `false` and sets it in local storage as well, and at the same time I toggle a CSS class on the `body` -element in the DOM.",
				"For that I use the useEffect hook where I with simple JavaScript code manipulate the DOM:"
			]
		},
		"title-01-p-01": { dan: "Simpelt, ikke sandt?", eng: "Simple, right?" },

		"title-02": { dan: "Farve tema", eng: "Color theme" },
		"title-02-array-01": {
			dan: [
				"Ligesom med darkmode bliver farve temaet styret med et globalt state og lagt ind i local storage.",
				"Men da der er flere værdier frem for bare `true` / `false`, måtte jeg håndtere det lidt anerledes.",
				"Det er her CSS variabler virkelig viser deres styrke, for i stedet for at definere en masse forskellige tema farver og hver deres tilsvarende sæt af farvetoner, laver jeg ét sæt farver (med `hsl()`), hvor jeg bruger variabler til `hue` og `saturation`:"
			],
			eng: [
				"Just like darkmode the colors are controlled in the global state and also put into local storage.",
				"But since there are more values than just `true` / `false`, I needed to handle it a little different.",
				"This is where CSS variables really shine, because instead of defining a bunch of different theme colors and their matching set of color tones, I make one set of colors (using `hsl()`), where I use variables for the `hue`- and `saturation`-values:"
			]
		},
		"title-02-p-01": {
			dan:
				"På den måde behøver jeg kun ændre disse to værdier for at skifte hele farvetemaet:",
			eng:
				"That way I only need to change those two values to change the entire color theme:"
		}
	}
};

function useLanguage() {
	var { getLorem } = useLorem();
	var [language, setLanguage] = useLocalStorage("language", "dan");

	function Translate(props) {
		var translationsObj = translations;
		if (props.extended) {
			translationsObj = translations[props.extended];
		}
		if (
			language === "lorem" &&
			translationsObj?.[props.id] &&
			!translationsObj[props.id].lorem
		) {
			let danCount = translationsObj[props.id].dan.length;
			let engCount = translationsObj[props.id].eng.length;
			let word = getLorem(Math.floor((danCount + engCount) / 2));
			translationsObj[props.id].lorem = word;
		}
		var translation = translationsObj?.[props.id]?.[language];
		if (!translation) {
			return <Err id={props.id} />;
		}

		return parseAttributes(translation, props);
	}

	function parseAttributes(string, props) {
		var arrStr = string.split(/\[(.*?)\]/);
		if (arrStr.length > 1) {
			return arrStr.map(str => {
				var camelCase = str
					.split("-")
					.map((word, index) => (index === 0 ? word : helper.proper(word)))
					.join("");
				if (props[camelCase]) {
					return <Fragment key={str}>{props[camelCase]}</Fragment>;
				}
				return parseString(str);
			});
		}
		return parseString(string);
	}

	function parseString(string) {
		if (!string) return null;
		var strOrArr = string;
		var codes = strOrArr.split(/`(.*?)`/g);
		if (codes?.length > 1) {
			strOrArr = codes.map((str, index) =>
				index % 2 === 1 ? (
					<Code key={index} singleline>
						{str}
					</Code>
				) : (
					str
				)
			);
		}
		return strOrArr;
	}

	function translate(id, extended) {
		var translationsObj = translations;
		if (extended) {
			translationsObj = translations[extended];
			if (!translationsObj) {
				return translations.missing[language] + " " + extended;
			}
		}
		if (!translationsObj) {
			return translations.missing[language] + " " + id;
		}
		if (
			language === "lorem" &&
			translationsObj[id] &&
			!translationsObj[id].lorem
		) {
			if (Array.isArray(translationsObj[id].dan)) {
				var danCounts = translationsObj[id].dan.map(word => word.length);
				var engCounts = translationsObj[id].eng.map(word => word.length);
				let words = danCounts.map((count, index) =>
					getLorem(Math.floor((count + engCounts[index]) / 2))
				);
				return words;
			}
			let danCount = translationsObj[id].dan.length;
			let engCount = translationsObj[id].eng.length;
			let word = getLorem(Math.floor((danCount + engCount) / 2));
			translationsObj[id].lorem = word;
			return word;
		}
		var translation = translationsObj[id]?.[language];
		if (!translation) {
			return translations.missing[language] + " " + id;
		}
		if (Array.isArray(translation)) {
			translation = translation.map(item => parseString(item));
		}
		return translation;
	}

	function translateFeed(feed) {
		if (!feed.dan || !feed.eng) {
			return null;
		}
		return language === "lorem"
			? getLorem(helper.average(feed.dan.length, feed.eng.length))
			: feed[language];
	}

	function Err({ id }) {
		return (
			<span>
				<span style={{ fontWeight: "500", color: "red" }}>
					{translations.missing[language]}
				</span>
				<span style={{ fontWeight: "100", color: "yellow" }}>&nbsp;{id}</span>
			</span>
		);
	}

	return {
		language,
		setLanguage,
		languages: translations.languages,
		translate,
		Translate,
		translateFeed,
		parseAttributes,
		parseString
	};
}

export default useLanguage;
