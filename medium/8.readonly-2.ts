type _Exclude<T, K> = T extends K ? never : T;

type MyReadonly2<T, K extends keyof T = keyof T> = {
	[key in _Exclude<keyof T, K>]: T[key];
} & {
	readonly [U in K]: T[U];
};
