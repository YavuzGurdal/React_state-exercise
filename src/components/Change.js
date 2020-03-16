import React, { Component } from 'react';

class Change extends Component {

    constructor(props) {
        super(props)

        this.state = {
            baslik: "React Ogreniyorum",
            ders: "React JS",
            sehir: "istanbul",
            isDisplayed: true,
            durum: "Hide City",
            color: "lightgrey",
        }
    }

    stateDegistir = () => {
        this.setState({
            baslik: "HTML ogreniyorum",
            ders: "CSS"
        })
    }

    stateDegistir2 = () => {
        this.setState({
            baslik: "JS ogreniyorum",
            ders: "JS"
        })
    }

    notShowSehir = () => {
        let newDurum = this.state.isDisplayed === true ? "Show City" : "Hide City"

        this.setState({
            isDisplayed: !this.state.isDisplayed,
            durum: newDurum
        })
    }

    changeBG = () => {
        const newColor = this.state.color === "lightgrey" ? "lightblue" : "lightgrey"
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.color, paddingRight: "50px", paddingLeft: "50px" }}>
                <h2>{this.state.baslik  /*burda aslinda sunu diyorum; this.state'deki key'i baslik olan deger*/}</h2>
                <p>{this.state.ders  /*burda aslinda sunu diyorum; this.state'deki key'i ders olan deger*/}</p>

                <button style={{ width: "150px", padding: "10px", margin: "5px" }} onClick={this.stateDegistir}>Change State</button>
                <button style={{ width: "150px", padding: "10px", margin: "5px" }} onClick={this.stateDegistir2}>Change State-2</button>
                <hr />
                {this.state.isDisplayed ? <p>{this.state.sehir}</p> : null}

                <button style={{ width: "150px", padding: "10px", margin: "5px" }} onClick={this.notShowSehir}>{this.state.durum}</button>
                <hr />
                <button style={{ width: "150px", padding: "10px", margin: "5px", marginBottom: "10px" }} onClick={this.changeBG}>
                    Do BG {this.state.color === "lightgrey" ? "lightblue" : "lightgrey"}
                </button>

            </div>
        );
    }
}

export default Change;