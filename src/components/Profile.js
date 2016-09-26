import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import Badge from './Badge';

class Profile extends Component {
  getRowTitle = (userInfo, piece) => {
    const modified = (piece === 'public_repos') ? piece.replace('_', ' ') : piece;
    return modified[0] ? `${modified[0].toUpperCase()}${modified.slice(1)}` : modified;
  }

  renderUserInfo = () => {
    const { userInfo } = this.props;
    const wantedInfo = [
      'company', 'location', 'email', 'bio', 'public_repos',
    ];

    return wantedInfo.map((piece, index) => {
      if (!userInfo[piece]) {
        return null;
      }

      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}>{this.getRowTitle(userInfo, piece)}</Text>
            <Text style={styles.rowContent}>{userInfo[piece]}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    const { userInfo } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={userInfo} />
        {this.renderUserInfo()}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});

export default Profile;
