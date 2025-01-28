import './MainComponent.css';
import profilePic from '../../assets/Profile.jpeg'; 

function MainComponent() {

  return (
    <div className="center">
      <div className="left-center">
      <h1 className="name">Flamur Maliqi</h1>
      <p>Software Developer, CS Student</p>
      </div>
      <img src={profilePic} alt="Flamur Maliqi's profile" />
    </div>
  );
}

export default MainComponent;
