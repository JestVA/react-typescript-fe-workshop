import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const Application = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchCharacter().then((c) => setCharacter(c));
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}
      {/*
				This is bad, there are edge cases here, where character could be null...
			{
				loading && !character ? <Loading /> : <CharacterInformation character={character} />
			}*/}
    </main>
  );
};

export default Application;
