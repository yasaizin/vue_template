<script lang="ts">
	import { enhance } from '$lib/form';
    let login_id: string = ""
    let login_password: string = ""
    type AccountData = {
        account_uid: string;
        login_error: boolean;
    };
    export let data: AccountData;
</script>

<svelte:head>
    <title>アカウント登録</title>
</svelte:head>

<div id="Sign-In">
    <form
        action="?_method=PATCH"
        method="post"
        use:enhance={{
			result: async ({ form }) => {
				form.reset();
			}
		}}
    >
        <ul class="table">
            <li>
                <th>ID</th>
                <td><input name="login_id" aria-label="login_id" aria-placeholder="login_id" bind:value="{login_id}"/></td>
            </li>
            <li>
                <th>PASSWORD</th>
                <td><input type="password" name="login_password" bind:value="{login_password}"/></td>
            </li>
        </ul>
        <button>登録</button>
    </form>
    {#if data.login_error }
    <div>既に登録されているアカウントです。</div>
    {/if}
</div>

<style lang="scss">

</style>