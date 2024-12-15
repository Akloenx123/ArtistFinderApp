import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MessagesScreen = () => {
  const dummyMessages = [
    {
      id: '1',
      sender: 'Club XYZ',
      lastMessage: 'Sind Sie am nächsten Samstag verfügbar?',
      time: '14:30',
      unread: true,
    },
    {
      id: '2',
      sender: 'Event Agency',
      lastMessage: 'Danke für Ihre schnelle Antwort!',
      time: '12:15',
      unread: false,
    },
    {
      id: '3',
      sender: 'Private Party',
      lastMessage: 'Wir würden Sie gerne für unsere Veranstaltung buchen.',
      time: 'Gestern',
      unread: true,
    },
  ];

  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageContainer}>
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle" size={50} color="#007AFF" />
        {item.unread && <View style={styles.unreadDot} />}
      </View>
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.senderName}>{item.sender}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyMessages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 15,
  },
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  unreadDot: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 12,
    height: 12,
    backgroundColor: '#007AFF',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageTime: {
    fontSize: 14,
    color: '#666',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
  },
});

export default MessagesScreen;