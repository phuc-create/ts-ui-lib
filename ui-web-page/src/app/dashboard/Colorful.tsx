import React from 'react'
import { BiStar } from 'react-icons/bi'
import { TiAttachment } from 'react-icons/ti'
import Person from '../../images/pt1.jpg'
import Person2 from '../../images/pt2.jpg'
import Person3 from '../../images/pt3.jpg'
import Person4 from '../../images/pt4.jpg'
const Colorful = () => {
    return (
        <div className="cc2">
            <div className="cc2__header">
                <span>Powerful</span>
                <span>
                    Available in <p className="cc2--highlight">&nbsp;Viet Nam</p>
                </span>
            </div>
            <div className="cc2__container">
                <div className="cc2__container--left">
                    <p className="cc2__container--left-title">COLORFUL ❤</p>
                    <p className="cc2__container--left-content">
                        I have no idea about how to create a UI library, and I put down a
                        question why I like to make a new one, for my country, and I don`t
                        even know where to start.
                    </p>
                </div>
                <div className="cc2__container--right">
                    <div className="l-tab">
                        <div className="l-tab__bx">
                            <div className="l-tab__bx--head">
                                <div className="img-wrap">
                                    <img src={Person} alt="Hello World" />
                                </div>
                                <div className="name-person">Louis</div>
                            </div>
                            <div className="l-tab__bx--content">How To Write Better Advertising Copy Heading</div>
                            <div className="l-tab__bx--extra">
                                <div className="extra-l">
                                    <input type="checkbox" name="cb" />
                                    <BiStar className="extra-l-star-icon" />
                                    <TiAttachment className="extra-l-attachment" />
                                </div>
                                <div className="extra-r">
                                    8:30 PM
                                </div>
                            </div>
                        </div>
                        <div className="l-tab__bx">
                            <div className="l-tab__bx--head">
                                <div className="img-wrap">
                                    <img src={Person} alt="Hello World" />
                                </div>
                                <div className="name-person">Louis</div>
                            </div>
                            <div className="l-tab__bx--content">How To Write Better Advertising Copy Heading</div>
                            <div className="l-tab__bx--extra">
                                <div className="extra-l">
                                    <input type="checkbox" name="cb" />
                                    <BiStar className="extra-l-star-icon" />
                                    <TiAttachment className="extra-l-attachment" />
                                </div>
                                <div className="extra-r">
                                    8:30 PM
                                </div>
                            </div>
                        </div>
                        <div className="l-tab__bx">
                            <div className="l-tab__bx--head">
                                <div className="img-wrap">
                                    <img src={Person} alt="Hello World" />
                                </div>
                                <div className="name-person">Louis</div>
                            </div>
                            <div className="l-tab__bx--content">How To Write Better Advertising Copy Heading</div>
                            <div className="l-tab__bx--extra">
                                <div className="extra-l">
                                    <input type="checkbox" name="cb" />
                                    <BiStar className="extra-l-star-icon" />
                                    <TiAttachment className="extra-l-attachment" />
                                </div>
                                <div className="extra-r">
                                    8:30 PM
                                </div>
                            </div>
                        </div>
                        <div className="l-tab__bx">
                            <div className="l-tab__bx--head">
                                <div className="img-wrap">
                                    <img src={Person} alt="Hello World" />
                                </div>
                                <div className="name-person">Louis</div>
                            </div>
                            <div className="l-tab__bx--content">How To Write Better Advertising Copy Heading</div>
                            <div className="l-tab__bx--extra">
                                <div className="extra-l">
                                    <input type="checkbox" name="cb" />
                                    <BiStar className="extra-l-star-icon" />
                                    <TiAttachment className="extra-l-attachment" />
                                </div>
                                <div className="extra-r">
                                    8:30 PM
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="r-tab">
                        <div className="r-tab-time">December 10,2021</div>
                        <div className="r-tab-title">Release Vi-UI in the first time at NewYork</div>
                        <div className="r-tab-from">from: <span className="r-tab-from-email">phuc82908@gmail.com</span></div>
                        <p className="r-tab-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi est nam quos maiores assumenda explicabo debitis optio tenetur, laborum impedit. Sunt modi possimus a inventore, iure voluptatibus esse dolor aspernatur, nisi totam ipsum amet veritatis dignissimos in minima id? <br />
                            Have a nice day !<br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos at dolorem commodi ex voluptatem consequuntur, expedita id enim pariatur neque!<br />
                            Phuc
                        </p>
                        <div className="r-tab-attachs">
                            <TiAttachment className="r-tab-attachs-icon" />
                            <p className="r-tab-attachs-total">
                                Attachment (80mb)
                            </p>
                            <button className="r-tab-attachs-view">View all</button>
                            <button className="r-tab-attachs-dw">Download all</button>

                        </div>
                        <div className="r-tab-files">
                            <img src={Person} alt="Hello World" />
                            <img src={Person2} alt="Hello World" />
                            <img src={Person3} alt="Hello World" />
                            <img src={Person4} alt="Hello World" />
                        </div>
                        <div className="r-tab-actions">
                            <button>Reply</button>
                            <button>Forward</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Colorful
