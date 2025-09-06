import Hero from './components/Hero';
import WholeHouse from './components/Sections/WholeHouse';
import DrinkingWater from './components/Sections/DrinkingWater';
import Techniques from './components/Sections/Techniques';
import Distribution from './components/Sections/Distribution';
import Problem from './components/Sections/Problems';

export default function Page() {
return (
<>
<Hero />
<Problem />
<WholeHouse />
<DrinkingWater />
<Techniques />
<Distribution />
</>
);
}