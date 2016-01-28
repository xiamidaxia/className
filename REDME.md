# className
---

clsssName prefixer

## install

```
npm install class-prefixer
```

## example

```javascrpt
   let cls = className('pre');
   cls() // pre
   cls('a b') // pre-a pre-b;
   cls({a: true, b: true}) // pre-a pre-b;
   cls('a', 'b c') // pre-a b c;
   cls('a', {b: true, c: false}) // pre-a b;
   cls = cls.add('next');
   cls('a') // pre-next-a
```