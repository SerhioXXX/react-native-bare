import React, { useState } from 'react';
import Auth0 from 'react-native-auth0';
import { Alert, Pressable, Button, View, TextInput, Modal, Text, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
// set up settings
// https://blog.logrocket.com/secure-passwordless-authentication-react-native-auth0/
// https://auth0.com/docs/quickstart/native/react-native/00-login

const AuthScreen = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [codeRequestSent, setCodeRequestSent] = useState(false);
  const [logginIn, setLogginIn] = useState(false);
  const [accsesData, setAccsesData] = useState({
    accessToken: '',
    idToken: '',
    isLoggedin: false,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const auth0 = new Auth0({
    domain: 'dev-0tm5dbhq.eu.auth0.com',
    clientId: 'DUSlSVSH5w8q9DAl8aaSRuNBDnYNT7s6',
  });

  const getLoginCode = () => {
    setLogginIn(true);
    auth0.auth
      .passwordlessWithSMS({
        phoneNumber: phone,
      })
      .then(() => {
        setCodeRequestSent(true);
      })
      .catch(console.error);
  };

  const loginUser = () => {
    auth0.auth
      .loginWithSMS({
        phoneNumber: phone,
        code: code,
      })
      .then(response => {
        console.log(response);

        setAccsesData({
          accessToken: response.accessToken,
          idToken: response.idToken,
          isLoggedin: true,
        });
        setModalVisible(true);
      })
      .catch(console.error);
  };
  const logout = () => console.log('Click on logout btn')

  const { isLoggedin, accessToken, idToken } = accsesData;
  return (
    <SafeAreaView style={styles.container}>
      {!codeRequestSent ? (
        <View>
          <TextInput
            placeholder="Enter Phone"
            onChangeText={text => setPhone(text)}
          />
          <Button
            title={logginIn ? 'Processing...' : 'Get Code'}
            onPress={getLoginCode}
          />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Enter Code"
            value={code}
            onChangeText={text => setCode(text)}
          />
          <Button title="Login" onPress={loginUser} />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(false);
              }}
            >
              <View >
                <View style={styles.modalView}>
                  <Text style={styles.modalText}> Login Successful 👍🏼🎉</Text>
                  <Text style={styles.modalText}> Here are your details:</Text>
                  <Text style={styles.modalText}> Access Token: {' ' + accessToken}</Text>
                  <Text style={styles.modalText}>
                    Id Token:
                    {idToken.split('').length > 25
                      ? `${idToken.substring(0, 25)}...`
                      : idToken}
                  </Text>
                  <Text style={styles.modalText}> isLoggedin: {' ' + isLoggedin}</Text>
                  <Button title="Logout" onPress={logout} />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default AuthScreen;
