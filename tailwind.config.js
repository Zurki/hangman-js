/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'press-start': ['"Press Start 2P"', 'cursive'],
            },
            colors: {
                retro: {
                    pink: '#ff00ff',
                    blue: '#00ffff',
                    purple: '#9900ff',
                    yellow: '#ffff00',
                    green: '#00ff00',
                },
            },
            animation: {
                'text-flicker': 'text-flicker 1.5s infinite alternate',
                'neon-glow': 'neon-glow 1s ease-in-out infinite alternate',
                'scanline': 'scanline 6s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'glitch': 'glitch 0.5s infinite',
            },
            keyframes: {
                'text-flicker': {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
                        opacity: '1',
                    },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
                        opacity: '0.4',
                    },
                },
                'neon-glow': {
                    '0%, 100%': {
                        'text-shadow': '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff00ff, 0 0 82px #ff00ff, 0 0 92px #ff00ff, 0 0 102px #ff00ff, 0 0 151px #ff00ff',
                    },
                    '50%': {
                        'text-shadow': '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #ff00ff, 0 0 73px #ff00ff, 0 0 80px #ff00ff, 0 0 94px #ff00ff, 0 0 140px #ff00ff',
                    },
                },
                'scanline': {
                    '0%': {
                        transform: 'translateY(-100%)',
                    },
                    '100%': {
                        transform: 'translateY(100%)',
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)',
                    },
                },
                'glitch': {
                    '0%, 100%': {
                        'clip-path': 'inset(50% 0 50% 0)',
                    },
                    '20%': {
                        'clip-path': 'inset(60% 0 40% 0)',
                    },
                    '40%': {
                        'clip-path': 'inset(40% 0 60% 0)',
                    },
                    '60%': {
                        'clip-path': 'inset(30% 0 70% 0)',
                    },
                    '80%': {
                        'clip-path': 'inset(70% 0 30% 0)',
                    },
                },
            },
            backgroundImage: {
                'retro-grid': 'linear-gradient(transparent 0%, rgba(255,0,255,0.2) 2%, rgba(255,0,255,0.2) 98%, transparent 100%), linear-gradient(90deg, transparent 0%, rgba(255,0,255,0.2) 2%, rgba(255,0,255,0.2) 98%, transparent 100%)',
                'retro-gradient': 'linear-gradient(180deg, rgba(255,0,255,0.2) 0%, rgba(0,255,255,0.2) 100%)',
            },
            backgroundSize: {
                'retro-grid': '100px 100px',
            },
        },
    },
    plugins: [],
}

