/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: '15px',
	},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px'
	},
  	extend: {
  		colors: {
			primary: '#1c1c22',
			accent: {
				//DEFAULT: '#00ff99',
				//hover: '#00e187',
				DEFAULT: '#5D83E8',
				hover: '#4961DC',
				
			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontFamily: {
			// 👇 Add CSS variables
			mono: ["var(--font-roboto-mono)"],
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
