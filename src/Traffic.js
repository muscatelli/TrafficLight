import react, {useState} from "react";

const Traffic = () => {

    let [Redligth, SetRedLigth] = useState (false);
    let [Yellowligth, SetYellowLigth] = useState (false);
    let [Greenligth, SetGreenLigth] = useState (false);

    const LightHandler = (ligth) => {
        if ( ligth.target.id === 'Red') {
            SetRedLigth (true);
            SetYellowLigth (false);
            SetGreenLigth (false);
        }
        else if ( ligth.target.id === 'Yellow') {
            SetRedLigth (false);
            SetYellowLigth (true);
            SetGreenLigth (false);
        }

        else if ( ligth.target.id === 'Green') {
            SetRedLigth (false);
            SetYellowLigth (false);
            SetGreenLigth (true);
        }
    }

    return (
        <div className="container">
            <div className="col-md bg-dark ">
                <div className= {` row-md mx-auto rounded-circle Redligth ${Redligth === true ? "RedligthOn" : ""}`} id="Red" onClick= {LightHandler}>
                 
                       
                </div>
                <div className={` row-md mx-auto rounded-circle Yellowligth ${Yellowligth === true ? "YellowligthOn" : ""}`} id="Yellow" onClick= {LightHandler}>
                   
                </div>
                <div className={` row-md mx-auto rounded-circle Greenligth ${Greenligth === true ? "GreenligthOn" : ""}`} id="Green" onClick= {LightHandler}>
                   
                </div>
            </div>
        </div>
    )
}

export default Traffic;