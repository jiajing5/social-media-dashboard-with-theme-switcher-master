var switchTheme = document.getElementById('myonoffswitch');
switchTheme.addEventListener('click', toggleTheme);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'darktheme'){
    setTheme('lighttheme');
  } else {
    setTheme('darktheme');
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'darktheme') {
    setTheme('darktheme');
  } else {
    setTheme('lighttheme');
  }
})();