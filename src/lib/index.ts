import {
	PUBLIC_RELEASES_URL,
	PUBLIC_LATEST_WINDOW_BUILD_URL,
	PUBLIC_LATEST_LINUX_BUILD_URL,
	PUBLIC_LATEST_ANDROID_BUILD_URL
} from "$env/static/public";

type OsName = "Windows" | "Linux" | "Android";

export function getDownloadUrl(): string {
	const osName = getOsName();

	switch (osName) {
		case "Windows": {
			return PUBLIC_LATEST_WINDOW_BUILD_URL;
		}
		case "Linux": {
			return PUBLIC_LATEST_LINUX_BUILD_URL;
		}
		case "Android": {
			return PUBLIC_LATEST_ANDROID_BUILD_URL;
		}
		default: {
			return PUBLIC_RELEASES_URL;
		}
	}
}

export function getOsName() {
	let osName: OsName | undefined = undefined;

	if (navigator.userAgent.indexOf("Win") != -1) osName = "Windows";
	if (navigator.userAgent.indexOf("Linux") != -1) osName = "Linux";
	if (navigator.userAgent.indexOf("Android") != -1) osName = "Android";

	return osName;
}
