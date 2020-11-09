((doc, win) => {
    let metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    document.getElementsByTagName('head')[0].appendChild(metaEl);
    //声明多个变量 赋值
    let docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = () => {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                //更改ipad适配
                docEl.style.fontSize = 100 * (clientWidth / 750 / 2) + 10 + 'px';
            }
            else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//立即执行函数