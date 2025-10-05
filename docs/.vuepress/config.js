module.exports = {
  base: '/',// <--- must be root for user page
  title: 'My Portfolio',
  description: 'My VuePress Portfolio Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects.html' },
      { text: 'Contact', link: '/contact.html' }
    ]
  }
}