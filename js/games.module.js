import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";
export class Games {
    constructor() {
        this.getGames("mmorpg")
        let navLinks = document.querySelectorAll(".nav-link")
        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".active").classList.remove("active")
                e.target.classList.add("active")
                let category = e.target.getAttribute("data-category")
                this.getGames(category)
            })
        })
        this.ui = new Ui()
    }
    async getGames(category) {
        const loading = document.querySelector(".loading")
        loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8b5c2002b2msh912b97a116c7858p1cf767jsn4b077b3b810d',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await api.json()
        this.ui.displayDataGame(response)
        this.event()
        loading.classList.add("d-none")
    }

    event() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.getAttribute("data-id")
                this.showDetails(id)
            })
        })
    }

    showDetails(id) {
        let details = new Details(id)
        document.querySelector(".games").classList.add("d-none")
        document.querySelector(".details").classList.remove("d-none")
    }

}

