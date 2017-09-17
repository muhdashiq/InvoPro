import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Canvas from "../common/Canvas";
import firebase from 'firebase'
import Spinner from '../common/Spinner'
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            loading: false,
        }
    }
    loginButtonPressed() {
        const {username, password} = this.state;
        this.setState({error:'', loading: true});
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(()=>{
                console.log("Sucess");
                this.setState({loading: false, username: '', password: '', error: ''});
            })
            .catch(() => {
                console.log("Failed");
                this.setState({error: 'Authentication failed! Retry again.', password: '',loading: false});
            });

    }

    renderButton() {
        return this.state.loading ? <Spinner/> : (
            <TouchableOpacity onPress = {this.loginButtonPressed.bind(this)}>
                <View style = { styles.ButtonContainer}>
                    <Text style = {styles.ButtonText}>Login</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return(
            <View style={styles.CanvasWrapper}>
                <View style ={{flexDirection: 'row', padding: 30}}>
                    <Text style = {styles.LogoText}>LOGIN</Text>
                </View>
                <View style = {
                    {
                        //backgroundColor: 'aqua',
                        alignSelf: 'stretch',
                        flexDirection: 'column',
                        // borderRadius: 10,
                        // borderWidth: 1,
                        // borderColor: 'blue',
                    }}>
                    <View style = { styles.InputDataContainer}>
                        <View style = { styles.InputLabelContainer}>
                            <Text style = {styles.FormTextStyle}>Username</Text>
                        </View>
                        <View style = { styles.InputDataHolder}>
                            <TextInput
                                style = {styles.InputDataStyle}
                                onChangeText = {(username) => this.setState({username})}
                                value = {this.state.username}
                                placeholder="user@gmail.com"
                                autoCorrect={false}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View style = { styles.InputDataContainer}>
                        <View style = { styles.InputLabelContainer}>
                            <Text style = {styles.FormTextStyle}>Password</Text>
                        </View>
                        <View style = { styles.InputDataHolder}>
                            <TextInput
                                style = {styles.InputDataStyle}
                                onChangeText = {(password) => this.setState({password})}
                                value = {this.state.password}
                                placeholder="password"
                                autoCorrect={false}
                                secureTextEntry
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View style = { styles.InputDataContainer}>
                        <Text style={{fontSize:16, color:'red'}}>{this.state.error}</Text>
                    </View>
                    <View style = { styles.InputDataContainer}>
                        {this.renderButton()}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CanvasWrapper: {
        flex: 1,
        //backgroundColor: 'yellow',
        flexDirection: 'column',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,

    },
    LogoText: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
    },
    InputDataContainer: {
        flexDirection: 'row',
        //backgroundColor: 'green',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
    },
    InputLabelContainer: {
        flex: 3,
        paddingRight: 30,
        alignItems: 'flex-end'
    },
    InputDataHolder: {
        flex: 7,
    },
    InputDataStyle: {
        fontSize: 16,
        color: 'black',
    },
    FormTextStyle: {
        //color: 'blue',
        fontSize: 18,
        fontWeight: '600'

    },
    ButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop:10,
        paddingBottom:10,

    },
    ButtonContainer: {
        backgroundColor: 'grey',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        elevation: 2,
        position: 'relative',
       // marginTop: 30,
    },
    //#
});