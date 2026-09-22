import { ScalarApiReference } from "@scalar/sveltekit";
import type { RequestHandler } from "./$types";

export const prerender = true;
export const trailingSlash = "always";

const render = ScalarApiReference({
	url: "https://raw.githubusercontent.com/mullpay/wallet/refs/heads/main/docs/openapi.yaml?format=yaml",
	defaultHttpClient: {
		targetKey: "rust",
		clientKey: "reqwest"
	},
	hideClientButton: true,
	pageTitle: "MullPay Docs",
	favicon: "/favicon.svg",
	layout: "classic"
});

export const GET: RequestHandler = () => {
	return render();
};
