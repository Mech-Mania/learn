// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mechmania Docs',
			social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Mech-Mania/learning' }
            ],
			sidebar: [
                {
                    label: 'Getting Started',
                    autogenerate: {directory: "getting-started"}
                },
                {
                    label: 'lessons',
                    items: [
                        {
                            label: "u1 intro",
                            autogenerate: {directory: "lessons/u1-intro"},
                        },
                        {
                            label: "u2 design",
                            autogenerate: {directory: "lessons/u2-design"},
                        },
                        {
                            label: "u3 electrical",
                            autogenerate: {directory: "lessons/u3-electrical"},
                        },
                        {
                            label: "u4 programming",
                            autogenerate: {directory: "lessons/u4-programming"},
                        },
                    ]
                },
                {
                    label: 'Guides',
                    autogenerate: {directory: "guides"}
                },


			],
		}),
	],
});
