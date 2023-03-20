function showNotification({top = 0, right = 0, className, html}) {

    let body = document.querySelector('body');
    let div = document.createElement('div');
  
    div.style.cssText = `top: ${top}px; right: ${right}px;`
    div.classList.add('notification', `${className}`);
    div.innerHTML = html;
    body.append(div);
  
    setTimeout(() => div.remove(), 1500);
    
  }