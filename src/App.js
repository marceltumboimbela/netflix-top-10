import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{maxWidth:"1400px"}}>
      <div style={{paddingBottom:"32.8%"}} className="relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="box-content h-full bg-black text-white" style={{width:"56%",paddingLeft:"256px"}}>
            <div className="relative w-full h-full">
              <div style={{marginLeft:-256+"px", width:256+"px"}} className="relative h-full">
                <p className="text-9xl">6</p>
                <p className="absolute bottom-0">Watched for 7.39 million hours this week</p>
              </div>
              <div className="absolute top-0 left-0 h-full" style={{paddingLeft:"100%"}}>
                <img className="absolute top-0 left-0 h-full w-full object-cover" src="https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABajb2-e2siG_iBP210h1-0JJpG3oBBDZqRx1wb4aPt1c_rBkdKjKkHu-WQXkcrxNVXm6bfjq99wljrAbNcNiFWkdYGOltsTyh__f.jpg?r=860" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
