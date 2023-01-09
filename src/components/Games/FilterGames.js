import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import filterIcon from '../../assets/Games/filterIcon.png';


const FilterGames = (props) => {
  const [typeSelect, setChecked] = useState(props.item.type == "" ? "Todos" : props.type);
  const [filterName, setFilterName] = useState(props.item.name);
  const [filterActivated, setFilterActivated] = useState(false)

  const types = ["Todos", "Quizz", "Combinação", "Peddy-Paper"]

  const filterButton = () => {
    setFilterActivated(!filterActivated);
  }

  const changeText = (text) => {
    setFilterName(text)
    props.onFilterText(text)
  }

  const changeType = () => {
    props.onFilterType(typeSelect)
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.textInput} 
          placeholder="Pesquisar Jogo"
          placeholderTextColor="#000" 
          onChangeText={text => changeText(text)}
          value={filterName}
        />
        <TouchableOpacity style={styles.filterButton} onPress={filterButton}>
        <Image 
          source={filterIcon}
          style={styles.image}
        />
        </TouchableOpacity>
      </View>
      <View>
        {
          filterActivated === true ?
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
          : ''
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: -5,
  },
  selectDropdown: {
    width: "65%",
    height: 40,
    borderWidth: 2,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  textInput: {
    marginVertical: 30,
    marginLeft: 12,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 43,
    width: "77%",
    color: "black",
    backgroundColor: "#ededed"
  },
  filterButton:{
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    transform: [{ rotate: '90deg' }],
  },
  image: {
    width: 35,
    height: 35,
  },
});

export default FilterGames;