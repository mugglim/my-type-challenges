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

### [459. Flatten](https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md)

<details>
<summary>정리</summary>

```ts
type Flatten<T extends unknown[]> = T extends [infer Head, ...infer Rest]
	? Head extends unknown[]
		? [...Flatten<Head>, ...Flatten<Rest>]
		: [Head, ...Flatten<Rest>]
	: [];
```

</details>

### [527. Append to object](https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md)

- 문자열 제네릭 타입을 인덱스 시그니처로 사용하는 방법을 익히자.
- [Typescript: How to use a generic parameter as object key](https://stackoverflow.com/questions/56419558/typescript-how-to-use-a-generic-parameter-as-object-key)

<details>
<summary>정리</summary>

```ts
type AppendToObject<T extends object, U extends string, V extends unknown> = {
	[key in keyof T | U]: key extends keyof T ? T[key] : V;
};
```

</details>

### [529. Absolute](https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md)

- ✅ `Bigint.toString()`은 `Number.toString()`과 동일하게 동작한다.

```js
1024n.toString(); // "1024"
1111_1111_111n.toString(); // "11111111111"
```

<details>
<summary>정리</summary>

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`
	? R
	: `${T}`;
```

</details>

### [531. String to Union](https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md)

<details>
<summary>정리</summary>

```ts
type StringToUnion<T extends string> = T extends `${infer Head}${infer Rest}`
	? Head | StringToUnion<Rest>
	: never;
```

</details>

### [599. Merge](https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md)

<details>
<summary>정리</summary>

```ts
type Merge<F extends object, S extends object> = {
	[key in keyof F | keyof S]: key extends keyof S
		? S[key]
		: key extends keyof F
		? F[key]
		: never;
};
```

</details>

### [612. KebabCase](https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md)

- [Capitalize\<StringType>](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype)과 [Uncapitalize\<StringType>](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uncapitalizestringtype)을 활용해보자.

<details>
<summary>정리</summary>

```ts
type KebabCase<S extends string> = S extends `${infer Head}${infer Rest}`
	? Rest extends Uncapitalize<Rest>
		? `${Uncapitalize<Head>}${KebabCase<Rest>}`
		: `${Uncapitalize<Head>}-${KebabCase<Rest>}`
	: S;
```

</details>

### [645. Diff](https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md)

<details>
<summary>정리</summary>

```ts
// prettier-ignore
type Diff<O extends object, O1 extends object> = {
	[key in | Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: key extends keyof O
		? O[key] 
		: key extends keyof O1 ? O1[key]: never;
};
```

</details>

### [949. AnyOf](https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md)

- 빈 배열, 빈 객체를 어떻게 처리할지 고민해보자.

<details>
<summary>정리</summary>

- `never[]`은 빈 배열을 의미한다.
- `{[key:string]:never}`은 빈 객체를 의미한다.

```ts
type Falsy =
	| 0
	| ''
	| false
	| undefined
	| null
	| never[]
	| { [key: string]: never };

type IsNotFalsy<T> = T extends Falsy ? false : true;

type AnyOf<T extends any[]> = T extends [infer Head, ...infer Rest]
	? IsNotFalsy<Head> extends true
		? true
		: AnyOf<Rest>
	: false;
```

</details>

### [1042. IsNever](https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md)

- 아래의 코드를 작성해보고, 결과를 이해한 후 문제를 풀어보자.

```ts
type IsNever1 = never extends never ? true : false;
type IsNever2<T> = T extends never ? true : false;

type T1 = IsNever1; // 🙄 ???
type T2 = IsNever2<never>; // 🙄 ???
```

<details>
<summary>정리</summary>

- `T1`과 `T2` 타입의 결과가 모두 true일 것 같지만, `T2`는 `never` 타입이 할당된다.
- 관련 [Issue](https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919)를 확인해보자.

```ts
type IsNever<T> = [T] extends [never] ? true : false;
```

</details>

### [1130. ReplaceKeys](https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.md)

- 아래 코드를 직접 작성해본 뒤, `Foo<VList>`의 결과를 예측해보자.

```ts
type V1 = { x: 1 };
type V2 = { x: 1; y: 2 };
type V3 = { x: 1; y: 2; z: 3 };

type VList = V1 | V2 | V3;

type Foo<T> = {
	[key in keyof T]: T[key];
};

// 🙄 what is this?
type T = Foo<VList>;
```

<details>
<summary>정리</summary>

- `Foo<VList>`는 `Foo<V1> | Foo<V2> | Foo<V3>`로 평가된다.

```ts
type ReplaceKeys<U, T, Y> = {
	[key in keyof U]: key extends T
		? key extends keyof Y
			? Y[key]
			: never
		: U[key];
};
```

</details>

### [1367. Remove Index Signature](https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md)

- 직관적으로 해법이 떠오르지 않는다.
- 어렵다면 풀이를 보고 다시 풀어보자!..

<details>
<summary>정리</summary>

```ts
type RemoveIndexSignature<T extends object> = {
	[key in keyof T as key extends `${infer S}` ? S : never]: T[key];
};
```

</details>

### [4803. Trim Right](https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.md)

<details>
<summary>정리</summary>

```ts
type TrimMatch = `\n` | `\t` | ' ';

type TrimRight<S extends string> = S extends `${infer R}${TrimMatch}`
	? TrimRight<`${R}`>
	: S;
```

</details>

### [5117. Without](https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md)

<details>
<summary>정리</summary>

```ts
type ToUnion<T> = T extends unknown[] ? T[number] : T;

type Without<T extends unknown[], U> = T extends [infer F, ...infer R]
	? F extends ToUnion<U>
		? Without<R, U>
		: [F, ...Without<R, U>]
	: [];
```

</details>

### [5140. Trunc](https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.md)

<details>
<summary>정리</summary>

```ts
type Trunc<T extends number | string> = `${T}` extends `${infer F}.${infer L}`
	? F
	: `{T}`;
```

</details>

### [5153. IndexOf](https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.md)

- 제네릭을 통해 인덱스를 카운팅 할 방법을 고민해보자.
- 어떻게 두 타입이 동일한 level의 타입이라고 비교할 수 있을까?
  - 관련 [Issue](https://github.com/microsoft/TypeScript/issues/27024)를 한 번 살펴보자..

<details>
<summary>정리</summary>

```ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
	? 1
	: 2
	? true
	: false;

type IndexOf<T extends unknown[], U, L extends unknown[] = []> = T extends [
	infer HEAD,
	...infer REST,
]
	? Equal<HEAD, U> extends true
		? L['length']
		: IndexOf<REST, U, [...L, 0]>
	: -1;
```

</details>

### [5310. Join](https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md)

<details>
<summary>정리</summary>

```ts
type Join<T extends unknown[], U extends number | string> = T extends [infer HEAD extends string | number, ...infer REST]
  ? REST extends []
    ? HEAD
    : `${HEAD}${U}${Join<REST, U>}`
  : never
```

</details>

### [5310. LastIndexOf](https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md)

<details>
<summary>정리</summary>

```ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
	? 1
	: 2
	? true
	: false;

type LastIndexOf<T extends unknown[], U> = T extends [...infer REST, infer TAIL]
	? Equal<TAIL, U> extends true
		? REST['length']
		: LastIndexOf<REST, U>
	: -1;
```

</details>
