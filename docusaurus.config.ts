import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js. Don't use client-side code here (browser APIs, JSX...).

const repoEditUrl = 'https://github.com/MikanXR/MikanXR.github.io/edit/main/';

// Each product gets its own docs instance: its own folder under docs/, its own
// sidebar, and its own route under /docs/. The MikanXR instance is the preset's
// default instance, the others are added as plugins.
const productDocs = [
  {id: 'mikantrack', label: 'MikanTrack'},
  {id: 'mikanstudio', label: 'MikanStudio'},
];

const config: Config = {
  title: 'MikanXR',
  tagline: 'Mixed reality camera calibration and video compositing.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: true,
  },

  url: 'https://mikanxr.org',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'MikanXR',
  projectName: 'MikanXR.github.io',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      ja: {label: '日本語', htmlLang: 'ja'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs/mikanxr',
          routeBasePath: 'docs/mikanxr',
          sidebarPath: './sidebars.ts',
          editUrl: repoEditUrl,
          editLocalizedFiles: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: productDocs.map(({id}) => [
    '@docusaurus/plugin-content-docs',
    {
      id,
      path: `docs/${id}`,
      routeBasePath: `docs/${id}`,
      sidebarPath: './sidebars.ts',
      editUrl: repoEditUrl,
      editLocalizedFiles: true,
      showLastUpdateTime: true,
    },
  ]),

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'ja'],
        indexBlog: false,
        docsRouteBasePath: ['docs/mikanxr', ...productDocs.map(({id}) => `docs/${id}`)],
        docsDir: ['docs/mikanxr', ...productDocs.map(({id}) => `docs/${id}`)],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/demo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MikanXR',
      logo: {
        alt: 'MikanXR',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          items: [
            {type: 'docSidebar', sidebarId: 'docs', label: 'MikanXR'},
            ...productDocs.map(({id, label}) => ({
              type: 'docSidebar' as const,
              sidebarId: 'docs',
              docsPluginId: id,
              label,
            })),
          ],
        },
        {
          href: 'https://github.com/MikanXR/MikanXR/releases',
          label: 'Download',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/MikanXR',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'MikanXR', to: '/docs/mikanxr'},
            ...productDocs.map(({id, label}) => ({label, to: `/docs/${id}`})),
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Releases', href: 'https://github.com/MikanXR/MikanXR/releases'},
            {label: 'Wiki', href: 'https://github.com/MikanXR/MikanXR/wiki'},
            {label: 'Issues', href: 'https://github.com/MikanXR/MikanXR/issues'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/MikanXR'},
            {label: 'Email', href: 'mailto:brendan@mikanxr.org'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MikanXR. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'cpp', 'lua', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
