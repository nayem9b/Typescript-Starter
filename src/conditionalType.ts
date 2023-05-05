type a1 = string;
type a2 = a1 extends string ? string : null; //Tar mane a1 er upore a2 nirvorshil

// nested Conditional type
type a3 = undefined;
type a4 = number;

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

type CheckProperty<T, K> = K extends keyof Sheikh ? true : false; // wife1 extends wife1 | wife 2

type CheckWife1 = CheckProperty<Sheikh, "wife1">; //jake search korbo take argument hisabe pathabo
// Check korbe ei sheikh type a wife 1 ase kina? true: false
