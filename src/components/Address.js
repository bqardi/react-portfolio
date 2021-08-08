import Icon from "./Icon";
import Button from "./Button";
import Card from "./Card";

import "./Address.scss";

function Address() {
	return (
		<Card>
			<Card.Body className="Address">
				<address>
					<div className="Address__home">
						<h2>Sune Seifert</h2>
						<p>Kjærsvej 80 - 4220 Korsør</p>
					</div>
					<ul className="Address__contact">
						<li>
							<Button modifiers={["inline"]} href="mailto:bqardi@msn.com">
								<Icon.Email />
								bqardi@msn.com
							</Button>
						</li>
						<li>
							<Button modifiers={["inline"]} href="tel:+4520219128">
								<Icon.CellphoneAndroid />
								+45 20 21 91 28
							</Button>
						</li>
						<li>
							<Button modifiers={["inline"]} href="https://portfolio.bqardi.dk">
								<Icon.Web />
								https://portfolio.bqardi.dk
							</Button>
						</li>
					</ul>
				</address>
			</Card.Body>
		</Card>
	);
}

export default Address;
