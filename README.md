# className
---

clsssName prefixer

## install

```
npm install class-prefixer
```

## example

```javascrpt

import className from 'class-prefixer';

// base
let cls = className('pre');
cls() // pre
cls('a b') // pre-a pre-b;
cls({a: true, b: true}) // pre-a pre-b;
cls('a', 'b c') // pre-a b c;
cls('a', {b: true, c: false}) // pre-a b;
cls = cls.add('next');
cls('a') // pre-next-a
  
```

在react中的使用:

```javascript

import className from 'class-prefixer';
const cls = className('app');
const clsBody = cls.add('body');

export default function App(props) {
  return <div className={cls}>
    <div className={cls('header')}>header</div>
    <div className={clsBody}>
      <div className={clsBody('content')}>
        body content
        <a className={clsBody('link', { actived: true })}>link</a>
      </div>
    </div>
  </div>;
}

ReactDOM.render(<App />, document.getElementById('__react-content'));

```

对应到less中:

```less
.app {
  color: #aaa;
  &-header {
    color: #bbb;
  }
  &-body {
    color: #ccc;
    &-content {
      color: #ddd;
    }
    &-link.actived {
      color: blue;
    }
  }
}
```

最终转换成的css, 这种没有嵌套的css格式性能是最好的:

```css

.app { color: #aaa; }
.app-header { color: #bbb; }
.app-body { color: #ccc; }
.app-body-content { color: #ddd; }
.app-body-link.actived { color: blue; }

```

