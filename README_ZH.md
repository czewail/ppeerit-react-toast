# React.js的简易提示信息.
[English README](README.md)
## 安装
使用 npm
```sh
$ npm install ppeerit-react-toast --save
```
## 引入到项目中
```js
// ES6
// ReactToast 是一个react组件，最好将只放到较顶层的DOM中
// toast 是一个对象，里面包含了操作toast的函数
import ReactToast, {toast} from 'ppeerit-react-toast';
```
## 显示提示信息
引入组件后，只需简单的调用函数即可
```js
toast.show('这是一个提示信息!!!');
```
## 参数
toast.show 函数有 `message`, `type`, `config` 3个参数
`toast.show(message, type, config)`

`message` 为显示的内容.

注意： `message` 属性为必须设置

`type` 预置以下可选属性:

- `success` 显示成功的样式.
- `warning` 显示警告的样式.
- `error` 显示错误的样式.
- `info` 显示默认信息的样式.

`config` 是其他配置参数，以下参数为可选参数：

- `timeout` 显示提示信息的持续时间，默认为 `3000`
- `position` 显示提示信息的位置，默认选择 `default`，可选：
    * `top` 顶部提示.
    * `bottom` 底部提示.
    * `default` 中下部分提示.
- `backgroundColor` 提示信息的自定义背景色，此设置会覆盖 `type` 属性的样式.
- `textColor` 提示信息的字体颜色, 此设置会覆盖 `type` 属性的样式.


## 更多功能开发中 ...

