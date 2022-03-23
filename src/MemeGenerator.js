import React, { Component } from 'react'
import Loading from './Loading'
import MemeDisplay from "./MemeDisplay";
import MemeForm from "./MemeForm";

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            ApiDataRecieved: false,
            RandomMemeImage: '',
            topMemeText: '',
            bottomMemeText: '',
            memesImgUnfiltered: []

        }

    }
    handleSubmit = (e) => {
        e.preventDefault()
        const LuckyNumber = Math.floor(Math.random() * this.state.memesImgUnfiltered.length)
        const RandomImg = this.state.memesImgUnfiltered[LuckyNumber].url
        this.setState({ RandomMemeImage: RandomImg })

        // this.setState(prevState => {
        //     const MemeImgPack = prevState.memesImgUnfiltered.map(Image => {
        //         return Image.url
        //     })
        //     return {
        //         ...prevState, RandomMemeImage: MemeImgPack[LuckyNumber]
        //     }
        // })

    }
    handlechange = (event) => {
        const { name, value } = event.target
        this.setState(prevState => {
            return {
                ...prevState, [name]: value
            }
        })
    }

    componentDidMount() {
        setTimeout(() => {
            fetch('https://api.imgflip.com/get_memes')
                .then(response => response.json())
                .then(response => {
                    const { memes } = response.data
                    this.setState({ memesImgUnfiltered: memes, ApiDataRecieved: true, RandomMemeImage: 'https://i.imgflip.com/23ls.jpg' })
                })
        }, 2000);


    }
    render() {
        return (
            this.state.ApiDataRecieved === false ? <Loading /> :
                <>
                    <MemeDisplay
                        topMemeText={this.state.topMemeText}
                        bottomMemeText={this.state.bottomMemeText}
                        RandomMemeImage={this.state.RandomMemeImage}
                    />
                    <MemeForm
                        handlechange={this.handlechange}
                        topMemeText={this.state.topMemeText}
                        bottomMemeText={this.state.bottomMemeText}
                        handleSubmit={this.handleSubmit}
                    />
                </>
        )

    }
}

export default MemeGenerator
