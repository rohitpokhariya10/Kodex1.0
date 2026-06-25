// import { useParams } from "react-router";
// import { useEffect } from "react";
// import {useHome} from "../hooks/useHome";
import LinkList from "../components/LinkList";
import CreatorCard from "../components/CreatorCard";
import {creator , links} from "../data/creator.data";
import HeroSection from "../components/HeroSection";

const Home = () => {
    // let {username} = useParams();
    // console.log("username-->" , username)
    // const {fetchLinks} = useHome();

    // useEffect(()=>{
    //    fetchLinks(username);
    // },[username , fetchLinks]);

   
  return (
    <div>
      <HeroSection/>
      <CreatorCard  creator={creator}/>
      <LinkList links = {links}/>
    </div>
  )
}

export default Home