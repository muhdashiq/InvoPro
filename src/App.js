import React, { Component } from 'react'
import firebase from 'firebase'
import ItemList from './components/ItemList'
import LoginForm from './components/Login/LoginForm'
import { View, Text } from 'react-native'
import Spinner from "./components/common/Spinner";

class App extends Component {

    state = {
        loggedIn: false
    };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyBC0LsFLUwUc6CIMK1DHR69Rq6YFnXRbe4",
                authDomain: "invopro-25564.firebaseapp.com",
                databaseURL: "https://invopro-25564.firebaseio.com",
                projectId: "invopro-25564",
                storageBucket: "invopro-25564.appspot.com",
                messagingSenderId: "1084450121614"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn:true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return <ItemList onLogout/>
            case false:
                return <LoginForm/>
            default:
                return (
                    <View style={{
                        flex:1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                        <Spinner/>
                        <Text>Loading... Please check your internet connection</Text>
                    </View>
                );
        }
    }

    render() {
        return this.renderContent();
    }
}

export default App;