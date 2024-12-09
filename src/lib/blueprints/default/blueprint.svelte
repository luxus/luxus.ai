<script lang="ts">
	type Props = {
		title: string;
		description: string;
		source: string;
		component: string;
		radix: string;
	};
	let { title, description }: Props = $props();
</script>

<slot {title} {description} />
