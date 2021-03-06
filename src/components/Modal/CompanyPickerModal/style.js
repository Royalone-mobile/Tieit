// @flow

import { StyleSheet } from 'react-native';

import { WINDOW_WIDTH, WINDOW_HEIGHT } from 'AppConstants';
import { BLACK, LIGHT_GRAY, GRAY } from 'AppColors';

const PADDING = 8;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';

export default StyleSheet.create({
  overlayStyle: {
    flex: 1,
    backgroundColor: '#fff'
  },
  optionContainer: {
    flex: 1
  },
  cancelContainer: {
    left: WINDOW_WIDTH * 0.1,
    top: 45
  },
  selectStyle: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: BORDER_RADIUS
  },
  selectTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE
  },
  cancelStyle: {
    borderRadius: BORDER_RADIUS,
    width: WINDOW_WIDTH * 0.8,
    backgroundColor: 'rgba(255,255,255,1)',
    paddingVertical: 12
  },
  cancelTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: FONT_SIZE
  },
  optionStyle: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  optionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR
  },
  sectionStyle: {
    padding: PADDING * 2,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  sectionTextStyle: {
    textAlign: 'center',
    fontSize: FONT_SIZE
  },
  groupItemContainer: {
    flex: 1,
    height: 60,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: LIGHT_GRAY,
    justifyContent: 'center'
  },
  groupName: {
    fontSize: 16,
    fontWeight: '400',
    color: BLACK
  },
  groupAddedData: {
    fontSize: 14,
    color: GRAY
  },
  phoneIcon: {
    fontSize: 16,
    color: GRAY,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  phoneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
});
