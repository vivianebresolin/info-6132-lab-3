import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#6cb4ae',
  },
  value: {
    fontSize: 16,
    color: 'gray'
  },
  fontSize: {
    fontSize: 16
  },
  labelInBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6cb4ae',
  },
  itemsWithLabelInBold: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  itemSecondLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 6
  }
});

export default styles;