import { ItemContainer, ItemBox } from "./intemRepo-styles";
import { IItemRepo } from "./types";

export function ItemRepo({repo, handleRemoveRepo}:IItemRepo) {

  if(!repo){
    throw Error("Invalid repository");
  };

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer key={repo.id}>
      <ItemBox>
        <img src={repo.owner.avatar_url} alt="avatar"/>
        <div className="userInfo">
          <div className="texto">
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
          </div>
          <div className="actions">
            <a className="remover" onClick={handleRemove}>Remover</a>
            <a href={repo.html_url} target="_blank" className="git-repo" rel="noreferrer">Ver repositório</a>
          </div>
        </div>
      </ItemBox>

    </ItemContainer>
  );
}