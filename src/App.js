import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Child from './components/Child';
import Change from './components/Change';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      // name: "Yavuz Gürdal"
    }
  }

  // Bu asagidaki ile ayni. Bu daha daogru bir gosterim. Arrow function.
  changeIsim = e => this.setState({ name: e.target.value })

  /*
  changeIsim = (e) => { // burdaki e, event demek. Burdaki karsiligi onChange'dir. Yani input icine birsey
                        // yazilma islemi.
    this.setState({
      name: e.target.value // inputa girilen degeri anlık olarak al ve onu key'i name olan state elemanina 
                           // deger olarak ata demek.
    })
  }
  */ 

  render() {

    return (
      <div className="App">
        
        <Change />

        <Counter />
        
        <div style={{ backgroundColor: "lightblue", padding:"10px", marginTop:"5px"}}>
          <Child isim={this.state.name} />
          <input  
                  onChange={this.changeIsim}
                  value={this.state.name} // inputun baslangic degeri olarak state'dekini name'i atamis olduk               
                  style={{ width: "150px", padding: "10px", margin: "5px" }} 
                  type="text"
          />         
        </div>

      </div>
    );
  }
}

export default App;
