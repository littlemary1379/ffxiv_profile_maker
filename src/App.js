import './App.css';
import imageBackground from './img/ffxiv_sample_back.png';
import imageButtonBack from './img/ffxiv_sample_profile_sheet_button_back.png'
import imageCheckbox from './img/ffxiv_checkbox.png'
import imageCheckboxCheck from './img/ffxiv_checkbox_check.png'

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
          <img src = {imageBackground}/>
        </div>
        <div className='section_image_gradient'>

        </div>
        <div className='section_image_pvp'>

        </div>
        <div className='section_image_button_back'>
          <img src = {imageButtonBack}/>
        </div>
        <div className='section_user_server_name'>
            <div className='section_user_server'>| 서버명 |</div>
            <div className='section_user_name'>이 - 름</div>
            <div className='section_ingame_section'>
              <div className='section_ingame_checkbox'>
                <img className='section_ingame_checkbox_image' src = {imageCheckbox}/>
                <div className='section_ingame_checkbox_check'>
                  <img src = {imageCheckboxCheck}/>
                </div>
              </div>
              <div className='section_ingame_text'>인게임 닉네임과 달라요</div>
            </div>
        </div>
      </div>
      {/*section_image end*/}
    </div>
  );
}

export default App;
