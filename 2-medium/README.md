# 2-Medium

### [2. Get Return Type](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md)

- [ReturnType\<T\>](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html#returntypetype)의 개념을 학습하자.
- 컴파일 시점의 [typeof](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html) 연산자가 어떤 역할을 하는지 학습하자
  - ✅ typeof는 컴파일과 런타임 시점에 모두 사용할 수 있다.

<details>
<summary>정리</summary>

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

</details>

### [3. Omit](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md)

- 제네릭에서 [extends](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)의 의미를 학습하자.

<details>
<summary>정리</summary>

```ts
type Exclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = {
	[key in Exclude<keyof T, K>]: T[key];
};
```

</details>

### [8. Readonly 2](https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md)

<details>
<summary>정리</summary>

```ts
type Exclude<T, K> = T extends K ? never : T;

type MyReadonly2<T, K extends keyof T = keyof T> = {
	readonly [key in K]: T[key];
} & { [key in Exclude<keyof T, K>]: T[key] };
```

</details>

### [9. Deep Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md)

<details>
<summary>정리</summary>

```ts
// // keyof empty object is never e.g) keyof {} = never
type DeepReadonly<T> = {
	readonly [key in keyof T]: keyof T[key] extends never
		? T[key]
		: DeepReadonly<T[key]>;
};
```

</details>

### [10.Tuple to Union](https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md)

<details>
<summary>정리</summary>

```ts
// T[number] returns all types of T (if T is array)
type TupleToUnion<T extends unknown[]> = T[number];
```

</details>

### [15. Last of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md)

<details>
<summary>정리</summary>

```ts
type Last<T extends any[]> = T extends [...infer Head, infer Tail]
	? Tail
	: never;
```

</details>

### [16. Pop](https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md)

<details>
<summary>정리</summary>

```ts
type Pop<T extends any[]> = T extends [...infer Head, infer Tail]
	? [...Head]
	: never;
```

</details>

### [20. Promise.all](https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md)

<details>
<summary>정리</summary>

```ts
declare function PromiseAll<T extends unknown[]>(
	values: readonly [...T],
): Promise<{
	[key in keyof T]: T[key] extends Promise<infer R> ? R : T[key];
}>;
```

</details>

### [62. Type Lookup](https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md)

<details>
<summary>정리</summary>

```ts
type LookUp<U extends { type: string }, T extends U['type']> = U extends {
	type: T;
}
	? U
	: never;
```

</details>

### [106.Trim Left](https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md)

<details>
<summary>정리</summary>

```ts
type Empty = ' ' | '\n' | '\t';

type TrimLeft<S extends string> = S extends `${Empty}${infer R}`
	? TrimLeft<R>
	: S;
```

</details>

### [108. Trim](https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md)

<details>
<summary>정리</summary>

```ts
type Empty = ' ' | '\n' | '\t';

type TrimLeft<T> = T extends `${Empty}${infer R}` ? TrimLeft<R> : T;
type TrimRight<T> = T extends `${infer R}${Empty}` ? TrimRight<R> : T;

type Trim<S extends string> = TrimLeft<TrimRight<S>>;
```

</details>

### [110. Capitalize](https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md)

<details>
<summary>정리</summary>

<details>
<summary>정리</summary>

```ts
type MyCapitalize<S extends string> = S extends `${infer F}${infer T}`
	? `${Uppercase<F>}${T}`
	: '';
```

</details>

</details>

### [116. Replace](https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md)

<details>
<summary>정리</summary>

```ts
type Replace<
	S extends string,
	From extends string,
	To extends string,
> = From extends ''
	? S
	: S extends `${infer Head}${From}${infer Tail}`
	? `${Head}${To}${Tail}`
	: S;
```

</details>

### [119. ReplaceAll](https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md)

- `Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>` 이 테스트 케이스를 어떻게 처리할 지 고민해보자.

<details>
<summary>정리</summary>

```ts
type ReplaceAll<
	S extends string,
	From extends string,
	To extends string,
> = From extends ''
	? S
	: S extends `${infer Head}${From}${infer Tail}`
	? `${Head}${To}${ReplaceAll<`${Tail}`, From, To>}`
	: S;
```

</details>

### [191.Append Argument](https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md)

<details>
<summary>정리</summary>

```ts
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
	...args: infer Args
) => infer R
	? (...args: [...Args, A]) => R
	: never;
```

</details>

### [298. Length of String](https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md)

<details>
<summary>정리</summary>

```ts
// if T extends string, T['length'] is number type and isn't length of string
type LengthOfArray<T extends unknown[]> = T['length'];

// recursively convert string to array recursively
// e.g) "Foo" => ["F", ...["o", ...["o"]]] => ["F","o","o"]
type StringToArray<T extends string> = T extends `${infer Head}${infer Tail}`
	? [Head, ...StringToArray<Tail>]
	: [];

type LengthOfString<S extends string> = LengthOfArray<StringToArray<S>>;
```

</details>
