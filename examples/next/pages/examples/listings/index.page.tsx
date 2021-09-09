import {
  Button,
  Collection,
  IconAccountCircle,
  Image,
  Text,
  theme,
  View,
} from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { experiences, places } from './data';
import { ExperienceCard } from './ExperienceCard';
import { ListingCard } from './ListingCard';
import { SectionHeading } from './SectionHeading';

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  });
  return (
    <>
      <header className="listing-app-header">
        <Image src="/listing-logo.svg" alt="lystifying" />

        <input type="search" placeholder="search" />

        <Button variation="link" size="large">
          <IconAccountCircle />
        </Button>
      </header>

      <View padding={theme.space.xxl}>
        <SectionHeading
          title="Discover Experiences"
          subtitle="Unique activities with local experts—in person or online."
        />
        <Collection
          type="list"
          direction="row"
          alignItems="stretch"
          padding={`0 0 ${theme.space.xxl} 0`}
          items={experiences}
        >
          {(item) => (
            <ListingCard {...item} key={item.title} isLoaded={loaded} />
          )}
        </Collection>

        <SectionHeading
          title="Vacation rentals for every style"
          subtitle="Get the amount of space that is right for you"
        />
        <Collection
          type="list"
          direction="row"
          alignItems="stretch"
          padding={`0 0 ${theme.space.xxl} 0`}
          items={places}
        >
          {(item) => (
            <ExperienceCard
              key={item.title}
              img={item.img}
              title={item.title}
            />
          )}
        </Collection>
      </View>

      <footer className="listing-app-footer">
        <Text color={theme.colors.font.tertiary}>
          © 2021 Lystifying (not a real company)
        </Text>
      </footer>
    </>
  );
}

export default App;