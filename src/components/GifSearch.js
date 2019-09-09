import React, {Component} from 'react'
class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    handleOnChange = (e) => {
        e.persist()
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.fetchURL(this.state.search)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.search} onChange={this.handleOnChange} />
                <input type='submit' value='Search' />
            </form>
        )
    }

}

export default GifSearch