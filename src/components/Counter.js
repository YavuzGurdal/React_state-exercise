import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sayi: 0
        }
    }

    sayiAzalt = () => {
        const randomSayi = Math.floor(Math.random() * 10 +1)
        // console.log(randomSayi)
        this.setState({
            sayi: this.state.sayi - randomSayi
        })
    }

    sayiArtir = () => {
        const randomSayi = Math.floor(Math.random() * 10 + 1)
        this.setState({
            sayi: this.state.sayi + randomSayi
        })
    }

    render() {

        return (
            <div style={{ backgroundColor: "lightgreen", padding:"10px", marginTop: "5px" }}>
                <h3>Click Buttons to increase and decrease the counter</h3>
                <p>{this.state.sayi}</p>

                <button onClick={this.sayiAzalt} style={{ width: "150px", padding: "10px", margin: "5px" }}>
                    Decrease Number 
                </button>
                <button onClick={this.sayiArtir} style={{ width: "150px", padding: "10px", margin: "5px" }}>
                    Increase Number 
                </button>

            </div>
        );
    }
}

export default Counter;