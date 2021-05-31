import styled from "@emotion/styled";
import colors from "./colors";

const StyledCard = styled.div`
  background: ${colors.peach};
  box-shadow: 5px 5px 10px rgb(0 0 0 / 31%);
  border-radius: 20px;
  padding: 0 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.25s ease;
  width: calc(100% / 3 - 60px);
  &:hover {
    .card-image {
      transform: scale(1.2);
    }
  }
  &:nth-of-type(3n+2) {
    background: ${colors.yellow}
  }
  &:nth-of-type(3n) {
    background: ${colors.green}
  }
  @media(max-width: 1280px) {
    width: calc(100% / 2 - 60px);
  }
  @media(max-width: 570px) {
    flex-direction: column;
  }
  @media(max-width: 375px) {
    flex-direction: row;
    width: 100%;
  }
  .card-name {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.5em;
    color: #000;
    @media(max-width: 570px) {
      font-size: 1.2em;
      padding-top: 10px;
    }
  }
  .card-image {
      height: 200px;
      transition: all 0.25s ease;
      @media(max-width: 1024px) {
        height: 150px;
      }
      @media(max-width: 768px) {
        height: 120px;
      }
  }
  .card-btn {
    border: 2px solid #198a21;
    background: #fff;
    color: #198a21;
    border-radius: 50px;
    padding: 4px 20px;
    margin: 10px 0;
    text-align: center;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #14a01d;
    }
  }
  .card-owned {
    text-transform: capitalize;
  }
  &.pointer {
    cursor: pointer;
  }
`;

const Card = ({ id, name, image, spec, goToDetail, getOwned, onClickRelease }) => {
  return (
    <>
      <StyledCard onClick={() => id === "pokemon-list" && goToDetail(name)} className={id === "pokemon-list" && "pointer"}>
        {id === "pokemon-list" ? (
          <div>
            <p className='card-name'>{name}</p>
            <p className='card-owned'>owned {getOwned(name)}</p>
          </div>
        ) : (
          <div>
            <p className='card-name'>{name}</p>
            <p className='card-owned'>{spec}</p>
            <button className='card-btn' onClick={() => onClickRelease(name)}>
              Remove
            </button>
          </div>
        )}
        <img src={image} className='card-image' alt={`${name}`} />
      </StyledCard>
    </>
  );
};

export default Card;
