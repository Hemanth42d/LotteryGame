import "./style.css";

function DisplayPara({ text, winner }) {
  return (
    <>
      <div id="paraDetails">{winner ? `Yup! You are so lucky :) ` : text}</div>
    </>
  );
}

export default DisplayPara;
