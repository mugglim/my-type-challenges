## Mapped Types

- 기존의 타입을 새로운 형태의 타입으로 변환한다.
- 맵드 타입은 **인덱스 시그니쳐**에서 사용된다.
- attribute를 삭제할 때는 `-` 를 사용한다.

```ts
// make readonly attribute
type Foo<T> = { readonly [K in keyof T]: T[K] };

// make optional attribute
type Foo<T> = { [K in keyof T]?: T[K] };

// remove readonly attribute
type Foo<T> = { -readonly [K in keyof Foo]: T[K] };

// remove optional attribute
type Foo<T> = { [K in keyof Foo]-?: T[K] };
```

## Conditional Types

```ts
type ConditionalType = T extends U ? X : Y;
```

- 만약 T가 U에 포함여부에 따라 X타입, Y타입을 분기하여 반환한다.
- 유니온 타입에서 `never` 키워드는 필터링 용도로 사용할 수 있다.

#### e.g.

```ts
type Extract<T, U> = T extends U ? T : never;
type Exclude<T, U> = T extends U ? never : T;
```

## `infer` in Conditional Type

```ts
type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// infer 키워드를 통해 number 타입을 조건부 연산자에 값으로 사용할 수 있다.
type NumberType = ArrayElementType<number[]>;
```

- infer의 뜻은 `추론하다`이다.
- 조건부 연산식에서 사용될 수 있다.
- infer 키워드로 선언 된 변수는 타입을 추론할 수 있기 때문에, 값으로 평가될 수 있다.
- 오직, `extends` 키워드와 함께 사용할 수 있다.

#### e.g.

```ts
// 함수의 반환 타입
type FnReturnType<T> = T extends (...args: any) => infer R ? R : T;

// 매개변수의 타입
type MyParameters<T> = T extends (...args: infer R) => any ? R : T;

// Promise 반환 타입
type MyAwaited<T> = T extends Promise<infer R>
	? R extends Promise<any> // for nested promise
		? MyAwaited<R>
		: R
	: never;
```
