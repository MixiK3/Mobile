import { atom } from 'jotai';
import axios from 'axios';
import { API } from "../api/api";
import { AxiosError } from "axios";

export interface GameState {
	games: any,
	isLoading: boolean,
	error: string | null
}

export const gameAtom = atom<GameState>({
	games: [],
	isLoading: false,
	error: null
})

export const loadGameAtom = atom(
	async (get) => {
		return get(gameAtom)
	},
	async (get, set, url: string) => {
		try {
			set(gameAtom, {
				isLoading: true,
				games: [],
				error: null
			})
			const { data } = await axios.get<any>(API.gameByQuery + url)

			set(gameAtom, {
				isLoading: false,
				games: data,
				error: null
			})
		} catch(e) {
			if (e instanceof AxiosError) {
				set(gameAtom, {
					isLoading: false,
					games: [],
					error: e.response?.data.message
				})
			}
		}
	}
)

