interface unchangeableProps {
    language:string,
    terminal_type:string,
    version:number
}
const unchangeable:unchangeableProps = {
    language: 'zh_CN',
    terminal_type: 'vue3.0+',
    version: 1.0,
}

export function serverMoudle(argument: any) {
    let changeable = {};
    if(localStorage.getItem("user_id") && localStorage.getItem("session_id")){
        changeable ={
            user_id: localStorage.getItem("user_id"),
            session_id: localStorage.getItem("session_id"),
        }
    }
    
    let paramsObj:any = JSON.parse(argument.Data);//将一个 JSON 字符串转换为对象

    let nObj:any = Object.assign({}, paramsObj, changeable, unchangeable);//用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target
                                                              //Object.assign方法的第一个参数是目标对象，后面的参数都是源对象
    let arg:any = {Data:JSON.stringify(nObj)};//将 JavaScript 值转换为 JSON 字符串。要转换的 JavaScript 值（通常为对象或数组）

    const _p = new URLSearchParams();

    for (const i in arg ) {

      _p.append(i, arg[i]);

    };

    return _p;

}

