routes = [
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
];
