import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ArtistCard from '../components/ArtistCard';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dummyResults = [
    { id: '1', name: 'DJ Mike', type: 'DJ', genre: 'House, Techno', rating: 4.8 },
    { id: '2', name: 'Sarah Dance', type: 'Bauchtänzerin', genre: 'Oriental', rating: 4.9 },
    { id: '3', name: 'DJ Lisa', type: 'DJ', genre: 'Hip-Hop, R&B', rating: 4.7 },
    { id: '4', name: 'Tom Beat', type: 'DJ', genre: 'EDM', rating: 4.6 },
  ];

  const filteredResults = dummyResults.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Suche nach Künstlern, Genres..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filter:</Text>
        <View style={styles.filterTags}>
          <View style={styles.filterTag}>
            <Text>DJs</Text>
          </View>
          <View style={styles.filterTag}>
            <Text>Tänzer</Text>
          </View>
          <View style={styles.filterTag}>
            <Text>Verfügbar</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={filteredResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultCard}>
            <ArtistCard artist={item} />
          </View>
        )}
        contentContainerStyle={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterContainer: {
    padding: 15,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterTag: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  resultsList: {
    padding: 15,
  },
  resultCard: {
    marginBottom: 15,
  },
});

export default SearchScreen;