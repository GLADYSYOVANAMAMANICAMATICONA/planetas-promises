import store from './Store' 

export function getPlanets() {
    const url = "data/earth-like-results.json";
    fetch(url)
    .then(res => res.json())
    .then(res => {
        res.results.map(planet => {
            return (search(planet));
        })
    })
}