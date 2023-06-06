import React, { Fragment, useState, useEffect } from 'react'
import './index.css'
import Banner from '../../components/Banner'
import Title from '../../components/Title'
import SolutionNavigation from '../../components/SolutionNavigation'
import CaseCard from '../../components/CaseCard'
export default function Cases() {
    const [animation1] = useState("showCases 2s ease both")
    const snContent =
    {
        title: '成功案例',
        list: ['全部', '电力能源', '泛家居', '高科技', '化工', '汽车零部件', '消费品及零售', '生命科学', '装备制造', '房地产']
    }

    const banner = {
        text: '成功案例',
        src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20220104/chenggonganli1.2.jpg',
        isAnima: false
    }

    const title = {
        title: '实力深厚，经验丰富',
        text: '成功案例'
    }

    const ccContents = [
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/qiyeweixin20230601-175306@2x.png',
            name: '东方电气',
            classify: '电力能源'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/qiyeweixin20230601-175114@2x.png',
            name: '乐威医药',
            classify: '生命科学'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/qiyeweixin20230601-174906@2x.png',
            name: '天能帅福得',
            classify: '利欧泵业'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/qiyeweixin20230601-174429@2x.png',
            name: '瑞康医药',
            classify: '生命科学'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/qiyeweixin20230601-174316@2x.png',
            name: '太古可口可乐',
            classify: '消费品及零售'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/qiyeweixin20230601-174138@2x.png',
            name: '阿特斯',
            classify: '电力能源'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/2.png',
            name: '联盟化工',
            classify: '化工'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/6397d2ea89cf4a849ba3db519799c96e.jpeg',
            name: '帝迈生物',
            classify: '生命科学'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/1.png',
            name: '中联重科',
            classify: '装备制造'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/cfIhzFDJSFStaf0NgGtfmg.jpg',
            name: '众泰汽车',
            classify: '汽车零部件'
        },
        {
            src: 'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20230601/1342411907.jpg',
            name: '锦州神工',
            classify: '装备制造'
        },
        {
            src:'https://www.itl.com.cn/Public/Uploads/uploadfile/images/20210929/nl02-981.png',
            name:'梦牌卫浴',
            classify:'泛家居'
        }
    ]
    const [filterSoContents, setFilterSoContents] = useState(ccContents)
    const [classifyFlag, setClassifyFlag] = useState('全部')
    const getClassify = classify => {
        setClassifyFlag(classify)

    }
    useEffect(() => {
        if(classifyFlag === '全部') {
            setFilterSoContents(ccContents)
        } else {
            const newContents = ccContents.filter(item => item.classify === classifyFlag)
            setFilterSoContents(newContents)
        }

    }, [classifyFlag])
    return (
        <Fragment>
            <Banner content={banner} />
            <div style={{animation:animation1}} className='cases_container'>
                <Title content={title} />
                <SolutionNavigation getClassify={getClassify} key={0} content={snContent} />
                <div className='case_cards'>
                    {
                        filterSoContents.map((item, index) => {
                            return <CaseCard key={index} content={item} />
                        })
                    }
                </div>
            </div>

        </Fragment>
    )
}
