import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

export type PaginatorProps = {
  PageOrder: number; // The current active page
};

export const Paginator = ({ PageOrder }: PaginatorProps) => {
  const totalPages = 3; // Total number of pages
  const pages = Array.from({ length: totalPages }, (_, i) => (
    <View
      key={i}
      style={[
        styles.paginator,
        i === PageOrder ? styles.activePaginator : styles.inactivePaginator,
      ]}
    />
  ));

  return <View style={styles.container}>{pages}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 7,
  },
  paginator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activePaginator: {
    backgroundColor: '#4E785C', // Active page color
  },
  inactivePaginator: {
    backgroundColor: '#D9D9D9', // Inactive page color
  },
});
