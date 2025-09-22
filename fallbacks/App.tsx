import Button from "../Button";
import Headline from "../Headline";
import inspireLogo from "./assets/images/inspire-logo.png";
import "./styles/fonts.css";

function App() {
  return (
    <main className="bg-(--color-deep-blue) min-h-screen flex flex-col items-center justify-center px-16 py-24">
      <div className="flex flex-col items-center justify-start gap-16 max-w-[868px] w-full">
        <div className="w-full">
          <img src={inspireLogo} alt="INSPIRE Logo" className="w-full h-auto object-contain" />
        </div>

        <div className="flex flex-col items-center justify-start gap-12 w-full">
          <div className="flex flex-col items-center justify-start gap-8 w-full">
            <Headline className="text-white">Building ideas. Creating impact.</Headline>

            <p className="body-large text-(--color-bluish-white-100) text-center w-full">
              INSPIRE is back this September – a fully digital event, created by colleagues, for colleagues! Get ready for an
              exciting month full of engaging talks covering a wide range of topics. Here you'll find all the information about
              the event – from the speaker line-up and the agenda to FAQs answering the most important questions.
            </p>
          </div>

          <Button label="Discover Agenda" />
        </div>
      </div>
    </main>
  );
}

export default App;
