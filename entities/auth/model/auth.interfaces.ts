export interface IAuthResponse {
	accessToken: string,
	email: string,
	firstName: string,
	gender: string,
	id: number,
	image: string,
	lastName: string,
	refreshToken: string,
	username: string
}

export interface ILoginRequest {
	username: string;
	password: string;
}