export enum LogLevels {
	FATAL = 'fatal',
	ERROR = 'error',
	WARNING = 'warn',
	INFO = 'info',
	DEBUG = 'debug',
}

export default function logToConsole(message: string, level: LogLevels): void {
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
