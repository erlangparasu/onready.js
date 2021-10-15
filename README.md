# onready.js

```js
_onReady(testCallback, readyCallback);
```

## Example
```js
_onReady(function () {
    return typeof $ === "function";
}, function () {
    $('#my_div').show();
});
```

## How It Works
Using intervals to try to run the test until it gets a true value before running the actual function. 

## How To Install
```html
<script src="https://cdn.jsdelivr.net/gh/erlangparasu/onready.js/dist/onready.js"></script>
```
