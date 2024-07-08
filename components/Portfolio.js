import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const dummyPortfolio = [
  {
    id: 1,
    name: 'Tech Growth Fund',
    type: 'Mutual Fund',
    value: '$5,000',
  },
  {
    id: 2,
    name: 'High Yield Savings',
    type: 'Fixed Deposit',
    value: '$10,000',
  },
  {
    id: 3,
    name: 'Global Equity',
    type: 'Stocks',
    value: '$7,500',
  },
];

function Portfolio() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Portfolio</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.startInvesting}>
          <Image
            source={{ uri: 'https://assets2.kuvera.in/production/atlantis/web/assets/img/no-investments.svg' }}
            style={styles.image}
          />
          <Text style={styles.startInvestingText}>Start Investing!</Text>
          <View style={styles.investmentOptions}>
            {dummyPortfolio.map(item => (
              <View key={item.id} style={styles.investmentOption}>
                <Text style={styles.investmentType}>{item.type}</Text>
                <Text>Explore & invest in {item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startInvesting: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  startInvestingText: {
    fontSize: 20,
    marginVertical: 20,
  },
  investmentOptions: {
    width: '80%',
  },
  investmentOption: {
    marginBottom: 20,
  },
  investmentType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Portfolio;
