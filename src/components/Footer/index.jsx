import React, { Fragment } from 'react'
import './index.css'
export default function Footer() {
    return (
        <Fragment>
            <div className='footer_container'>
                <div className='footer_top'>
                    <div className='f'>
                        <div className='f_item f_logo'>WAX</div>
                    </div>
                    <div className='f_product f'>
                        <div className='f_title f_item'>产品服务</div>
                        <div className='f_item f_hover'>SAP实施服务</div>
                        <div className='f_item f_hover'>SAP增强服务</div>
                    </div>
                    <div className='f_solution f'>
                        <div className='f_title f_item'>解决方案</div>
                        <div className='f_item f_hover'>电力能源</div>
                        <div className='f_item f_hover'>泛家居</div>
                        <div className='f_item f_hover'>高科技</div>
                    </div>
                    <div className='f_cases f'>
                        <div className='f_title f_item'>成功案例</div>
                        <div className='f_item f_hover'>电力能源</div>
                        <div className='f_item f_hover'>泛家居</div>
                        <div className='f_item f_hover'>高科技</div>
                    </div>
                    <div className='f_about f'>
                        <div className='f_title f_item'>关于惟昇</div>
                    </div>
                    <div className='f_about f'>
                        <div className='f_title f_item'>招贤纳士</div>
                    </div>
                </div>
                <div className='hr_container'>
                    <div className='hr_mark'>
                    </div>
                    <div className='copyright'>CopyrIght © 2023惟昇信息科技（武汉）有限公司 | <span>鄂ICP备15004028号</span> | <span>鄂公网安备 44049102496456号</span></div>
                </div>
            </div>
        </Fragment>
    )
}
