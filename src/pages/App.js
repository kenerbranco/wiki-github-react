
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container, Row, H1 } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`).catch(() => {
      alert('Repositório não encontrado, verifique campos digitados!');
    });

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      } else if(isExist) {
        alert('Repositório já cadastrado!');
        setCurrentRepo('');
      };

    }
    
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(element => (element.id !== id)));
  }


  return (
    <Container>
      <Row>
        <img src={gitLogo} width={72} height={72} alt="github logo"/>
        <H1>Wiki Github</H1>
      </Row>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
