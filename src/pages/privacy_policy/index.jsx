import React from 'react'
import { Fragment } from 'react'
import Banner from  '../../components/Banner'
import './index.css'
export default function Privacy_policy() {
    const banner = {
        text: '隐私政策',
        src: 'https://n.sinaimg.cn/sinakd202051s/55/w1080h575/20200501/0606-isyparf8375861.png',
        isAnima: true
    }
    return (
        <Fragment>
            <Banner content={banner}/>
            <div className='policy_content'>
                <div className='policy_title policy_text'>隐私条款</div>
                <p>
                    惟昇信息科技非常重视对您的个人隐私保护，有时候我们需要某些信息才能为您提供您请求的服务，本隐私政策解释了这些情况下的数据收集和使用情况。
                </p>
                <p>
                    本政策适用于惟昇信息科技的所有相关服务，随着惟昇信息科技服务范围的扩大，隐私政策的内容可由惟昇信息科技随时更新，且毋须另行通知。更新后的隐私政策一旦在网页上公布即有效代替原来的隐私政策。
                </p>
                <div className='policy_title policy_text'>个人信息的定义</div>
                <p>个人信息：根据《中华人民共和国个人信息保护法》，指以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息。</p>
                <p>个人敏感信息：根据《中华人民共和国个人信息保护法》，指一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的个人信息，包括生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹等信息，以及不满十四周岁未成年人的个人信息。（我们将在本隐私权政策中对具体个人敏感信息以粗体进行显著标识）。</p>
                <div className='policy_title policy_text'>关于您的个人信息</div>
                <p>惟昇信息科技严格保护您个人信息的安全。</p>
                <p>我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄漏。</p>
                <p>惟昇信息科技会在法律要求或符合惟昇信息科技的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：</p>
                <p>(a)满足法律或行政法规的明文规定，或者符合惟昇信息科技适用的法律程序；</p>
                <p>(b)符合惟昇信息科技相关服务条款、软件许可使用协议的约定；</p>
                <p>(c)保护惟昇信息科技的权利或财产；</p>
                <p>(d)在紧急情况下保护惟昇信息科技员工、惟昇信息科技产品或服务的用户或大众的个人安全；</p>
                <p>惟昇信息科技不会未经您的允许将这些信息与第三方共享，本政策已经列出的上述情况除外。</p>
                <div className='policy_title policy_text'>cookie的使用</div>
                <p>使用 Cookie 能帮助您实现您的联机体验的个性化，您可以接受或拒绝 Cookie ，大多数 Web 浏览器会自动接受 Cookie，但您通常可根据自己的需要来修改浏览器的设置以拒绝 Cookie。</p>
                <p>惟昇信息科技有时会使用 Cookie 以便知道哪些网站受欢迎，使您在访问惟昇信息科技时能得到更好的服务。Cookie不会跟踪个人信息。</p>
                <p>如果您的浏览器被设置为拒绝 Cookie，您仍然能够访问惟昇信息科技的大多数网页。</p>
                <div className='policy_title policy_text'>版权权利</div>
                <p>本网站包含之所有内容：文本、图形、LOGO、创意等之所有权归属创作作者所有，本网站的内容/信息提供者，受中国及国际版权法的保护。其他媒体（包括网络媒体和传统媒体）转摘本网原创稿件时，须在明显位置注名信息来源：惟昇信息科技官网。</p>
                <p>惟昇信息科技官网及其任何组成部分不得被再造、复制、抄袭、交易，或为任何未经惟昇信息科技允许的商业目的所使用。</p>
                <p>如果xx素材网确定对方行为违法或有损其网站和企业的利益，则惟昇信息科技将保留追究相关责任企业或责任人的权利。</p>
                <p>惟昇信息科技上的链接服务可以直接进入其他站点，这些链接的站点不受惟昇信息科技的控制，惟昇信息科技对未经授权即与本站链接网站的内容不负责任。</p>
                <p>为了保护网址安全，禁止使用者破坏或企图破坏惟昇信息科技官网的安全规则，其中包括但不限于:</p>
                <p>(a)接触未经许可的数据或进入未经许可的服务器或帐户；</p>
                <p>(b)没有得到许可，企图探查，扫描或测试系统或网络的弱点，或者破坏安全措施；</p>
                <p>(c)企图干涉对用户及网络的服务，包括，并不限于，通过超载，“邮件炸弹”或“摧毁”等手段；</p>
                <p>(d)发送促销，产品广告及服务的E-mail；</p>
                <p>(e)伪造TCP/IP数据包名称或部分名称，破坏系统或网络可能导致犯罪,惟昇信息科技将予以追究责任。</p>
            </div>
        </Fragment >
    )
}
