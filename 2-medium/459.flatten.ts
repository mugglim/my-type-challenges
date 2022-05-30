type Flatten<T extends any[]> = T extends [infer L, ...infer R]
	? L extends any[]
		? [...Flatten<L>, ...Flatten<R>]
		: [L, ...Flatten<R>]
	: [];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
