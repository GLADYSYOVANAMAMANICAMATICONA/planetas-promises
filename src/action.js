import store from './store'

export async function search() {
    const url = "data/Kepler-22b.json"
    fetch(url)
        .then(res => res.json())
        .then(res => {
            let ne = [];
            ne = [...store.getState().items];
            ne.push(res)
            console.log(res)
            store.setState({
                items: ne
            });

        })

}