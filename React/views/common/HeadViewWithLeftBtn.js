/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    NativeModules
} from 'react-native';

import React, {Component} from 'react';
var ReactModule = NativeModules.ReactModule;
var findNodeHandle = require('findNodeHandle');
import { ifIphoneX } from 'react-native-iphone-x-helper'


export default class HeadViewWithLeftBtn extends Component {

    _back = function () {
        ReactModule.podViewController(findNodeHandle(this));
    }


    render() {
        return (
            <View style={[styles.headerView , ifIphoneX?styles.phonexTop:styles.standardTop ]}>
                <TouchableHighlight underlayColor = '#eee' onPress={()=>this._back()}>
                    <View style={styles.backBtn} onpress>
                        <Image style={styles.backImg} source={require('../../img/icon_back.png')} />
                    </View>
                </TouchableHighlight>
                <Text numberOfLines={1} style={styles.headerViewTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    standardTop: {
        paddingTop: 20,
    },
    phonexTop: {
        marginTop: 50,

    },
    headerView:{
        backgroundColor : '#0168ae',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerViewTitle:{
        flex: 1,
        marginRight: 40,
        fontSize: 18,
        textAlign: 'center',
        color: "#fff"
    },
    backBtn:{
        height:40,
        width:40,
        justifyContent:'center',
        alignItems: 'center'
    },
    backImg: {
        height: 15,
        width:15
    }
});