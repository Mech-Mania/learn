// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Mechmania Docs',
          social: [
              { icon: 'github', label: 'GitHub', href: 'https://github.com/Mech-Mania/docs' }
          ],
          customCss: [
              // Path to your Tailwind base styles:
              './src/styles/global.css',
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
                          label: "U1 intro",
                          autogenerate: {directory: "lessons/u1-intro"},
                      },
                      {
                          label: "U2 design",
                          autogenerate: {directory: "lessons/u2-design"},
                      },
                      {
                          label: "U3 electrical",
                          autogenerate: {directory: "lessons/u3-electrical"},
                      },
                      {
                          label: "U4 programming",
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
