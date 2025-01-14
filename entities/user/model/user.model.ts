export interface User {
	id: number;
	name: string;
	surname?: string;
	photo?: string;
	profile?: any;
}

export interface currUser {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: string,
  email: string,
  image: string,
  name?: string | undefined
}