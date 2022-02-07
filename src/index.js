import './styles.css';

const newsURL = 'https://api.hnpwa.com/v0/news/1.json';
const $app = document.getElementById('root');

const ajax = new XMLHttpRequest();
ajax.open('GET', newsURL, false); // false 동기
ajax.send();

const newsfeed = JSON.parse(ajax.response);
console.log(newsfeed);

let appInnerHTML = `<ul>
  ${newsfeed.map((item) => `<li>${item.title}</li>`).join('')}
</ul>
`;

$app.innerHTML = appInnerHTML;
