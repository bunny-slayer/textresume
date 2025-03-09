

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dba51f85.js","_app/immutable/chunks/scheduler.7da07d1d.js","_app/immutable/chunks/index.d10b024c.js"];
export const stylesheets = ["_app/immutable/assets/0.c0f89c65.css"];
export const fonts = [];
