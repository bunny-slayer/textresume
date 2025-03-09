

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.68108f81.js","_app/immutable/chunks/scheduler.7da07d1d.js","_app/immutable/chunks/index.d10b024c.js"];
export const stylesheets = ["_app/immutable/assets/2.2178bbfe.css"];
export const fonts = [];
