import React from 'react'
import Icon1 from '../../images/logovn.png'
import Icon2 from '../../images/map.png'
import Icon3 from '../../images/woman.png'
import VietnamFlag from '../../images/flag.png'
const Introduction = () => {
    return (
        <div className="concept">
            <div className="concept__header">vissual ui made by NHP</div>
            <div className="concept__container">
                <div className="concept__container--left">
                    <p className="concept--intro">follow the passion of my life</p>
                </div>
                <div className="concept__container--right">
                    <div className="concept-head">
                        <img src={VietnamFlag} alt="Ui viet nam" />
                        <span className="concept-head-title">Vi</span>-
                        <span className="concept-head-title2">UI</span>
                    </div>
                    <div className="concept-middle">
Did you know somthing about my country ?
                    </div>
                    <section className="country-introduction">
                        <img src={Icon1} alt="My country Viet Nam" />
                        <img src={Icon2} alt="My country Viet Nam" />
                        <img src={Icon3} alt="My country Viet Nam" />
                    </section>
                    <div className="country-content">
Instead of doing like a robot, let make your life meaningful, take
in spirit from my current work, but just for fun !!!. I was there
for the crazy things, I never even think about this, I do not have
chance, conditions, choice, the only thing I have is ...
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Introduction
