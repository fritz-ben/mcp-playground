import Button from "./components/Button";
import Headline from "./components/Headline";
import "./styles/fonts.css";
import inspireLogo from "./assets/images/inspire-logo.png";

function App() {
  return (
    <main className="bg-(--color-deep-blue) min-h-screen flex items-center justify-center p-16">
      <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        <div className="flex flex-col gap-16 items-center justify-start max-w-[868px] w-full">
          <img 
            src={inspireLogo} 
            alt="INSPIRE" 
            className="w-full aspect-[1246/340] object-cover object-center"
          />
          
          <div className="flex flex-col gap-12 items-center justify-start w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Headline alignment="center" className="text-white">
                Building ideas. Creating impact.
              </Headline>
              
              <p className="body-large text-(--color-bluish-white-100) text-center w-full">
                INSPIRE is back this September – a fully digital event, created by colleagues, for colleagues! 
                Get ready for an exciting month full of engaging talks covering a wide range of topics. Here 
                you'll find all the information about the event – from the speaker line-up and the agenda to 
                FAQs answering the most important questions.
              </p>
            </div>
            
            <Button variant="primary">
              Discover Agenda
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
