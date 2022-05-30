type TupleToUnion<T> = T extends [infer R, ...infer L]
	? R | TupleToUnion<L>
	: never;

type Arr = ['1', '2', '3'];
type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
