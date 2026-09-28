import { getPermalink } from './utils/permalinks';

const SUBSTACK_URL = 'https://fastbatch.substack.com/';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Blog',
      href: SUBSTACK_URL,
      target: '_blank',
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Get in touch', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Blog', href: SUBSTACK_URL, target: '_blank' },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:fast.batch.ai@gmail.com' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/fastbatchai' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/amal-f-64302555/' },
    { ariaLabel: 'Blog', icon: 'tabler:article', href: SUBSTACK_URL },
  ],
};
