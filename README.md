# Toast for React.js.
[中文 README](README_ZH.md)
## Installation
use npm
```sh
$ npm install ppeerit-react-toast --save
```
## Import into your project
```js
// ES6
// ReactToast is a react component,you can add the ReactToast component in the higher dom node
// toast is a object that has some method to dispatch toast
import ReactToast, {toast} from 'ppeerit-react-toast';
```
## Show toast
just do the method
```js
toast.show('i`am a toast!!!');
```
## Options
toast.show function has `message`, `type`, `config` attributes
`toast.show(message, type, config)`

`message` is the toast content.

the `message` attribute must be set

`type` can use this variants:

- `success` render success style.
- `warning` render warning style.
- `error` render error style.
- `info` render info style.

`config` is the config set, it is a object

- `timeout` after the time, component will unmount. default value is `3000`
- `position` the place where will show the toast. default value is `default`
    * `top` top space.
    * `bottom` bottom space.
    * `default` middle-bottom space.
- `backgroundColor` custom background-color, it will replace `type` attr's style.
- `textColor` custom color, it will replace `type` attr's style.
## wait more ability ...

