import Hero from './components/Hero';
import WholeHouse from './components/Sections/WholeHouse';
import DrinkingWater from './components/Sections/DrinkingWater';
import Techniques from './components/Sections/Techniques';
import Distribution from './components/Sections/Distribution';
import Problems from './components/Sections/Problems'; 


export default function Page() {
return (
<>
<Hero />
<Problems /> 
<WholeHouse />
<DrinkingWater />
<Techniques />
<Distribution />
</>
);
}