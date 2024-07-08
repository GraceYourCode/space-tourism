import NavBar from '../NavBar';
import DestinationBody from './DestinationBody';
import background from '@/public/assets/destination/background-destination-mobile.jpg'

const DestinationView = () => {
  return (
    <>
      <NavBar
        image={background}
      />
      <DestinationBody />
    </>
  );
};

export default DestinationView;
