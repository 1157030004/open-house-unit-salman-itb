module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				nutino: ["Nunito", "sans-serif"],
				ibm: ['"IBM Plex Sans Arabic"', "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
