import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTA1NGY5M2Y2NTc1ZGZiZDBjMDM4MzU2ZDE3NTNmZCIsIm5iZiI6MTc1NTA5NDUwNi42MjMwMDAxLCJzdWIiOiI2ODljOWRlYTNkOGQ2MWUxOGQyNjhkZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DjZh_BgWgeJNznw4VHFsdk61khcZNbK87mO44wDkLt8",
	},
});

export default instance;
