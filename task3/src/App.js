import {fetchData} from './fetch.js';
 
    function App() {
      var b;
      fetchData().then(res => {b = res.name})
                 .then(() => document.getElementById("A").value = b)
                 .then(() => document.getElementById("l").value = "длинна = " + b.length);
      function div(){
        document.getElementById("A").value = document.getElementById("A").value.substr(1);
        document.getElementById("l").value = "длинна = " + document.getElementById("A").value.length;
        if(document.getElementById("A").value.length == 0) document.getElementById("B").setAttribute('disabled', true);
      }
      return (
        <div>
          <h1>Задание №3</h1>
          <input id="B" value="Уменьшить строку" type="submit" onClick={div}></input>
          <input id="A" type="text" readOnly="readonly"></input>
          <input id="l" type="text" readOnly="readonly"></input>
        </div>
      );
    }

    export default App;