routes = [
  {
    path: '/',
    url: '/store/',
  },
  {
    path: '/:id/',
    url: '/section/{{id}}',
  },
  {
    path: '/odyssey',
    url: './pages/odyssey.php',
  },
  {
    path: '/unc0ver',
    url: './pages/unc0ver.php',
  },
  {
    path: '/videostar',
    url: './pages/videostar.php',
  },
{
    path: '/videostarari',
    url: './pages/videostar(Ari).php',
  },
  {
    path: '/pubg',
    url: './pages/pubg.php',
  },
  {
    path: '/8ball',
    url: './pages/8ball.php',
  },
  {
    path: '/appcake',
    url: './pages/appcake.php',
  },
  {
    path: '/install',
    url: './pages/install.php',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.php',
  },
];
