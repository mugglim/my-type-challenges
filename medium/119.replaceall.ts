type ReplaceAll<
	S extends string,
	From extends string,
	To extends string,
> = From extends ''
	? S
	: S extends `${infer S1}${From}${infer S2}`
	? `${S1}${To}${ReplaceAll<`${S2}`, From, To>}`
	: S;
