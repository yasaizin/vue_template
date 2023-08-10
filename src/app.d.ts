/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		account_uid: string;
		error_data: dict; 
	}

	// interface Platform {}

	// interface Session {}

	// interface Stuff {}
}
