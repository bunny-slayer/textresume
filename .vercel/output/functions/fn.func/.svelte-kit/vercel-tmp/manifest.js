export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["data/profile.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.534bb881.js","app":"_app/immutable/entry/app.9e4ab9ba.js","imports":["_app/immutable/entry/start.534bb881.js","_app/immutable/chunks/scheduler.7da07d1d.js","_app/immutable/chunks/singletons.2ebeed2b.js","_app/immutable/entry/app.9e4ab9ba.js","_app/immutable/chunks/scheduler.7da07d1d.js","_app/immutable/chunks/index.d10b024c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
