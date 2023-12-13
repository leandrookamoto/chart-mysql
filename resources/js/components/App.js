// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom';
import Input from  './Input';
import './index.css';
import {useState, useEffect} from 'react';
import Chart from './Chart';

export default function App() {

    const [animais,setAnimais] = useState('');
    const [dados, setDados] = useState([]);
    const [popularidade, setPopularidade] = useState(null);

    const data = {
      labels: dados.map(item => item.animal),
      datasets:[
          {label:'Popularity',
          data: dados.map(item => item.popularidade)
          }
      ]
  
  }

    useEffect(()=>{
      axios.get('/chart')
  .then(function (response) {
    // Manipular a resposta dos dados aqui
    console.log('Dados recebidos:', response.data);
    setDados(response.data);
  })
  .catch(function (error) {
    // Manipular erros aqui
    console.error('Ocorreu um erro ao buscar os dados:', error);
  });
    },[]);

    // let item = todoList.map((item)=>{return item.description})
    // console.log(item.join(''));


    // const childToParent = (childdata) => {
    //   setNome(childdata);
    // }


    function gravar(){
      const animais2 = [...dados, {animal: animais, popularidade: popularidade}];
      setDados(animais2);
      console.log(animais2);
      setAnimais('');
      setPopularidade('');


      axios.post('/chart', {'animal': animais, 'popularidade': popularidade}, { headers: {
        
        'content-type': 'application/json'
      }})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }


    function deletar(){
      axios.post('/chartdelete')
    .then(response => {
        console.log(response.data.message); 
    })
    .catch(error => {
        console.error('Erro ao truncar a tabela:', error);
    });

    setDados([]);
    }

    return (

          <main className='novoContainer'>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">Navbar</a>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
    
            </div>
          </nav>

              <Input value={animais} newOnChange={e=>setAnimais(e)}/>
              <Input value={popularidade} newOnChange={e=>setPopularidade(e)} type='number' label='Favor colocar a popularidade' placeholder='Colocar a popularidade'/>

              <button type="button" className="btn btn-primary" onClick={gravar}>Gravar</button>
              <button type="button" className="btn btn-primary m-2" onClick={deletar}>Deletar</button>
                {dados.map((item, index)=><div key={index}>{item.animal}</div>)}
                 
              <p>Hello React!</p>

              <Chart dados={data}/>

     
          </main>

    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.render(<App />, document.getElementById('hello-react'));
}