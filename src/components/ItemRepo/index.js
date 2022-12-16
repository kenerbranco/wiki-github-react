import React from 'react'

import { ItemContainer, Row, Img } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <Row>
          <Img src={repo.owner.avatar_url} className="avatar"/>
          <h2>{repo.owner.login}</h2>
        </Row>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <p className="language">Linguagem: {repo.language}</p>
        <Row>
          <a href={repo.html_url} rel="noreferrer" target="_blank" className="verRepo">Ver repositório</a>
          <a href="#"  rel="noreferrer" className="remover">Remover</a>
        </Row>
    </ItemContainer>
  )
}

export default ItemRepo;
