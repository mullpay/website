<script lang="ts">
	import { getDownloadUrl } from "$lib";
	import { onMount } from "svelte";
	import { faChevronUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import { faDiscord, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
	import Fa from "svelte-fa";
	import Phone from "$lib/assets/phone-512.webp";

	let url = $state("");

	function onDownload() {
		window.location.assign(url);
	}

	onMount(async () => {
		url = await getDownloadUrl();

		const params = new URLSearchParams(window.location.search);
		const downloadParam = Number(params.get("download"));

		if (downloadParam) {
			onDownload();
		}
	});
</script>

{#snippet faq(title: string, content: string[])}
	<details class="group flex w-full flex-col rounded-2xl border p-6">
		<summary class="flex cursor-pointer list-none items-center justify-between">
			<span class="text-base font-medium">{title}</span>
			<Fa class="transition-transform group-open:rotate-180" icon={faChevronUp} />
		</summary>
		<div class="mt-3">
			{#each content as c}
				<p class="text-sm">{c}</p>
			{/each}
		</div>
	</details>
{/snippet}

<div class="flex h-full w-full flex-col bg-black text-white">
	<Header />
	<div class="flex h-full w-full flex-col gap-6">
		<div class="flex h-screen w-full flex-col items-center justify-center gap-6">
			<div class="flex flex-col items-center">
				<div class="flex flex-col items-center justify-center gap-2">
					<h1 class="text-center text-3xl font-semibold text-shadow-md text-shadow-slate-500">Compre, Envie e Receba</h1>
					<p class="text-neutral-400">Bitcoin a qualquer hora</p>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<button
					class="cursor-pointer rounded-2xl border-2 border-slate-900 bg-slate-50 p-3 text-xs text-black"
					onclick={onDownload}
				>
					Baixar App
				</button>
				<img class="w-lg" src={Phone} alt="app" />
			</div>
		</div>
		<div id="contact" class="flex w-full scroll-mt-64 flex-col items-center gap-8 p-8">
			<div class="flex flex-col items-center">
				<h2 class="font-mono text-3xl font-semibold">Contato</h2>
				<p class="text-xs">Fale com a gente nas nossas redes sociais</p>
			</div>
			<div class="flex flex-row gap-6">
				<a href="https://discord.gg/V3SteUb3xJ" target="_blank"> <Fa class="text-7xl" icon={faDiscord} /></a>
				<a href="https://x.com/PayWithMull" target="_blank"> <Fa class="text-7xl" icon={faTwitter} /></a>
				<a href="https://www.youtube.com/@MullPay" target="_blank"> <Fa class="text-7xl" icon={faYoutube} /></a>
				<a href="https://github.com/mullpay/wallet" target="_blank"> <Fa class="text-7xl" icon={faGithub} /></a>
                <a href="mailto:contact@mullpay.com" target="_blank"> <Fa class="text-7xl" icon={faEnvelope} /></a>
			</div>
		</div>
		<div id="bitcoin" class="flex w-full scroll-mt-64 flex-col items-center gap-8 p-8">
			<div class="flex flex-col items-center">
				<h2 class="font-mono text-3xl font-semibold">Bitcoin</h2>
				<p class="text-xs text-neutral-400">O ouro — melhor que o ouro</p>
			</div>
			<div class="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">O que é Bitcoin?</h3>
					<p class="text-sm text-neutral-300">
						Bitcoin é a primeira e mais conhecida criptomoeda do mundo. É uma moeda digital descentralizada que funciona sem
						depender de bancos ou governos.
					</p>
				</div>
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">Por que usar Bitcoin?</h3>
					<p class="text-sm text-neutral-300">
						Bitcoin oferece soberania sobre seu dinheiro, reserva de valor, segurança e privacidade. Com a MullPay, tornamos
						tudo isso acessível para você.
					</p>
				</div>
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">Redes suportadas</h3>
					<p class="text-sm text-neutral-300">
						Na MullPay, você pode transacionar Bitcoin pelas redes On-Chain, Lightning e Spark.
					</p>
				</div>
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">Comece agora</h3>
					<p class="text-sm text-neutral-300">
						Baixe nosso aplicativo e comece a transacionar Bitcoin em minutos, com praticidade e segurança.
					</p>
				</div>
			</div>
		</div>
		<div id="depix" class="flex w-full scroll-mt-64 flex-col items-center gap-8 p-8">
			<div class="flex flex-col items-center">
				<h2 class="font-mono text-3xl font-semibold">DePix</h2>
				<p class="text-xs text-neutral-400">Real na blockchain</p>
			</div>
			<div class="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">O que é DePix?</h3>
					<p class="text-sm text-neutral-300">
						DePix é um token digital atrelado 1:1 ao Real Brasileiro (BRL), disponível na MullPay pela rede Spark. Oferece
						transações privadas e seguras.
					</p>
				</div>
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">Características</h3>
					<p class="text-sm text-neutral-300">
						DePix é transiente (intermediário entre o Real e o Bitcoin) e discreto (privado e reservado), o que o torna ideal
						para conversões entre Real, Bitcoin e outros ativos digitais.
					</p>
				</div>
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">Vantagem</h3>
					<p class="text-sm text-neutral-300">
						Como ativo transiente, oferece mais privacidade ao interagir com o sistema fiduciário tradicional.
					</p>
				</div>
				<div class="flex flex-col gap-4 rounded-2xl border border-neutral-700 p-6">
					<h3 class="text-lg font-semibold">Comece agora</h3>
					<p class="text-sm text-neutral-300">
						Na MullPay você pode converter seus Reais em DePix via PIX de forma simples. Sem KYC obrigatório e sem taxas
						abusivas.
					</p>
				</div>
			</div>
		</div>
		<div id="faq" class="flex w-full flex-col items-center gap-8 p-8">
			<h2 class="font-mono text-3xl font-semibold">Perguntas</h2>
			<div class="flex w-full flex-col gap-4">
				{@render faq("Quais são as taxas?", [
					"Depósito PIX: R$ 0,99 + 2,25%",
					"Swap: taxa variável conforme a cotação da Flashnet"
				])}
				{@render faq("Preciso fazer KYC?", [
					"Não",
					"No depósito PIX, a MullPay recebe um identificador opaco gerado pela Eulen"
				])}
				{@render faq("Posso ter múltiplas carteiras?", [
					"Sim. Cada carteira tem sua própria frase de recuperação",
					"Os depósitos PIX seguem os limites do pagador na Eulen"
				])}
				{@render faq("Posso receber PIX de qualquer um?", [
					"Use uma conta bancária de sua titularidade. Os depósitos PIX ficam vinculados ao identificador do pagador na Eulen"
				])}
				{@render faq("Quais redes são suportadas?", ["Atualmente as redes Spark, Lightning e On-Chain são suportadas"])}
				{@render faq("Quais ativos são suportados?", ["Atualmente os ativos suportados são Bitcoin e DePix"])}
				{@render faq("O que é a Spark?", [
					"A Spark é a rede usada pela MullPay para enviar e receber Bitcoin e DePix entre carteiras compatíveis"
				])}
				{@render faq("Em que dispositivos posso usar a MullPay?", [
					"A MullPay está disponível para Android (APK), Windows, Linux e também na web"
				])}
				{@render faq("Quem controla minhas chaves?", [
					"Você. A MullPay é uma carteira de autocustódia. Guarde sua frase de recuperação de 12 palavras: ela dá acesso aos seus fundos"
				])}
				{@render faq("O código da MullPay é aberto?", [
					"Sim. O código do aplicativo e do backend está disponível em github.com/mullpay/wallet para consultar, modificar e contribuir"
				])}
				{@render faq("E o sistema fiduciário tradicional?", [
					"No sistema fiduciário tradicional, o dinheiro não esta no banco, o dinheiro que não esta no banco não é seu, e o dinheiro que não esta no banco e não é seu nem dinheiro é"
				])}
			</div>
		</div>
		<Footer />
	</div>
</div>
