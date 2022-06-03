# 2-Medium

### [2. Get Return Type](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md)

<details>
<summary>정리</summary>
  
 - [ReturnType\<T\>](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html#returntypetype)의 개념을 학습하자.
 - 컴파일 시점의 [typeof](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html) 연산자가 어떤 역할을 하는지 학습하자
   - ✅ typeof는 컴파일과 런타임 시점에 모두 사용할 수 있다.

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

</details>

### [3. Omit](https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md)

<details>
<summary>정리</summary>
 
 - 제네릭에서 [extends](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)의 의미를 학습하자.

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
