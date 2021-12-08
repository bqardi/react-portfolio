import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useStoreContext } from "../components/Store";
import WorkCard from "../components/WorkCard";
import Layout from "../layout/Layout";
import "./WorkFilter.scss";

function WorkFilter({array}){
	const {language, Translate} = useStoreContext();
	const [filtered, setFiltered] = useState([]);
	const [types, setTypes] = useState([]);
	const [typeActive, setTypeActive] = useState(null);

	function test(isActive, tag){
		setTypeActive(prev => ({...prev, [tag.id]: isActive}));
	}

	useEffect(() => {
		if (array.length === 0) return;
		var arrayTypes = []
		array.forEach(item => {
			arrayTypes = [...arrayTypes, ...item.types];
		});
		arrayTypes = [...new Map(arrayTypes.map(item => [item.id, item])).values()];
		setTypes(arrayTypes);
		const obj = {}
		arrayTypes.forEach(type => obj[type.id] = true);
		setTypeActive(obj);
	}, [array]);

	useEffect(() => {
		if (typeActive === null) return;
		var arr = [];
		Object.entries(typeActive).forEach(([key, value]) => {
			if (value) {
				arr = [...arr, ...array.filter(item => (
					item.types.some(type => type.id === key) &&
					!arr.some(itm => itm.id === item.id)
				))];
			}
		});
		setFiltered(arr);
	}, [typeActive]);

	return (
		<>
			<div style={{marginBottom: 50}}>
				<h3><Translate id="work-filter-by-type" /></h3>
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