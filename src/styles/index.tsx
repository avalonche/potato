import { StyleSheet } from "react-native";

const buttonColor = 'orange';

const globalStyles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  outlineButton: {
    padding: 10,
    marginHorizontal: 10,
    borderColor: buttonColor,
    borderWidth: 2,
    borderRadius: 5
  },
  solidButton: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: buttonColor,
    borderRadius: 5
  }
});

export default globalStyles;