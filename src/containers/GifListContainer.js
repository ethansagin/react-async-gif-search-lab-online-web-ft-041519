import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    fetchURL = (query) => {
        const baseURL = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&rating=g&limit=3"
        const queryURL = `&q=${query}`

        fetch(baseURL + queryURL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                images: data.data.map(i => i.images.original.url)
            })
        })
    }

    render() {
        return(
            <div className="gif-list-container">
                <GifSearch fetchURL={this.fetchURL}/>
                <GifList images={this.state.images}/>
            </div>
        )
    }

}

export default GifListContainer