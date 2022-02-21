import React from 'react'
import { BiCalendarAlt, BiHomeAlt, BiTime } from 'react-icons/bi'
import { AiOutlineSetting, AiOutlineUnorderedList } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { BsGrid1X2 } from 'react-icons/bs'
import { projectInfors } from '../../data/Data'

const Portfolio = () => {
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
const HeaderPortfolio = () => {
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
const TabBoardPortfolio = () => {
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
                        <Project key={i} p={p} />
                    )
                })
            }
        </div>
    )
}
interface PPops {
    p: any
}
const Project: React.FC<PPops> = ({ p }): JSX.Element => {

    const color = [
        '#0984e3', '#00b894', '#d63031', '#6c5ce7', '#EE5A24', '#ED4C67'
    ]
    const style = { '--progress': p.progress + '%', backgroundColor: color[Math.floor(Math.random() * color.length)] }
    return (
        <div className="list__bx">
            <FiMoreVertical className="list__bx--iconShowmore" />
            <div className="list__bx--head">
                <p>{p.time}</p>
                <FiMoreVertical className="list__bx--head-icon" />
            </div>
            <div className="list__bx--desc">
                <p className="list__bx--desc-title">{p.major}</p>
                <p className="list__bx--desc-type">{p.type}</p>
                <p className="list__bx--desc-datetime">{p.time}</p>
            </div>
            <div className="list__bx--progress">
                <p>Progress</p>
                <div className="list__bx--progress-line">
                    <div className="list__bx--progress-line-offset" style={style}></div>
                </div>
                <span>{p.progress}</span>
            </div>
            <div className="list__bx--time">
                <div className="list__bx--time-team">
                    {
                        p.team && p.team.map((t: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => {
                            return (
                                <span key={i}>{t}</span>
                            )
                        })
                    }
                </div>
                <div className="list__bx--time-deadline">
                    {p.deadline > 1 ? p.deadline + ' days left' : p.deadline + ' day left'}
                </div>
            </div>
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
