import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';

const DATA = require('./data/pokedex.json');

const PokemonCard = ({ pokemon }) => (
    <View style={styles.item}>
        <View>
            <Text style={styles.title}>{pokemon.name.english}</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                {pokemon.type.map((type) => (<Text style={styles.type}>{type}</Text>))}
            </View>
        </View>
        <Image
            style={styles.pokemon}
            source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png',
            }}
        />
    </View>
);

export default function App() {
    const renderItem = ({ item }) => <PokemonCard pokemon={item} />;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        flex:1,
        flexDirection: 'row',
        alignContent: 'space-between',
        backgroundColor: '#686868',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        maxHeight: 100,
        minHeight: 100,
        borderRadius: 25
    },
    title: {
      fontSize: 32,
      color: 'white',
    },
    type: {
        fontSize: 24,
        color: '#ffd900',
        paddingBottom: 50,
        marginRight: 8,
    },
    pokemon: {
      width: 150,
      height: 150,
      position: 'absolute',
      left: 225,
      top: -25,
    },
});
