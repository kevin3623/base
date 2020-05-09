// 正式环境 10次点击触发  显示vconsole
// require('vconsole') // vconsole 插件可以在其他地方引入，也可以在这里引入
let lastClickTime = 0
let count = 0

if (process.env.NODE_ENV === 'development'){ // development 开发环境显示vConsole
  showVConsoleElement()
} else { // 正式环境 创建触发 vcTigger 标签
  const vcTigger = document.createElement('div')
  vcTigger.classList.add('vc-tigger')
  vcTigger.onclick = toggleVc
  document.body.appendChild(vcTigger)
}

function showVConsoleElement(){
  let time = setInterval(() => {
    let vConsoleElement = document.getElementById('__vconsole')
    if (vConsoleElement) {
      clearInterval(time)
      vConsoleElement.style.display = 'block'
      console.log('dd', vConsoleElement);
    }
  }, 0);
}
function toggleShow(element){
  if (element.style.display === 'block'){
    element.style.display = 'none'
  } else {
    element.style.display = 'block'
  }
}
function toggleVc(){
  console.log('点击隐藏标签');

  const nowTime = new Date().getTime();
  if (nowTime - lastClickTime < 3000){
    count++;
  } else {
    count = 0;
  }
  lastClickTime = nowTime;
  if (count >= 10) {
    let vConsoleElement = document.getElementById('__vconsole');
    toggleShow(vConsoleElement)
    // vConsoleElement.style.display = 'block'
    count = 0;
  }
}
