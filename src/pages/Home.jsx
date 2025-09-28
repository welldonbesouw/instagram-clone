import StorySlider from "../components/StorySlider";
import Feeds from "../components/Feeds";
import Navbar from "../components/Navbar";

export default function Home() {
   return (
      <>
         <div>
            <StorySlider />
            <Feeds />
         </div>
         <Navbar />
      </>
   );
}
