/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Content, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePageItem from './src/components/homepage/HomePageItem';
import HomePage from './src/components/homepage/HomePage';

const App: () => React$Node = () => {
  return (
    <>
      <Container>
                {/* <Content  />
                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name='home' size={20} color="white"/>
                            <Text>Trang chủ</Text>
                        </Button>
                        <Button>
                            <Icon name='bell'size={20} color="white"/>
                            <Text>Thông báo</Text>
                        </Button>
                        <Button active>
                            <Icon name='action' size={20} color="white"/>
                            <Text>Hoạt động</Text>
                        </Button>
                        <Button>
                            <Icon name='user' size={20} color="white"/>
                            <Text>Trang cá nhân</Text>
                        </Button>
                    </FooterTab>
                </Footer> */}
                <HomePage/>
            </Container>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
