import JSONExplorer from './components/JSONExplorer';

const JSONData = {
  'date': '2021-10-27T07:49:14.896Z',
  'hasError': false,
  'favorite': null,
  'fields': [
    {
      'id': '4c212130',
      'prop': 'iban',
      'value': 'DE81200505501265402568',
      'hasError': false
    },
    {
      'id': '4c212131',
      'prop': 'bob',
      'value': 'DE81200505501263495834',
      'hasError': true,
      'names': [23, 34, 34, 44],
      'user': {
        'id': 23,
        'name': 'Toms'
      }
    }
  ]
};

const App = () => {
  return (
    <JSONExplorer jsonData={JSONData} />
  );
};

export default App;
