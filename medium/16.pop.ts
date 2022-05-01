type Pop<T extends any[]> = T extends [...infer Head, infer Tail]
	? Head
	: never;
