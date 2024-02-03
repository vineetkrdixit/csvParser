import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {readString} from 'react-native-csv';
import RNFS from 'react-native-fs';

const Homesreen = ({navigation}: any) => {
  const [csvData, setCsvData] = useState([]);

  const parseCSV = async () => {
    try {
      const fileData = await DocumentPicker.pick({
        type: DocumentPicker.types.allFiles,
      });
      let fileUri = fileData?.[0]?.uri;
      await RNFS.readFile(fileUri, 'ascii').then(res => {
        if (res) {
          parseCsvData(res);
        }
      });
    } catch (error) {
      console.error('Error picking CSV file:', error);
    }
  };

  const parseCsvData = (csvContent: string) => {
    const data = readString(csvContent);
    const csvArray: any = data?.data;

    // Convert CSV array to JSON
    const headers = csvArray[0];
    const jsonData = csvArray.slice(1).map((row: {[x: string]: any}) => {
      return headers?.reduce(
        (
          obj: {[x: string]: any},
          header: string | number,
          index: string | number,
        ) => {
          obj[header] = row[index];
          return obj;
        },
        {},
      );
    });
    setCsvData(jsonData);
    if (csvData?.length) {
      navigation.navigate('csvcontent', {csvData: csvData});
    }
  };
  return (
    <View style={styles.mainBody}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={parseCSV}
        style={styles.btnStyle}>
        <Text style={styles.btnText}>Pick your csv file</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homesreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 10,
  },
  btnText: {fontSize: 15, fontWeight: '900', color: 'white'},
});
