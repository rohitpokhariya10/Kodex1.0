
import LinkList from "../components/LinkList";
import CreatorCard from "../components/CreatorCard";
import {creator , links} from "../data/creator.data";
import HeroSection from "../components/HeroSection";

const Home = () => {
  

   
  return (
    <div>
      <HeroSection/>
      <CreatorCard  creator={creator}/>
      <LinkList links = {links}/>
    </div>
  )
}

export default Home