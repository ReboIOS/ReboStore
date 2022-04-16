<template>
  <div class="page">
  <div class="navbar">
  <div class="navbar-inner sliding">
  <div class="left">
  <a href="#" class="link back">
  <i class="icon icon-back"></i>
  <span class="ios-only">Back</span>
  </a>
  </div>
  <div class="title">Theming</div>
  </div>
  </div>
  <div class="page-content">
  <div class="block-title">Layout</div>
  <div class="block">
  <p>This theme will change the overall color scheme of app.</p>
  <div class="row">
  
  <div class="col-50" @click="setLayoutTheme('light')" style="background: #FFF; cursor: pointer; padding: 30px; border: none; border-radius: 10px;"></div>
  
  <div class="col-50" @click="setLayoutTheme('dark')"  style="background: #1D1D27; cursor: pointer; padding: 30px; border: none; border-radius: 10px;"></div>
  
  
  </div>
  </div>
  
  <div class="block-title">Tint</div>
  <div class="block">
  <p>app has {{colorsAmount}} preset tint themes to choose from.</p>
  <div class="row">
  {{#each colors}}
  <div class="col-25 bg-color-{{this}}"  @click="setColorTheme('{{this}}')" style="cursor: pointer; padding: 30px; margin-bottom: 10px; border: none; border-radius: 10px;"></div>
  {{/each}}
  
  </div>
  </div>
  </div>
  </div>
  </template>
  <style scoped>
    .button {
      margin-bottom: 1em;
      text-transform: capitalize;
    }
  </style>
  <script>
    return {
      data: function () {
        var colors = [
          'red',
          'green',
          'blue',
          'pink',
          'yellow',
          'orange',
          'gray',
          'black',
        ];
        return {
          colors: colors,
          colorsAmount: colors.length,
        };
      },
      methods: {
        setLayoutTheme: function (theme) {
          var self = this;
          $$("body").removeClass('theme-dark').removeClass('theme-light').removeClass('theme-dark2').removeClass('theme-oled').addClass('theme-' + theme);
          if (localStorage.getItem('theme')) { localStorage.clear(); }
          localStorage.setItem('theme', 'theme-' + theme);
        },
        setColorTheme: function (color) {
          var self = this;
          var app = self.$app;
          var currentColorClass = document.getElementsByTagName("body")[0].className.match(/color-theme-([a-z]*)/);
          if (currentColorClass) $$("body").removeClass(currentColorClass[0])
            $$("body").addClass('color-theme-' + color);
            if (localStorage.getItem('color-theme')) { localStorage.clear(); }
            localStorage.setItem('color-theme', 'color-theme-' + color);
        },
      }
    }
  </script>