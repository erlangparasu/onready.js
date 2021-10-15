# onready.js

```js
_onReady(testCallback, readyCallback);
```

Example
```js
_onReady(function () {
    return typeof $ === "function";
}, function () {
    $('#my_div').show();
});
```

How To Install
```html
<script src="https://cdn.jsdelivr.net/gh/erlangparasu/onready.js/dist/onready.js"></script>
```
