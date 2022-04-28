// type Includes<T extends any[], U> = U extends T[keyof T] ? true : false;

// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'>; // expected to be `false`

type A = [1, 2, 3];
type B = '0';
