import { authAtom } from "@/entities/auth/model/auth.state";
import { currUser, User } from "./user.model";
import { atom } from 'jotai';
import axios from 'axios';
import { API } from "../api/api";
import { AxiosError } from "axios";

export const profileAtom = atom<UserState>({
	profile: null,
	isLoading: false,
	error: null
})

export interface UserState {
	profile: currUser | null;
	isLoading: boolean;
	error: string | null;
}

export const loadProfileAtom = atom(
	async (get) => {
		return get(profileAtom)
	},
	async (get, set) => {
		const { access_token } = await get(authAtom);
		set(profileAtom, {
			isLoading: true,
			profile: null,
			error: null
		});

		try {
			const { data } = await axios.get<currUser>(API.profile, {
					headers: {
						Authorization: `Bearer ${access_token}`
					}
				});

			set(profileAtom, {
				isLoading: false,
				profile: data,
				error: null
			})
		} catch(e) {
			if (e instanceof AxiosError) {
				set(profileAtom, {
					isLoading: false,
					profile: null,
					error: e.response?.data.message
				})
			}
		}
	}
)

