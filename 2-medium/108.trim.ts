type _TEmpty = ' ' | '\n' | '\t';

type _TrimLeft<T> = T extends `${_TEmpty}${infer R}` ? _TrimLeft<R> : T;
type _TrimRight<T> = T extends `${infer R}${_TEmpty}` ? _TrimRight<R> : T;

type Trim<T extends string> = _TrimLeft<_TrimRight<T>>;
