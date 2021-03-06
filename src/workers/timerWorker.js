let timerWorker = () => {
	let startTime = 0;
	let currentTime = startTime;
	function addTime() {
		currentTime += 25;
		postMessage(currentTime);
	}
	setInterval(addTime, 25);
};

let code = timerWorker.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default worker_script;
