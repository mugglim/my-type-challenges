type Merge<T, P> = {
	[key in keyof T | keyof P]: key extends keyof P
		? P[key]
		: key extends keyof T
		? T[key]
		: never;
};

type Foo = {
	a: number;
	b: string;
};
type Bar = {
	b: number;
	c: boolean;
};

type Result = Merge<Foo, Bar>; // expected to be {a: number, b: number, c: boolean}
