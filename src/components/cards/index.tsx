import { useEffect, useState } from "react";

// CSS-in-JS
interface CharacterProps {
  id: number;
  image: string;
  name: string;
  gender: string;
}

const Character = () => {
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  useEffect(() => {
    const fetchCharacter = () =>
      fetch(`https://rickandmortyapi.com/api/character`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.results);
        });
    fetchCharacter();
  }, []);

  return (
    <>
      <h2>Algunos personajes de la serie</h2>
      <section>
        {character.map((data: CharacterProps) => {
          return (
            <article key={data.id}>
              <img src={data.image} alt={data.name} />
              <div>
                <h3>{data.name}</h3>
                <h3>{data.gender}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Character;
