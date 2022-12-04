import Card from "../components/Card";
import iconChat from "../assets/message-chat-circle.svg";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Navigationbar from "../components/Navigationbar";
function Homepage() {
    document.title = 'Homepage'
    return (
        <div className="w-full px-[70px]">
            <Navigationbar />
            <Hero />
            <div className="w-full mt-[40px] flex justify-between flex-wrap mx-[auto]">
                <Card
                    image={iconChat}
                    title="react to each others posts"
                    description="Create posts and let 
                people and friends react 
                to them!"
                />
                <Card
                    image={iconChat}
                    title="react to each others posts"
                    description="Create posts and let 
                people and friends react 
                to them!"
                />
                <Card
                    image={iconChat}
                    title="react to each others posts"
                    description="Create posts and let 
                people and friends react 
                to them!"
                />
            </div>
            <Cta />
        </div>
    );
}

export default Homepage;
