import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5
  },
  dialogText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    paddingVertical: 20,
  },
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  video: {
    height: 320,
    borderRadius: 18,
  },
  dialogLineContainer: {
    marginVertical: 10,
  },
  characterMe: {
    paddingVertical: 20,
    backgroundColor: "#ee692f"
  },
  characterYou: {
    paddingVertical: 20,
    backgroundColor: "#00bd0d"
  }
});

export { styles };