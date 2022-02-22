/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { BiCalendarAlt, BiHomeAlt, BiTime } from 'react-icons/bi'
import { AiOutlineSetting, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsGrid1X2 } from 'react-icons/bs'
import { projectInfors } from '../../data/Data'
import { AdvancedCard } from 'minions-lib'

function Portfolio(): JSX.Element {
    const infors = [
        {
            total: 45,
            status: 'In progress'
        },
        {
            total: 20,
            status: 'Up comming'
        },
        {
            total: 15,
            status: 'Total Projects '
        },
    ]

    return (
        <div className="pf">
            <p className="pf__title">Easy to use.</p>
            <div className="pf__box">
                <HeaderPortfolio />
                <div className="pf__box--board">
                    <TabBoardPortfolio />
                    <ProjectPortfolio infors={infors} projectInfors={projectInfors} />
                    {/* client message */}
                    <BigTitleProjectDemo />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
function HeaderPortfolio(): JSX.Element {
    return <div className="pf__box--header">
        <div className="pf__box--header-left">
            <div className="box--header--icons">
                <span className="box--header--icons-icon"></span>
                <span className="box--header--icons-icon"></span>
                <span className="box--header--icons-icon"></span>
            </div>
            <p className="pf__box--header-left-title">Portfolio</p>
            <input className="pf__box--header-left-input" type="text" name="txt" placeholder="Search..." />
        </div>
    </div>
}
function TabBoardPortfolio(): JSX.Element {
    return (
        <div className="board--tab">
            <div className="board--tab-icon active">
                <BiHomeAlt className="board--tab-icon-bi" />
            </div>
            <div className="board--tab-icon">
                <BiTime className="board--tab-icon-bi" />
            </div>
            <div className="board--tab-icon">
                <BiCalendarAlt className="board--tab-icon-bi" />
            </div>
            <div className="board--tab-icon">
                <AiOutlineSetting className="board--tab-icon-bi" />

            </div>
        </div>
    )
}
interface ProJProps {
    infors: any;
    projectInfors: any;
}
const ProjectPortfolio: React.FC<ProJProps> = ({ infors, projectInfors }): JSX.Element => {
    const [list, setList] = React.useState(false)
    const handleSetList = () => setList(!list)
    return (
        <div className="project">
            <div className="project__header">
                <p>Projects</p>
                <p>December,12</p>
            </div>
            <div className="project__infor">
                <InforProject infors={infors} />
                <div className="project__infor--typeshow">
                    <AiOutlineUnorderedList
                        onClick={() => handleSetList()}
                        className={`project__infor--typeshow-icon ${list ? 'active' : null}`} />
                    <BsGrid1X2
                        onClick={() => handleSetList()}
                        className={`project__infor--typeshow-icon ${!list ? 'active' : null}`} />
                </div>
            </div>
            <BoxListPortfolio list={list} projectInfors={projectInfors} />
        </div>
    )
}
interface InfPops {
    infors: any
}
const InforProject: React.FC<InfPops> = ({ infors }) => {
    return (
        <div className="project__infor--wrap">
            {infors && infors.map((infor: any, idx: number) => {
                return (
                    <div className="project__infor--wrap-box" key={idx}>
                        <span className="project__infor--wrap-box-total">{infor.total}</span>
                        <span className="project__infor--wrap-box-status">{infor.status}</span>
                    </div>
                )
            })}
        </div>
    )

}
interface BoxProps {
    list: any;
    projectInfors: any
}
const BoxListPortfolio: React.FC<BoxProps> = ({ list, projectInfors }) => {

    return (
        <div className={list ? 'project__body listActive' : 'project__body'}>
            {
                projectInfors && projectInfors.map((p: any, i: React.Key | null | undefined) => {
                    return (
                        <AdvancedCard cardinfor={p} key={i} />
                    )
                })
            }
        </div>
    )
}

const BigTitleProjectDemo = () => {
    return (<div className="bigTitle">
        <p>
            Easy to make <br />
            Beautiful DashBoard Design<br />
            <span className="bigTitle__highlight">Vi</span>-UI
        </p>
    </div>)
}
