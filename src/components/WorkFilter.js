import { useEffect, useState } from "react";
import Button from "./Button";
import { useStoreContext } from "./Store";
import WorkCard from "./WorkCard";
import Layout from "../layout/Layout";
import "./WorkFilter.scss";
import { Fragment } from "react";

function WorkFilter({array}){
	const {language, Translate} = useStoreContext();
	const [filtered, setFiltered] = useState([]);
	const [types, setTypes] = useState([]);
	const [typeActive, setTypeActive] = useState(null);

	function test(isActive, tag){
		const arr = [...types];
		arr.forEach(type => {if (type.id === tag.id) type.active = isActive});
		setTypes(arr);
	}

	useEffect(() => {
		if (array.length === 0) return;
		var arrayTypes = []
		array.forEach(item => {
			arrayTypes = [...arrayTypes, ...item.types];
		});
		arrayTypes = [...new Map(arrayTypes.map(item => [item.id, item])).values()];
		arrayTypes.forEach(type => type.active = true);
		setTypes(arrayTypes);
	}, [array]);

	useEffect(() => {
		if (types.length === 0) return;
		var arr = [];
		types.forEach(type => {
			if (type.active) {
				arr = [...arr, ...array.filter(item => (
					item.types.some(tp => tp.id === type.id) &&
					!arr.some(itm => itm.id === item.id)
				))];
			}
		});
		setFiltered(arr);
	}, [types]);

	return (
		<>
			<div className="WorkFilter">
				<h3><Translate id="work-filter-by-type" />
					{(() => {
						const shownTypes = types.filter(type => type.active).map(type => type[language]);
						return shownTypes.length > 0 ? (
							<>
								&nbsp;
								<span className="WorkFilter__filtered">
									(<Translate id="work-filter-by-type-shown" />: {shownTypes.join(", ")})
								</span>
							</>
						) : null
					})()}
				</h3>
				<Layout.Flex gap={10} style={{padding: "20px 0"}} wrap>
					{types.map(type => <Button.Toggle key={type.id} isActive onToggle={isActive => test(isActive, type)}>{type[language]}</Button.Toggle>)}
				</Layout.Flex>
				{!filtered.length && <p><Translate id="work-filter-error" /></p>}
			</div>
			<Layout.Grid>
				{filtered.map(project => (
					<WorkCard key={project.id} project={project} />
				))}
			</Layout.Grid>
		</>
	);
}

export default WorkFilter;