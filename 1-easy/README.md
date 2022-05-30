# 1-Easy

## [4. Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)

- [인덱스 시그니처](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)를 학습하자. <detail> </detial>

```ts
type MyPick<T, K extends keyof T> = {
	[key in K]: T[key];
};
```

## [7. Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md)

- [readonly](https://www.typescriptlang.org/docs/handbook/classes.html#readonly-modifier) 키워드를 학습하자

```ts
type MyReadonly<T> = {
	readonly [key in keyof T]: T[key];
};
```

## [11. Tuple to Object](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md)

- [리터럴 타입](https://www.typescriptlang.org/docs/handbook/literal-types.html)을 학습하자.
- 인덱스 시그니처에서 `T[number]`의 의미를 이해하자. (if T extends any[])

```ts
type TupleToObject<T extends readonly (string | number)[]> = {
	[prop in T[number]]: prop;
};
```

## [14. First of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md)

- [조건부 타입](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types) 을 학습하자.
- 조건부 타입에서 [infer](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types)의 용도를 이해하자

```ts
type First<T extends any[]> = T extends [infer H, ...infer Rest] ? H : never;
```

## [18. Length of Tuple](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md)

- 제네릭 타입 T가 배열일 때, T에 접근할 수 있는 속성(property)를 학습하자.

```ts
type Length<T> = T extends unknown[] ? T['length'] : never;
```

## [43. Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md)

- 조건부 타입의 분배 법칙을 학습하자.

```ts
/*
	<e.g. T : a | b | c , U : a>

	1. type Result = (a extends a ? never : a)
			| (b extends a ? never : b)
			| (c extends a ? never : c)
	2. type Result = (never)
		| (b)
		| (c)
	3. type Result = b | c
*/
type MyExclude<T, U> = T extends U ? never : T;
```

## [189. Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md)

- nested conditional types을 학습하자.
- VSCode에서 Promise 타입을 확인해보자

```ts
type MyAwaited<T> = T extends Promise<infer R>
	? R extends Promise<unknown>
		? MyAwaited<R>
		: R
	: never;
```

## [268. If](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md)

- 제네릭 타입 파라미터 C가 무엇을 상속받아야 할지 고민해보자.

```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```

## [533. Concat](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md)

- [나머지 매개변수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)를 학습하자.

```ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```

## [3057. Push](https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md) & [3060. Unshift](https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md)

- 타입스크립트에서 나머지 연산자를 사용할 수 있는 위치를 생각해보자. (JavaScript와 다르다)

```ts
type Push<T extends unknown[], U> = [...T, U];

type Unshift<T extends unknown[], U> = [U, ...T];
```

## [3312. Parameters](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md)

- `infer`와 나머지 연산자를 고민해보자.

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (
	...args: infer R
) => void
	? R
	: never;
```
