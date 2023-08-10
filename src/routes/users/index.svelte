<script type="ts">

  type User = {
    id: number,
    address: string,
    mail: string,
    name: string,
    tel: string
  }
  type UserList = {
		code: number,
    users: User[]
	};
  export let users_list: UserList;

</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<div class="users">
  <!-- svelte-ignore empty-block -->
  {#each users_list.users as list(list.id)}
    <div>{list.id}: {list.name}</div>
    <form
      action="?_method=DELETE"
      method="post"
    >
      <input type="hidden" name="id" value="{list.id}"/>
      <button>削除</button>
    </form>
  {/each}
  <div>
    <form
      action="?_method=PATCH"
      method="post"
    >
      <input type="text" name="name"/>
      <input type="text" name="address"/>
      <input type="text" name="tel"/>
      <input type="text" name="mail"/>
      <button>追加</button>
    </form>
  </div>
</div>

<style lang="scss">
    
</style>