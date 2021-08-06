var helper = {};

helper.modifiers = (block, arr) =>
	arr?.length
		? arr.map(modifier => " " + block + "--" + modifier).join("")
		: "";
helper.className = className => (className ? " " + className : "");
helper.randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
helper.proper = word => word[0].toUpperCase() + word.substr(1);
helper.average = (...nums) =>
	Math.floor(nums.reduce((acc, curr) => acc + curr, 0) / nums.length);
helper.latestDate = dateObj => {
	var currentDate = new Date();
	var parsedDate = Date.parse(`${dateObj.year}-${dateObj.month}-28T00:00:00`);

	if (parsedDate < currentDate.getTime()) {
		return {
			year: currentDate.getFullYear().toString(),
			month: (currentDate.getMonth() + 1).toString()
		};
	}

	return dateObj;
};

export default helper;
