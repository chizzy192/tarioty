import Layout from "../../layout";
import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import NameBar from "../../components/shared/nameBar";
const tapes = [
  "WHAT I OFFER",
  "MY SERVICES",
  "WHAT I OFFER",
  "MY SERVICES",
];
const letters = [ "S", "E", "R", "V", "I", "C", "E"];
const Services = () => {
    return (
      <Layout>
        <DisplayCard backgroundColor={"#0A0A0A"}>
        <TickerTape tapes={tapes} />
        <Heading
            letters={letters}
            nonAnimatedText="MY"
          />
        </DisplayCard>
        {/* <DisplayCard backgroundColor={"#0A0A0A"}>
          
        </DisplayCard> */}
      </Layout>
    );
  };
  export default Services;
  