# onready.js

```js
_onReady(testCallback, readyCallback);
```

Example
```js
_onReady(function () {
    // Test
    return $; 
}, function () {
    // Executed when found
    $('#my_element_1').show();
});
```

Usage
```html
<script src="https://cdn.jsdelivr.net/gh/erlangparasu/onready.js/dist/onready.js"></script>
```
