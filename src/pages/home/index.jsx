import React, { Fragment, useEffect, useState } from 'react'
import Title from '../../components/Title'
import SuccessCaseCard from '../../components/SuccessCaseCard'
import './index.css'
import HomeTitleCard from '../../components/HomeTitleCard'
import SolutionSwiper from '../../components/SolutionSwiper'
import Banner from '../../components/Banner'

export default function Home() {
    const [animation, setAnimation] = useState("")
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [animation])
    const handleScroll = () => {
        if (document.documentElement.scrollTop >= 300) {
            setAnimation('show 3s ease both')
        }
    }
    const banner = {
        text: '数字化服务的领导者',
        src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/bannershouye-PCduan-944.jpg',
        isAnima: true
    }
    const titContents = [
        {
            title: '专业，专注成就客户价值',
            text: '解决方案'
        }
        ,
        {
            title: '贴心服务，感动客户',
            text: '成功案例'
        },
        {
            title: '一心一意，专业务实',
            text: '关于我们'
        }
    ]
    const hmtContents = [
        {
            src:  'home_title1.png',
            title: 'SAP BW/4 HANA',
            text: 'SAP1 BW/4HANA 提供先进的数据建模和治理功能、高效的解决方案开发功能、现代化的用户体验，以及卓越的灵活性。'
        },
        {
            src: 'home_title2.png',
            title: 'SAP Business One',
            text: 'SAP Business One（面向小型企业的 ERP）是一款可随企业发展而扩展的业务管理软件，有助于更高效地管控小型企业.'
        },
        {
            src: 'home_title3.png',
            title: 'SAP Cloud Platform',
            text: 'SAP Cloud Platform是SAP 推出的企业平台即服务 (PaaS) 产品，提供了全面的应用开发功能，能够帮助你更快地扩展、集成和构建创新型应用，而且你无需对基础架构进行维护。'
        },
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
            iconSrc:'hg.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/huagong.jpg',
            title: '化工',
            text: '惟昇信息化工行业解决方案是一套完整的综合性解决方案，为企业提供丰富的信息、增强的可靠性和特定行业功能。                                                '
        },
        {
            iconSrc:'qclbj.svg',
            imgSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/qichelingbujian.jpg',
            title: '汽车零部件',
            text: '惟昇信息汽车零部件解决方案，帮助汽车零部件行业有效加快数字化转型、提升产品推陈出新效率、提升产品性能和安全性，扩大客户规模。                                                '
        },
        {
            iconSrc:'xfp.svg',
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
    const susContents = [
        {
            iconSrc: 'dlny.svg',
            sucText: '国家电网有限公司成立于2002年12月29日，以投资建设运营电网为核心业务，是关系国家能源安全和国民经济命脉的特大型国有重点骨干企业。',
            logoSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210930/guojiadianwang.png',
            logoName: '国家电网',
            logoDesc: '电力能源'
        },
        {
            iconSrc:'fjj.svg',
            sucText: '梦牌卫浴是一家专注于卫浴及配套产品的OEM和ODM工作。坚持以质量取胜，不断完善生产工艺及品质管控，为全球用户提供舒适、便捷、耐用的卫浴产品以及愉悦的生活体验。',
            logoSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210929/nl02-981.png',
            logoName: '梦牌卫浴',
            logoDesc: '泛家居'
        },
        {
            iconSrc:'hg.svg',
            sucText: '南方泵业系全国较早研发并规模化生产不锈钢冲压焊接离心泵企业，是目前国内不锈钢冲压焊接离心泵领域专业生产厂家之一。产品广泛应用于增压、工业、生活供水、空调水循环、供暖、消防系统、地下水抽取、污水废水处理、化工行业和海水淡化等诸多领域。',
            logoSrc: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210929/nl03-39.png',
            logoName: '南方泵业',
            logoDesc: '化工'
        }
    ]
    return (
        <Fragment>
            <Banner content={banner} />
            <div style={{ animation }} className='home_title'>
                <div>数字经济时代到来，企业数字化该如何转型？</div>
                <div>惟昇信息科技（武汉）有限公司梳理总结了新型中国企业管理上云之路的关键要点、多样化实施路径与未来发展趋势。</div>
                <div className='home_cards'>
                    {
                        hmtContents.map((item, index) => {
                            return <HomeTitleCard key={index} content={item} />
                        })
                    }
                </div>
            </div>
            <Title content={titContents[0]} />
            <SolutionSwiper contents={swContents} />
            <Title content={titContents[1]} />
            <div className='suc_cards'>
                {
                    susContents.map((item, index) => {
                        return <SuccessCaseCard key={index} content={item} />
                    })
                }
            </div>
            <div style={{backgroundImage:`url(${require('../../assets/yj.webp')})`}} className='mission'>
                <div>
                    我们的使命与愿景
                </div>
                <div className='m_mark'></div>
                <div>
                    MISSION VISION
                </div>
                <div>
                    惟昇信息科技（武汉）有限公司是一家致力于为企业信息化做出自己努力贡献的服务提供商，坚持以用户为中心、以应用为基础、以技术为后盾、以双赢为目的的理念为用户及合作伙伴提供专业咨询，应用软件实施及解决方案。
                </div>
            </div>
            <Title content={titContents[2]} />
            <div className='about'>
                <img className='a_img1' alt='xx' src={require('../../assets/'+'gywm_half.jpg')}/>
                <img className='a_img2' alt='xx' src={require('../../assets/'+'gywm.jpg')} />
                <div className='ab_text'>
                    <div className='ab_cname'>惟昇信息科技</div>
                    <div className='ab_ctext'>
                        <p>惟昇信息科技（武汉）有限公司是一家以企业信息化建设为主的科技型企业，公司通过提供定制化信息服务来逐步整合企业内部大数据，并专注为企业提供各项流程服务，建立采购标准化、数字化协作流程体系，使企业受益于信息化，提升企业运作效率，降低企业运营成本。</p>

                        <p>惟昇信息科技利用SAP，实现从企业的采购、运输、收货、分销和管理，企业全部流程管理到下级部门的全方位覆盖。</p>

                        <p>公司专注为制造业、物流业、航空业、化工业、以及政企单位提供服务。</p>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}