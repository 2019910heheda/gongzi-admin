import React,{Component} from 'react'
import './index.less'
class Admin extends Component{
    render(){
        return(
            <div className="admin">
                <div className="admin-left">
                left
                </div>
                <div className="admin-right">
                    <div className="admin-right-top">top</div>
                    <div className="admin-right-center">
                        {/* 组件内部写东西，要通过 this.props.children 获取到*/}
                        {this.props.children}
                    </div>
                    <div className="admin-right-bottom">bottom</div>
                </div>
            </div>
        )
    }
}
export default Admin