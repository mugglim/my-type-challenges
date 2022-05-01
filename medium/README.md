## Generics

```ts
// default generic value
type MyG<T, K = keyof T> = {
	//..
};
```

## `infer` with rest parameters

- `4.0` 이후의 버전 부터 전개 연산자는 마지막에 위치 하지 않아도 된다.

```ts
// T ? true : false (Head can be empty array)
type CanSplit<T extends any[]> = T extends [...infer Head, infer Tail]
	? true
	: false;
```
