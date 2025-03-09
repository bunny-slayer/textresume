

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.98094656.js","_app/immutable/chunks/scheduler.7da07d1d.js","_app/immutable/chunks/index.d10b024c.js","_app/immutable/chunks/singletons.2ebeed2b.js"];
export const stylesheets = [];
export const fonts = [];
