import { AppWrapper, DetailsWrapper } from './styles.js';
import Header from './components/Header';
import Artist from './components/Artist';
import Chart from './components/Chart';
import Audience from './components/Audience';
import RelatedSounds from './components/Related';
import Recommendations from './components/Recommendations';


function App() {
  return (
    <AppWrapper>
        <Header></Header>
        <Artist></Artist>
        <DetailsWrapper>
          <Chart></Chart>
          <Audience></Audience>
          <RelatedSounds></RelatedSounds>
          <Recommendations></Recommendations>
        </DetailsWrapper>
    </AppWrapper>
  );
}

export default App;
