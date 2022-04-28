type MyAwaited<T> = T extends Promise<infer R>
	? R extends Promise<any> // for nested promise
		? MyAwaited<R>
		: R
	: never;

// for testing
type A = Promise<string>;
type B = Promise<{ field: number }>;
type C = Promise<Promise<string | number>>;
type D = Promise<Promise<Promise<string | number | boolean>>>;

type TA = MyAwaited<A>; // string
type TB = MyAwaited<B>; // {field: number}
type TC = MyAwaited<C>; // string | number
type TD = MyAwaited<D>; // string | number | boolean
