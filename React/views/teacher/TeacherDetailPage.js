/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    Image,
    TouchableHighlight,
    NativeModules,
    StyleSheet
} from 'react-native';

import screen from '../../constants/screen';
import HeadViewWithLeftBtn from '../common/HeadViewWithLeftBtn';
import React, {Component} from 'react';
import ListLine from "../common/ListLine";
var ReactModule = NativeModules.ReactModule;
var findNodeHandle = require('findNodeHandle');
import UserUtils from '../../utils/UserUtils'
import StudentListPage from './StudentListView'
import TeacherDetailView from './TeacherDetailView'
import TeacherTeamListView from './TeacherTeamListView'
import TeacherDemoVideoView from './TeacherDemoVideoView'
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../common/CustomTabBar';



export default class TeacherDetailPage extends Component {

    // componentDidMount() {
    //     alert('this.props:' + JSON.stringify(this.props));
    // }
    //noinspection JSAnnotator
    constructor(props: Object) {
        super(props)
        this.state = {
            teacher: {},
            userType: "student",
            isLogin: false,
            subPage:'demoList'// demoList  students
        }
    }

    componentWillReceiveProps(){
        if (this.props.viewControllerState == "resume" ){
            this._initView();
        }
    }

    _initView = function () {
        var context = this;
        UserUtils.getUser(function (result) {
            if (result.userToken && !context.setState.isLogin){
                context.setState({
                    isLogin:true,
                    userType:result.roleId == "4"?'student':'teacher'
                })
            }else if(!result.userToken){
                context.setState({
                    isLogin:false
                })
            }
        })
    }



    componentDidMount() {
        this._initView();
    }



    render() {
        return (
            <View style={{flex: 1}}>
                <HeadViewWithLeftBtn title = "教师详细信息"></HeadViewWithLeftBtn>
                {
                    <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}>
                        <TeacherDetailView tabLabel="教师简介"  id = {this.props.id}></TeacherDetailView>
                        <TeacherDemoVideoView isLogin={this.state.isLogin} tabLabel="公益视频"  id = {this.props.id}></TeacherDemoVideoView>
                        <StudentListPage tabLabel="学生风采"  api="/studentVideo/list.do" id = {this.props.id}></StudentListPage>
                        {/*<TeacherTeamListView tabLabel="小组课程" id = {this.props.id}></TeacherTeamListView>*/}
                    </ScrollableTabView>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        flexDirection: 'row',
        marginTop:10,
        marginBottom: 10
    },
    imageType: {
        marginLeft: 10,
        marginRight: 10,
        height: 84,
        width: 84
    },
    rowContainer: {
        marginTop: 8,
        flexDirection:'row'
    },
    rowTitle: {
        color: '#666',
        fontSize: 12
    },
    rowDes: {
        marginLeft: 5,
        flex: 1,
        color: '#999',
        fontSize: 12
    },
    buttonContain: {
        flexDirection: 'row',
        height: 32,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        width:screen.width/3 - 30,
        marginRight: 10,
        height:32,
        backgroundColor: '#0168ae'
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    }

});