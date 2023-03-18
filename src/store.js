import create from 'zustand'

export const useBurgerMenu = create(set => ({
	burger: false,
	loading: false,
	error: null,
	setOpenBurger: title =>
		set(state => {
			return { burger: true }
		}),
	setCloseBurger: title =>
		set(state => {
			return { burger: false }
		}),
}))
export const useFetchData = create((set, get) => ({
	albums: [],
	trackId: null,
	trackDetails: [],
	songLyrics: [],
	topCharts: [],
	search: 'theweeknd',
	page: 1,
	setPage: value => set({ page: value }),
	setSearch: searchValue => set({ search: searchValue }),
	random: Math.floor(Math.random() * (20 - 1 + 1)) + 1,
	randomTopCharts: Math.floor(Math.random() * (10 - 1 + 1)) + 1,

	setTrackId: id => set({ trackId: id }),
	loading: null,
  setLoading: boolean =>  set({ loading: true }),
	error: null,
	// fetchAlbums: async () => {
	// 	try {
	// 		const options = {
	// 			method: 'GET',
	// 			headers: {
	// 				'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
	// 				'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
	// 			},
	// 		}

	// 		fetch(
	// 			`https://genius-song-lyrics1.p.rapidapi.com/search/?q=theweeknd&per_page=9`,
	// 			options,
	// 		)
	// 			.then(response => response.json())
	// 			.then(response => set({ albums: response, error: null, loading: false }))
	// 			.catch(err => console.error(err))
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// },
	fetchTopCharts: async () => {
    try {
      await get().setLoading()
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
					'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
				},
			}

      await fetch(
				`https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=month&per_page=12&page=${
					get().random
				}`,
				options,
			)
				.then(response => response.json())
				.then(response => set({ topCharts: response, error: null, loading: false }))
				.catch(err => console.error(err))
		} catch (error) {
			console.log(error)
		}
	},

	fetchTrackDetails: async () => {
    try {
     await get().setLoading()
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
					'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
				},
			}

      await fetch(`https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${get().trackId}`, options)
				.then(response => response.json())
				.then(response => set({ trackDetails: response, error: null, loading: false }))
				.catch(err => console.error(err))
		} catch (error) {}
	},
	fetchSearch: async () => {
    try {
      const options = {
        method: 'GET',
				headers: {
          'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
					'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
				},
			}
      await get().setLoading()
      
			await fetch(
				`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${get().search}&per_page=9&&page=${
					get().page
				}`,
				options,
			)
				.then(response => response.json())
				.then(response => set({ albums: response, error: null, loading: false }))
				.catch(err => console.error(err))
		} catch (error) {
			console.log(error)
		}
	},
}))
