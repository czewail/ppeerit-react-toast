# Toast for React.js.
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
toast.show function has `message`, `type` attributes
`toast.show(message, type)`

`message` is the toast content.

the `message` attribute must be set

`type` can use this variants:

- `success` render success style.
- `warning` render warning style.
- `error` render error style.

## wait more ability ...

