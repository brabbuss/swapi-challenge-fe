import Link from "next/link";
import styled from "styled-components";

const Image = styled.img`
  height: 50vh;
  border-radius: 5pc;
`
const Card = styled.article`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: #fff;
  text-decoration: none;
  border: 3px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
    &:focus, &:hover, &:active {
      color: #0070f3;
      border-color: #0070f3;
    }
}
`

const CharacterCard = ({ character }) => {
  return (
    <Link key={character.id} href={`/characters/${character.id}`}>
      <Card>
        <h3>{character.name}</h3>
        <Image src={character.image} alt={`a photo of ${character.name}`} />
      </Card>
    </Link>
  );
};

export default CharacterCard;