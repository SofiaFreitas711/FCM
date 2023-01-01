import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const FilterGames = (props) => {
  const [typeSelect, setChecked] = useState(props.type == "" ? "Todos" : props.type);

  const types = ["Todos", "Quizz", "Combinação", "Peddy-Paper"]

  const changeType = () => {
    props.onFilterType(typeSelect)
  }

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={types}
        onSelect={(selectItem, index) => {
          setChecked(selectItem)
        }}
        defaultButtonText={typeSelect}
        buttonTextAfterSelection={(selectedItem, index) => {
          changeType()
          return selectedItem
        }}
        buttonStyle={styles.selectDropdown} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: -5,
  },
  selectDropdown: {
    width: "65%",
    height: 40,
    borderWidth: 2,
  }
});

export default FilterGames;