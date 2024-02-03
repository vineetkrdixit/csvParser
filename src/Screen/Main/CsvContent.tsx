import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const CsvContent = ({route}: any) => {
  const makeCSVTable = () => {
    const allKeys = [
      ...new Set(route.params?.csvData.flatMap((obj: {}) => Object.keys(obj))),
    ];
    let allValues = [];
    allValues = route.params?.csvData.flatMap(
      (obj: {[s: string]: unknown} | ArrayLike<unknown>) => [
        Object.values(obj),
      ],
    );

    return {
      tableHead: allKeys,
      tableData: allValues,
    };
  };

  const tableData = makeCSVTable();

  return (
    <ScrollView>
      <View style={styles.mainBody}>
        <Text>CSV content</Text>
        <Table borderStyle={styles.tableView}>
          <Row
            data={tableData?.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={tableData?.tableData} textStyle={styles.text} />
        </Table>
      </View>
    </ScrollView>
  );
};

export default CsvContent;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  mainBody: {flex: 1},
  tableView: {borderWidth: 2, borderColor: '#c8e1ff'},
});
