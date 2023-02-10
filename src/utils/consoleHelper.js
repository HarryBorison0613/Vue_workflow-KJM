export var LogLevels;
(function (LogLevels) {
	LogLevels['FATAL'] = 'fatal';
	LogLevels['ERROR'] = 'error';
	LogLevels['WARNING'] = 'warn';
	LogLevels['INFO'] = 'info';
	LogLevels['DEBUG'] = 'debug';
})(LogLevels || (LogLevels = {}));
export default function logToConsole(message, level) {
	if (level === LogLevels.FATAL) {
		console.log('%EPIC FAIL!', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', message);
	} else if (level === LogLevels.ERROR) {
		console.log('%cError', 'background: orange; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', message);
	} else if (level === LogLevels.WARNING) {
		console.log('%Warning', 'background: yellow; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', message);
	} else if (level === LogLevels.INFO) {
		console.log('%cInfo', 'background: cyan; color: black; padding: 2px 4px; border-radius: 3px; font-weight: bold;', message);
	} else if (level === LogLevels.DEBUG) {
		console.log('%cDebug', 'background: blue; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', message);
	}
}
//# sourceMappingURL=consoleHelper.js.map
