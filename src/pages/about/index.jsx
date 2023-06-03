import React, { Fragment } from 'react'
import './index.css'
import Banner from '../../components/Banner'
import Title from '../../components/Title'
import ValuesCard from '../../components/ValuesCard'
import TimeLine from '../../components/TimeLine'
import CaseCard from '../../components/CaseCard'
export default function About() {
    const banner = {
        text: '关于惟昇',
        src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20211223/guanyuitl.jpg',
        isAnima: false
    }
    const titles = [
        {
            title: '一心一意，专业务实',
            text: '公司介绍'
        },
        {
            title: '核心价值观',
            text: '企业文化'
        },
        {
            title: '企业发展历史',
            text: '公司历程'
        },
        {
            title: '长期战略合作关系',
            text: '合作伙伴'
        },
    ]
    const vcContents = [
        {
            src: 'pt.png',
            title: '让企业进步的平台',
            text: '惟昇信息科技——让企业进步的平台我们致力于帮助需要提高信息化管理的企业进行各种各样的定制化系统开发服务'
        },
        {
            src: 'zy.png',
            title: '富有激情的专业团队',
            text: '我们是一个充满激情的团体，不断追求塑造信息企业、最具创新性的解决方案和合作伙伴关系'
        },
        {
            src: 'fj.png',
            title: '与您共同发展奋进',
            text: '我们的口号是：一群人，一条心，一件事，一起做，一直拼，一定赢！'
        }
    ]
    const tlContents = [
        {
            year:2022,
            list:[
                '2022年惟昇信息员工增加，步入正轨',
                '进入SAP实施、软件应用开发服务等高端信息技术服务领域',
                '成功完成海外项目',
                '2022年惟昇信息成立',
                '进入SAP实施、软件应用开发服务等高端信息技术服务领域',
                '成功完成海外项目',
                '2022年惟昇信息成立',
                '进入SAP实施、软件应用开发服务等高端信息技术服务领域',
                '成功完成海外项目',
            ]
        },
        {
            year:2023,
            list:[
                '2023年惟昇信息成立',
                '进入SAP实施、软件应用开发服务等高端信息技术服务领域',
                '成功完成海外项目',
                '2022年惟昇信息成立',
                '进入SAP实施、软件应用开发服务等高端信息技术服务领域',
                '成功完成海外项目',
                '2022年惟昇信息成立',
                '进入SAP实施、软件应用开发服务等高端信息技术服务领域',
                '成功完成海外项目',
            ]
        }
    ]
    const prContents = [
        {
            src:'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210929/01-726.jpg',
            name:'SAP合作伙伴'
        },
        {
            src:'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210929/03-482.jpg',
            name:'腾讯云合作伙伴'
        }
    ]
    return (
        <Fragment>
            <Banner content={banner} />
            <div className='about_container'>
                <Title content={titles[0]} />
                <div className='about'>
                    <img alt='xx' src='https://yan-cam.github.io/wax/gywm_half.jpg' />
                    <img alt='xx' src='https://yan-cam.github.io/wax/gywm.jpg' />
                    <div className='ab_text'>
                        <div className='ab_cname'>惟昇信息科技</div>
                        <div className='ab_ctext'>
                            <p>惟昇信息科技（武汉）有限公司是一家以企业信息化建设为主的科技型企业，公司通过提供定制化信息服务来逐步整合企业内部大数据，并专注为企业提供各项流程服务，建立采购标准化、数字化协作流程体系，使企业受益于信息化，提升企业运作效率，降低企业运营成本。</p>
                            <p>惟昇信息科技利用SAP，实现从企业的采购、运输、收货、分销和管理，企业全部流程管理到下级部门的全方位覆盖。</p>
                            <p>公司专注为制造业、物流业、航空业、化工业、以及政企单位提供服务。</p>
                        </div>
                    </div>
                </div>
                <Title content={titles[1]} />
                <div className='values_cards'>
                    {
                        vcContents.map((item, index) => {
                            return <ValuesCard content={item} key={index} />
                        })
                    }
                </div>
                <Title content={titles[2]} />
            </div>
            <div className='timeline_container'>
                <TimeLine contents = {tlContents} />
            </div>
            <Title content={titles[3]}/>
            <div className='parter_container'>
                {
                    prContents.map((item,index)=>{
                        return <CaseCard key={index} content={item}/>
                    })
                }
            </div>
        </Fragment>
    )
}
