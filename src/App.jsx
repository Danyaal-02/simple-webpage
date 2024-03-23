// App.js
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import cardData from './cards.json';

function App() {
  return (
    <div className="container">
      <div className="left-section">
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwxg3h4HLn5uaVjSDWzBs3pm_C-89pSyPE2KWDJq08ns6G9_2J" alt="Big Image" />
      </div>
      <div className="right-section">
        <div className="vertical-section">
          <h2>Light, Fast & Powerful</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quisquam accusamus corporis quos tempore! Itaque iure repellat quas, illum eos magnam quisquam necessitatibus placeat unde quibusdam accusantium ipsam rem perferendis facere nam id ipsa sequi ad neque.<br/><br/> Cum exercitationem cumque eveniet! Non asperiores porro iste consequatur delectus veniam similique perspiciatis!</p>
        </div>
        <div className="vertical-section below-section">
          <div className="carousel-container slider">
            <Slider>
              {cardData.map(card => (
                <Card
                  key={card.id}
                  imageUrl={card.imageUrl}
                  heading={card.heading}
                  subheading={card.subheading}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
