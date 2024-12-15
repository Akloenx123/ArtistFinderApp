import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ArtistCard from '../components/ArtistCard';

const HomeScreen = () => {
  const dummyArtists = [
    { id: '1', name: 'DJ Mike', type: 'DJ', genre: 'House, Techno', rating: 4.8 },
    { id: '2', name: 'Sarah Dance', type: 'Bauchtänzerin', genre: 'Oriental', rating: 4.9 },
    { id: '3', name: 'DJ Lisa', type: 'DJ', genre: 'Hip-Hop, R&B', rating: 4.7 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending DJs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummyArtists.filter(artist => artist.type === 'DJ').map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Tänzer</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummyArtists.filter(artist => artist.type === 'Bauchtänzerin').map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Neue Künstler</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummyArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;