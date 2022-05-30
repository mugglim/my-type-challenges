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
