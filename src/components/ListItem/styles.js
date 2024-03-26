import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#6cb4ae',
    backgroundColor: '#d2e8e6'
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewNameAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  viewData: {
    flex: 1,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6F61'
  },
  date: {
    fontSize: 13,
    marginTop: 4,
    color: 'gray'
  },
});

export default styles;