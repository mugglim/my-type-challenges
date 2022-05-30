type Replace<
	S extends string,
	From extends string,
	To extends string,
> = From extends ''
	? S
	: S extends `${infer S1}${From}${infer S2}`
	? `${S1}${To}${S2}`
	: S;
