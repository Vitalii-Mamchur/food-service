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
  console.log(e.target.checked);
  if (e.target.checked) {
    localStorage.setItem('Theme', 'DARK');
    refs.body.classList.add('dark-theme');
  } else {
    localStorage.setItem('Theme', 'LIGHT');
    refs.body.classList.replace('dark-theme','light-theme');
   }
});

const savedTheme = localStorage.getItem('Theme');

if (savedTheme === 'DARK') {
  refs.body.classList.add('dark-theme');
  refs.themeSwitch.checked = true;
}else {
  refs.body.classList.add('light-theme');
  refs.themeSwitch.checked = false;
};