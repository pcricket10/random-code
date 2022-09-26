
const appList = Object.values(apps);

const appTitle = document.getElementById('app-name');
const display = document.getElementById('display');
const options = document.getElementById('options');

const setDisplay = () => {
  console.log(appTitle)
  let selectedApp = appList[0];
  console.log(selectedApp, "!!!")
  appTitle.innerText = selectedApp.title;
  appTitle.style.color = selectedApp.color;
  document.title = selectedApp.title;
  // <span style={} id='app-name'></span>
};

document.addEventListener('DOMContentLoaded', () => {
  setDisplay();

});
