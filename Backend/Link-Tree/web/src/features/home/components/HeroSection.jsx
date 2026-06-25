import { useNavigate } from "react-router";

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <section>
        <h1>Everything you are. One Link.</h1>
        <p>
            Share all your important links from one place.
        </p>
        <button
        onClick={()=> navigate("/register")}
        >Create Your Own Page</button>
    </section>
  );
};

export default HeroSection;