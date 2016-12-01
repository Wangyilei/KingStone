

# model组件

## 组件描述

## 组件应用
1.var ComponentModel = require('model');
2.var model = ComponentModel.init($(dom));
$(dom) 就是 Model 中间要显示的内容


## 应用举例
```html
普通按钮
<div class="content"> Model 中间的内容</div>
```
```js
var ComponentModel = require('model');
var model = ComponentModel.init($('.content'));
modal.show();
model.hide();
```

## 所有API
show 显示 Model
hide 隐藏 Model