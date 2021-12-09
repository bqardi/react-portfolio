import { useEffect, useRef } from "react";
import "./Christmas.scss";
import { useStoreContext } from "./Store";
import Toggler from "./Toggler";

const START_AMOUNT = 100;
const AVG_INTERVAL = 80;
const MAX_WIND_SPEED = 0.05;
const MIN_FALL_SPEED = 0.05;
const MAX_FALL_SPEED = 0.2;
const MIN_SIZE = 1;
const MAX_SIZE = 5;
const MIN_OPACITY = 10;
const MAX_OPACITY = 40;

function Christmas(){
	const canvasRef = useRef(null);

	function draw(ctx, snowFlakeSettings){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		snowFlakeSettings.forEach(flake => snowFlake(ctx, flake));
	}

	function snowFlake(ctx, snowFlakeSettings){
		ctx.fillStyle = `hsl(100, 100%, 100%, ${snowFlakeSettings.opacity}%)`;
    ctx.beginPath();
    ctx.arc(snowFlakeSettings.x, snowFlakeSettings.y, snowFlakeSettings.size, 0, 2 * Math.PI)
    ctx.fill();
	}

	useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
		canvasRef.current.width = window.innerWidth;
		canvasRef.current.height = window.innerHeight;
		let prevTime = 0;
		let animFrameId;
		let snowFlakeSettings = [];
		for (let i = 0; i < Math.round(START_AMOUNT * canvasRef.current.width / 1000); i++) {
			snowFlakeSettings.push(createSnowFlake(canvasRef.current.width, canvasRef.current.height));
		}
		const interval = setInterval(() => {
			const newSnowFlake = createSnowFlake(canvasRef.current.width);
			const existingSnowFlake = snowFlakeSettings.find(flake => !flake.onScreen);
			if (existingSnowFlake === undefined) {
				snowFlakeSettings.push(newSnowFlake);
				return;
			}
			Object.keys(existingSnowFlake).forEach(key => {
				existingSnowFlake[key] = newSnowFlake[key]
			});
		}, Math.random() * AVG_INTERVAL * 100 / (START_AMOUNT * canvasRef.current.width / 1000));
		function render(time){
			if (time === undefined) {
				animFrameId = requestAnimationFrame(render);
				return;
			}
			const deltaTime = parseFloat(time - prevTime);
			prevTime = time;
			snowFlakeSettings.forEach(flake => {
				flake.x += deltaTime * flake.windSpeed;
				flake.y += deltaTime * flake.fallSpeed;
				if (flake.x > canvasRef.current.width || flake.x < 0 || flake.y > canvasRef.current.height) {
					flake.onScreen = false;
				}
			});
			draw(ctx, snowFlakeSettings);
			animFrameId = requestAnimationFrame(render);
		}
		render();
		return () => {
			cancelAnimationFrame(animFrameId);
			clearInterval(interval);
		};
	}, []);
	
	return (
		<div className="Christmas">
			<canvas ref={canvasRef} className="Christmas__canvas" />
		</div>
	);
}

function ChristmasHeading(){
	const {Translate} = useStoreContext();
	return (
		<h1 className="Christmas__heading"><Translate id="christmas-heading" /></h1>
	);
}
Christmas.Heading = ChristmasHeading;

function ChristmasToggler(){
	const {Translate, snow, setSnow} = useStoreContext();
	return (
		<div className="Christmas__toggler">
			<Toggler
				id={"chirstmas-toggle"}
				isOn={snow}
				label={snow ? <Translate id="chirstmas-visible" /> : <Translate id="chirstmas-hidden" />}
				callback={() => setSnow(prev => !prev)}
				tabIndex="-1"
			/>
		</div>
	);
}
Christmas.Toggler = ChristmasToggler;

function createSnowFlake(width, height){
	return {
		x: Math.random() * width,
		y: height === undefined ? -MAX_SIZE - 1 : (Math.random() - 0.1) * height,
		windSpeed: (Math.random() - 0.5) * MAX_WIND_SPEED,
		fallSpeed: Math.random() * (MAX_FALL_SPEED - MIN_FALL_SPEED) + MIN_FALL_SPEED,
		size: Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE,
		opacity: Math.random() * (MAX_OPACITY - MIN_OPACITY) + MIN_OPACITY,
		onScreen: true
	}
}

export default Christmas;