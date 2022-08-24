import './App.css';
import imageTest from './img/ffxiv_sample_back.png';

function App() {
  return (
    <div className="App">
      {/*section_title start*/}
      <div className="title_area">
        <p className='title'>FFXIV 시트메이커</p>
      </div>
      {/*section_title end*/}

      {/*section_image start*/}
      <div className='sheet_section'>
        <div className='section_image'>
          <img src = {imageTest}/>
        </div>
        <div className='section_image_gradient'>

        </div>
        <div className='section_image_pvp'>

        </div>
      </div>
      {/*section_image end*/}
    </div>
  );
}

export default App;
