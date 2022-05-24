# Medium

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

## Template literal Types

- TypeScript 4.1 부터 사용할 수 있다.
- JavaScript의 template literal을 사용하여 타입을 쉽게 선언할 수 있다.

#### e.g.

```ts
// simple e.g.
type T1 = 'Hello';
type T2 = 'World';

type T3 = `${T1} ${T2}`; // Hello World

// with union types
type T4 = 'A' | 'B';
type T5 = 'C' | 'D';

type T6 = `{${T1},${T2}}`; // "{A,C}" | "{A,D}" | "{B,C}" | "{B,D}"

// trim right
type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T;

type trimed = TrimRight<'Hello World   '>;

// replace
type Replace<
	S extends string,
	From extends string,
	To extends string,
> = From extends ''
	? S
	: S extends `${infer S1}${From}${infer S2}`
	? `${S1}${To}${S2}`
	: S;

type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'
```

#### Ref

- https://toss.tech/article/template-literal-types
