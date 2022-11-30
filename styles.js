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
    color: 'white'
  },
  dialogText: {
    fontSize: 15,
    color: 'white'
  },
  videoContainer: {
    flex: 1,
    paddingTop: 58,    
  },
  video: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  characterMe: {
    backgroundColor: "olive"
  },
  characterYou: {
    backgroundColor: "plum"
  }
});

export { styles };