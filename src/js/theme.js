const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};
//console.log(refs.themeSwitch);

refs.themeSwitch.addEventListener('change', (e) => {
  //console.log(e.target.checked);
  if (e.target.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
   }
});

const savedTheme = localStorage.getItem('Theme');

if (savedTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitch.checked = true;
}else {
  refs.body.classList.add(Theme.LIGHT);
};