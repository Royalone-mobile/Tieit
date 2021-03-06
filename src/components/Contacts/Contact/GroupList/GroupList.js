// @flow

import React, { PureComponent } from 'react';
import {
  RefreshControl,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import GroupListItem from './GroupListItem';
import { promisify } from 'AppUtilities';
import { WHITE } from 'AppColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F7'
  },
  listView: {
    backgroundColor: WHITE
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#EDEDED',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    padding: 15
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: '#3E88D9'
  }
});

class GroupList extends PureComponent {

  constructor(props) {
    super(props);

    const activeItems = props.source.filter((item) => item.status === 1);

    this.state = {
      items: activeItems,
      refreshing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.source !== nextProps.source) {
      const activeItems = nextProps.source.filter((item) => item.status === 1);
      this.setState({ items: activeItems });
    }
  }

  onRefresh = () => {
    const { callBack } = this.props;

    if (callBack) {
      this.setState({ refreshing: true });

      promisify(callBack, null)
        .catch(() => {})
        .finally(() => {
          this.setState({ refreshing: false });
        });
    }
  }

  renderRow = (rowData) => {
    return (
      <GroupListItem groupData={rowData.item} />
    );
  }

  keyExtractor = (item) => item.id;

  render() {
    const { items, refreshing } = this.state;
    const { searchText, onCreateNew } = this.props;

    const regex = new RegExp(`${searchText.toLowerCase()}`, 'g');
    const searchResult = items.filter((item) => regex.test(item.name.toLowerCase()));

    return (
      <View style={styles.container}>
        {false && <TouchableOpacity style={styles.button} onPress={onCreateNew}>
          <Text style={styles.buttonText}>+    Create New Group</Text>
        </TouchableOpacity>}
        <FlatList
          style={styles.listView}
          data={searchResult}
          renderItem={this.renderRow}
          enableEmptySections={true}
          keyExtractor={this.keyExtractor}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh}
            />
          }
        />
      </View>
    );
  }
}

GroupList.propTypes = {
  source: PropTypes.array,
  itemClicked: PropTypes.func,
  onCreateNew: PropTypes.func,
  callBack: PropTypes.func,
  searchText: PropTypes.string
};

GroupList.defaultProps = {
  source: [],
  itemClicked: noop,
  onCreateNew: null,
  callBack: null,
  searchText: ''
};

export default GroupList;
