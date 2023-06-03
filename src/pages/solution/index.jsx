import React, { Fragment, useEffect, useState } from 'react'
import SolutionNavigation from '../../components/SolutionNavigation'
import Banner from '../../components/Banner'
import SolutionCard from '../../components/SolutionCard'
import Title from '../../components/Title'
import './index.css'
export default function Solution() {
    const snContents = [
        {
            title:'行业',
            list:['全部','电力能源','泛家居','高科技','化工','汽车零部件','消费品','生命科学','装备制造','房地产']
        },
        {            
            title:'产品',
            list:['SAP ERP','BTP','CX','SAC','C4C','SRM']
        }
    ]
    const banner =  {
        text:'解决方案',
        src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20211223/jiejuefangan-04.jpg',
        isAnima: false
    }

    const title = {
        title: '专业，专注成就客户价值',
        text: '解决方案'
    }
    const soContents = [
        {
            industryClassification:'电力能源',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/dianlinengyuan.jpg',
            title: '惟昇信息电力能源解决方案',
            text: '致力于为电力能源行业提供场景化解决方案，助力企业实现数字化转型升级，提升企业运营整体效率和利润。                                                '
        },
        {
            industryClassification:'泛家居',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/fanjiaju.jpg',
            title: '惟昇信息泛家居行业解决方案',
            text: '致力于帮助泛家居企业实现数字化转型，打造互联网时代泛家居行业领先者。                                                '
        },
        {
            industryClassification:'高科技',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/gaokeji.jpg',
            title: '惟昇信息提供高科技行业解决方案',
            text: '提供基于高科技行业特性的全价值链管理的集成解决方案。                                                '
        },
        {
            industryClassification:'化工',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/huagong.jpg',
            title: '惟昇信息化工行业解决方案',
            text: '是一套完整的综合性解决方案，为企业提供丰富的信息、增强的可靠性和特定行业功能。                                                '
        },
        {
            industryClassification:'汽车零部件',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/qichelingbujian.jpg',
            title: '惟昇信息汽车零部件解决方案',
            text: '帮助汽车零部件行业有效加快数字化转型、提升产品推陈出新效率、提升产品性能和安全性，扩大客户规模。                                                '
        },
        {
            industryClassification:'消费品',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/xiaofeipinjilingshou.jpg',
            title: '惟昇信息消费品行业解决方案',
            text: '助力企业运筹帷幄、把握商机，利用数字化平台突破消费者、产品、终端、和物流的核心瓶颈。                                                '
        },
        {
            industryClassification:'生命科学',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/shengmingkexue.jpg',
            title: '惟昇信息生命科学解决方案',
            text: '致力于为行业客户提供低成本、高效率的专业交付，助力客户加速数字化转型。                                                '
        },
        {
            industryClassification:'装备制造',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/zhuangbeizhizao.jpg',
            title: '惟昇信息装备制造行业解决方案',
            text: '结合装备设备制造企业面临的当下挑战及未来发展趋势，帮助企业实现“中国制造2025”战略指引下的数字化信息建设。                                                '
        },
        {
            industryClassification:'房地产',
            productClassification:'SAP ERP',
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/fangdichan.jpg',
            title: '惟昇信息房地产解决方案',
            text: '为房地产企业成功实现数字化转型升级提供开放、灵活、高效、一体化的数字化价值支撑服务。                                                '
        },
    ]
    const [filterSoContents, setFilterSoContents] = useState(soContents)
    const [classifyFlag, setClassifyFlag] = useState('SAP ERP')
    const getClassify = classify => {
        if(classify === '全部') {
            setClassifyFlag('SAP ERP')
        } else {
            setClassifyFlag(classify)
        }

    }

     useEffect(()=>{
        const newContents = soContents.filter(item => item.productClassification === classifyFlag || item.industryClassification === classifyFlag)
        setFilterSoContents(newContents)
    },[classifyFlag])
    return (
    <Fragment>
        <Banner content={banner}/>
        <Title content={title}/>
        <div className='sol_container'>
            <div className='sol_navigation_container'>
                <SolutionNavigation getClassify={getClassify} key={0} content={snContents[0]} />
                <div className='sol_naigation_hr'></div>
                <SolutionNavigation getClassify={getClassify} key={1} content={snContents[1]}/>
            </div>
            <div className='sol_cards'>
                {
                    filterSoContents.map((item,index)=>{
                        return <SolutionCard key={index} content={item}/>
                    })
                }
            </div>
        </div>
    </Fragment>
  )
}
