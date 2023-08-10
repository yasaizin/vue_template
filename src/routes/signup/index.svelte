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
    <title>ログイン画面</title>
</svelte:head>

<div id="Sign-Up">
    <form
        action="?_method=POST"
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
        <button>送信</button>
    </form>
    {#if data.login_error }
    <div>アカウント情報が間違っています</div>
    {/if}
    {#if data.account_uid }
    <div>{ data.account_uid }</div>
    <div>
        <form 
            action="?_method=DELETE"
            method="post"
        >
            <button>削除</button>
        </form>
    </div>
    {/if}
</div>

<style lang="scss">

</style>