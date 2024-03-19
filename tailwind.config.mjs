/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				"primary-negative": "var(--color-primary-negative)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				"muted-accent": "var(--color-muted-accent)"
			},
			keyframes: {
				bounce: {
					'0%, 100%': {
					  transform: 'translateY(0)' 
					},
					'50%': {
					  transform: 'translateY(5px)' 
					}
				  }
			  },
			  animation: {
				fadeIn: 'fadeIn 2s ease-out', 
				bounce: 'bounce 2s infinite 3.5s' 
			  }
			}
	},
	plugins: [],
}
