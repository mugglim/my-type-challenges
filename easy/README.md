## Mapped Types

- 기존의 타입을 새로운 형태의 타입으로 변환한다.
- 맵드 타입은 **인덱스 시그니쳐**에서 사용된다.
- attribute를 삭제할 때는 `-` 를 사용한다.

#### make readonly attribute

```ts
type Foo<T> = {
	readonly [K in keyof T]: T[K];
};
```

#### make optional attribute

```ts
type Foo<T> = {
	[K in keyof T]?: T[K];
};
```

#### remove readonly attribute

```ts
type Foo<T> = {
	-readonly [K in keyof Foo]: T[K];
};
```

#### remove optional attribute

```ts
type Foo<T> = {
	[K in keyof Foo]-?: T[K];
};
```

## Generics

#### Check array is empty

```ts
type Empty<T extends any[]> = T extends [] ? true : false;
```
