import { writable } from './localStore'

export const preferences = writable(
    'preferences',
    { theme: 'dark' }
)
// import { writable } from "svelte/store"
// export const theme = writable('dark')