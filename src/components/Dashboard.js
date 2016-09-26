import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

class Dashboard extends Component {
  goToProfile = () => {

  }

  goToRepos = () => {

  }

  goToNotes = () => {

  }

  makeBackground = (btnIndex) => {
    const obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1,
    };

    switch (btnIndex) {
      case 0:
        obj.backgroundColor = '#48BBEC';
        break;
      case 1:
        obj.backgroundColor = '#E77AAE';
        break;
      case 2:
        obj.backgroundColor = '#758BF4';
        break;
      default:
        obj.backgroundColor = '#48BBEC';
        break;
    }

    return obj;
  }

  render() {
    console.log('this.props.userInfo: ', this.props.userInfo);
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.userInfo.avatar_url }} style={styles.image} />
        <TouchableHighlight
          onPress={this.goToProfile}
          underlayColor="#88D4F5"
          style={this.makeBackground(0)}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToRepos}
          underlayColor="#88D4F5"
          style={this.makeBackground(1)}
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToNotes}
          underlayColor="#88D4F5"
          style={this.makeBackground(2)}
        >
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

export default Dashboard;
