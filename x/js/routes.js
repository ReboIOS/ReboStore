routes = [
  {
    path: '/',
    url: '/index/',
  },
  {
    path: '/:id/',
    url: '/section/{{id}}',
  },
  {
    path: '/new',
    url: './pages/new.php',
  },
  {
    path: '/appleid',
    url: './pages/appleid.php',
  },
  {
    path: '/odyssey',
    url: './pages/odyssey.php',
  },
  {
    path: '/esign',
    url: './pages/esign.php',
  },
  {
    path: '/ppsspp',
    url: './pages/ppsspp.php',
  },
  {
    path: '/bolt',
    url: './pages/bolt.php',
  },
  {
    path: '/procam',
    url: './pages/procam.php',
  },
  {
    path: '/tiktok',
    url: './pages/tiktok.php',
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
    path: '/pubg',
    url: './pages/pubg.php',
  },
  {
    path: '/gta',
    url: './pages/gta.php',
  },
  {
    path: '/org',
    url: './pages/org.php',
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
    path: '/minecraft',
    url: './pages/minecraft.php',
  },
  {
    path: '/videofx',
    url: './pages/videofx.php',
  },
  {
    path: '/picsart',
    url: './pages/picsart.php',
  },
  {
    path: '/Kinemaster',
    url: './pages/kinemaster.php',
  },

app.request.promise.json('/search')
                    .then(function (res) {
                        var items = res.data;
                        var virtualList = app.virtualList.create({
                            // List Element
                            el: '.virtual-list',
                            // Pass array with items
                            items: items,
                            // Custom search function for searchbar
                            searchAll: function (query, items) {
                                var found = [];
                                for (var i = 0; i < items.length; i++) {
                                    if (items[i].appName.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
                                }
                                return found; //return array with mathced indexes
                            },
                            // List item Template7 template
                            itemTemplate: `<li class="media-item"><a href="/pages/{{id}}" class="item-link">
                      <div class="item-content">
                          <div class="item-media">
                              <img src="/{{icon}}"
                                  class="appiconx elevation-5 animated pulse"></div>
                          <div class="item-inner">
                              <div class="item-title-row">
                                  <div class="item-title">{{appName}}</div>
                              </div>
                              <div class="chip">
                                  <div class="chip-media bg-color-blue"><i
                                          class="icon f7-icons">gear</i>
                                  </div>
                                  <div class="chip-label">{{version}}</div>
                              </div>
                              <div class="chip">
                                  <div class="chip-media bg-color-blue"><i
                                          class="icon f7-icons">layers_alt_fill</i></div>
                                  <div class="chip-label">{{size}}</div>
                              </div>
                              <div class="chip">
                                  <div class="chip-media bg-color-blue"><i
                                          class="icon f7-icons">tag_fill</i>
                                  </div>
                                  <div class="chip-label">{{category}}</div>
                              </div>
                          </div>
                      </div>
                  </a></li>`,
                            // Item height
                            height: 82,
                        });

                    })
                    .catch(function (err) {
                        console.log(err.xhr)
                        console.log(err.status)
                        console.log(err.message)
                    });
            }
        }
    },

  {
    path: '/pages/:id',
    url: './pages/{{id}}',
  },

  {
    path: '/theming',
    componentUrl: './pages/theme.php',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.php',
  },
];
