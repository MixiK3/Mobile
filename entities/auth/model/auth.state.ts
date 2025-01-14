import { atomWithStorage, createJSONStorage} from 'jotai/utils'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from 'jotai';
import { ILoginRequest } from './auth.interfaces';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';
import { IAuthResponse } from './auth.interfaces';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const INITIAL_STATE = {
			isLoading: false,
			access_token: null,
			error: null
};

export const authAtom = atomWithStorage<AuthState>( 'auth', INITIAL_STATE, storage );

export const loginAtom = atom(
	(get) => get(authAtom), 
	async (_get, set, { username, password}: ILoginRequest) => {
		set(authAtom, {
				isLoading: true,
				access_token: null,
				error: null
			})


		try {
			const { data } = await axios.post<IAuthResponse>(API.login, {
					username: username,
					password: password
				});

			set(authAtom, {
				isLoading: false,
				access_token: data.accessToken,
				error: null
			})
		} catch(e) {
			if (e instanceof AxiosError) {
				set(authAtom, {
					isLoading: false,
					access_token: null,
					error: e.response?.data.message
				})
			}
		}
})

export const logoutAtom = atom(
	null, 
	(_get, set) => {
		set(authAtom, INITIAL_STATE)
	}
)

export interface AuthState {
	access_token: string | null;
	isLoading: boolean;
	error: string | null;
}