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
