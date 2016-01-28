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

used in react

```javascript

import className from 'class-prefixer';
const cls = className('app');
const clsBody = cls.add('body');

export default function App() {
  return <div className={cls}>
    <div className={cls('header')}>header</div>;
    <div className={clsBody}>
      <div className={clsBody('content')}>body content</div>
    </div>;
  </div>;
}

```

In less maybe like this

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
  }
}
```
Transform into css

```css

.app { color: #aaa; }
.app-header { color: #bbb; }
.app-body { color: #ccc; }
.app-body-content { color: #ddd; }

```

