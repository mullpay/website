<script lang="ts">
	import Favicon from "$lib/assets/favicon.svg";

	let header: HTMLDivElement | undefined;

	const threshold = 6;

	window.addEventListener("scroll", () => {
		if (!header) return;
		if (window.scrollY > threshold) {
			header.classList.remove("relative");
			header.classList.add("fixed", "top-0", "left-0");
		} else {
			header.classList.add("relative");
			header.classList.remove("fixed", "top-0", "left-0");
		}
	});
</script>

<div
	bind:this={header}
	class="relative flex w-full flex-row items-center justify-between gap-2 p-4 backdrop-blur-md after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[linear-gradient(to_right,transparent_0%,#f1f5f933_10%,#f1f5f933_90%,transparent_100%)] after:content-[''] lg:px-32"
>
	<a href="/" class="flex flex-row items-center justify-center gap-2">
		<img class="h-5 w-5" src={Favicon} alt="icon" />
		<h1 class="font-semibold">MullPay</h1>
	</a>
	<div class="flex items-center gap-8">
		<div class="hidden gap-8 font-mono md:flex">
			<a class="cursor-pointer" href="#bitcoin">Bitcoin</a>
			<a class="cursor-pointer" href="#depix">Depix</a>
			<a class="cursor-pointer" href="#contact">Contato</a>
			<a class="cursor-pointer" href="#faq">Faq</a>
			<a class="cursor-pointer" href="/docs">Docs</a>
		</div>
		<a
			href="https://app.mullpay.com"
			class="cursor-pointer rounded-2xl border-2 border-slate-900 bg-slate-50 p-3 text-xs text-black"
		>
			Abrir na web
		</a>
	</div>
</div>
