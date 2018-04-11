/**
 * Created by yanlin.yyl.
 */
'use strict';

import  {
    View,
    Text,
    StyleSheet
} from 'react-native';

import React, {Component} from 'react';
import { ifIphoneX } from 'react-native-iphone-x-helper'

class HeadView extends Component {

    render() {
        return (
            <View style={[styles.headerView, ifIphoneX?styles.phonexTop:styles.standardTop ]}>
                <Text style={styles.headerViewTitle}>{this.props.title}</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerViewTitle:{
        fontSize: 18,
        color: "#fff"
    }
});

export default HeadView;