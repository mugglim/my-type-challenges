type Last<T extends any[]> = T extends [...infer Head, infer Tail]
	? Tail
	: never;
