type MyExclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = {
	[key in MyExclude<keyof T, K>]: T[key];
};

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type T = MyOmit<Todo, 'description' | 'completed'>;
