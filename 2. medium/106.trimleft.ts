type TEmpty = ' ' | '\n' | '\t';

type TrimLeft<T> = T extends `${TEmpty}${infer R}` ? TrimLeft<R> : T;
