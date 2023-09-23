// import Image from 'next/image';
import ModeraTower from "../assets/modera-tower.jpg";
import "./Loader.css";

function Loader() {
  return (
    <div className="Loader">
      <h1 className="load-title">
        MODERA TOWER
        <img src={ModeraTower} alt="back" className="logo" height="200px" />
      </h1>
    </div>
  );
}

export default Loader;
