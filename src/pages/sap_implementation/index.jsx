import React, { Fragment, useEffect, useState } from 'react'
import Title from '../../components/Title'
import SolutionSwiper from '../../components/SolutionSwiper'
import Banner from '../../components/Banner'
import CapabilityCard from '../../components/CapabilityCard'
import './index.css'
export default function Sap_implementation() {
    const [animation1] = useState("showTeam 2s ease both")
    const [animation2, setAnimation2] = useState("")
    const [animation3, setAnimation3] = useState("")
    const [animation4, setAnimation4] = useState("")
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
        if (document.documentElement.scrollTop >= 500) {
            setAnimation2('showOverview 2s ease both')
        }
        if (document.documentElement.scrollTop >= 1500) {
            setAnimation3('showCapability 2s ease both')
        }
        if (document.documentElement.scrollTop >= 2200) {
            setAnimation4('showSwiper 2s ease both')
        }
    }
    const banner = {
        text: 'SAP实施服务',
        src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20220104/SAP12.31.jpg',
        isAnima: false
    }
    const titContents = [
        {
            title: '有实力的专家团队',
            text: '团队介绍'
        },
        {
            title: 'SAP信息化实施概览',
            text: '概览'
        },
        {
            title: '提供全方位服务和支持',
            text: '交付能力'
        },
        {
            title: '专业，专注成就客户价值',
            text: '解决方案'
        }
    ]
    const team = {
        text: '惟昇信息科技（武汉）有限公司成立于2022年，是覆盖全国聚焦数字化信息服务及软件的提供商，目前已在全国14个主要城市设立分子公司，提供企业管理方面数字化、云&大数据从“战略到执行”端到端的服务及软件应用。是SAP金牌合作伙伴，SAP（ONE Service/PCOE/AQM/PQP）最佳合作伙伴，已为泛家居、高科技、房地产、电力、新能源、电商、消费品、生命科学、机械制造、零售、化工、汽车、物流、贸易、教育等行业的知名客户提供数字化信息化落地实施建设。',
        src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20211217/b1s1_img.jpg'
    }
    const overview = { src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20211223/tupian1-34.png' }
    const cacContents = [
        {
            src: 'gkj.svg',
            title: '技术咨询',
            cacContent: ['技术资讯实施', '技术变更优化', '技术需求实现', '技术培训业务'],
            moreContent: ['平台迁移、系统升级优化', '系统安全、容灾服务', 'IT预审', '权限梳理、数据归档', 'IT预审', 'SAP GRC部署', '自动化测试', 'SAP实施', '技术培训']
        },
        {
            src: 'gkj.svg',
            title: '应用咨询',
            cacContent: ['业务深化推广', '业务变更优化', '开发支持优化', '业务培训业务'],
            moreContent: ['平台迁移、系统升级优化', '系统安全、容灾服务', 'IT预审', '权限梳理、数据归档', 'IT预审', 'SAP GRC部署', '自动化测试', 'SAP实施', '技术培训']
        },
        {
            src: 'gkj.svg',
            title: '运维咨询',
            cacContent: ['运维咨询管理', '运维体系构建应用', '运维支持', '系统运维支持'],
            moreContent: ['平台迁移、系统升级优化', '系统安全、容灾服务', 'IT预审', '权限梳理、数据归档', 'IT预审', 'SAP GRC部署', '自动化测试', 'SAP实施', '技术培训']
        }

    ]
    const swContents = [
        {
            iconSrc: 'dlny.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/dianlinengyuan.jpg',
            title: '电力能源',
            text: '惟昇信息致力于为电力能源行业提供场景化解决方案，助力企业实现数字化转型升级，提升企业运营整体效率和利润。                                                '
        },
        {
            iconSrc: 'fjj.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/fanjiaju.jpg',
            title: '泛家居',
            text: '惟昇信息致力于帮助泛家居企业实现数字化转型，打造互联网时代泛家居行业领先者。                                                '
        },
        {
            iconSrc: 'gkj.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/gaokeji.jpg',
            title: '高科技',
            text: '惟昇信息提供高科技行业解决方案，提供基于高科技行业特性的全价值链管理的集成解决方案。                                                '
        },
        {
            iconSrc: 'hg.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/huagong.jpg',
            title: '化工',
            text: '惟昇信息化工行业解决方案是一套完整的综合性解决方案，为企业提供丰富的信息、增强的可靠性和特定行业功能。                                                '
        },
        {
            iconSrc: 'qclbj.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/qichelingbujian.jpg',
            title: '汽车零部件',
            text: '惟昇信息汽车零部件解决方案，帮助汽车零部件行业有效加快数字化转型、提升产品推陈出新效率、提升产品性能和安全性，扩大客户规模。                                                '
        },
        {
            iconSrc: 'xfp.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/xiaofeipinjilingshou.jpg',
            title: '消费品',
            text: '惟昇信息消费品行业解决方案，助力企业运筹帷幄、把握商机，利用数字化平台突破消费者、产品、终端、和物流的核心瓶颈。                                                '
        },
        {
            iconSrc: 'smkx.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/shengmingkexue.jpg',
            title: '生命科学',
            text: '惟昇信息生命科学解决方案，致力于为行业客户提供低成本、高效率的专业交付，助力客户加速数字化转型。                                                '
        },
        {
            iconSrc: 'zbzz.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/zhuangbeizhizao.jpg',
            title: '装备制造',
            text: '惟昇信息装备制造行业解决方案，结合装备设备制造企业面临的当下挑战及未来发展趋势，帮助企业实现“中国制造2025”战略指引下的数字化信息建设。                                                '
        },
        {
            iconSrc: 'fdc.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/fangdichan.jpg',
            title: '房地产',
            text: '惟昇信息房地产解决方案为房地产企业成功实现数字化转型升级提供开放、灵活、高效、一体化的数字化价值支撑服务。                                                '
        },
    ]
    return (
        <Fragment>
            <Banner content={banner} />
            <div className='si_container'>
                <div style={{ animation: animation1 }} className='sapi_team'>
                    <Title content={titContents[0]} />
                    <div className='team_container'>
                        <div className='team_text'>
                            {team.text}
                        </div>
                        <div className='team_img'>
                            <img src={team.src} alt="ss" />
                        </div>
                    </div>
                </div>
                <div style={{ animation: animation2 }} className='sapi_overview'>
                    <Title content={titContents[1]} />
                    <div className='overview_container'>
                        <img src={overview.src} alt="ss" />
                    </div>
                </div>
                <div style={{ animation: animation3 }} className='sapi_capability'>
                    <Title content={titContents[2]} />
                    <div className='capability_container'>
                        {
                            cacContents.map((item, index) => {
                                return <CapabilityCard key={index} content={item} />
                            })
                        }
                    </div>
                </div>
                <div style={{ animation: animation4 }} className='sapi_swiper'>
                    <Title content={titContents[3]} />
                    <SolutionSwiper contents={swContents} />
                </div>
            </div>
        </Fragment>
    )
}
