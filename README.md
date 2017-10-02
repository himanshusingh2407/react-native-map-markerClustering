# react-native-map-markerClustering

A react-native module to add map marker clustering in [airbnb/react-native-map](https://github.com/airbnb/react-native-maps) for both iOS and Android.

## Dependencies
```
  react: >=15.4.0
  react-native >=0.40
  react-native-maps >=0.15.0
```

## Installation
Make sure you have `react-native-maps` installed and react native linking is done. If not then follow this for [Installation instructions](https://github.com/airbnb/react-native-maps).

Or do this :

#### Using npm
```
npm install react-native-maps --save
react-native link react-native-maps
```

#### Using Yarn
```
yarn add react-native-maps 
react-native link react-native-maps
```

### Install react-native-map-markerclustering 

#### Using npm
```sh
npm install react-native-map-markerclustering --save
```
#### Using Yarn
```sh
yarn add react-native-map-markerclustering
```


### How to use?

1. Import MapView from `react-native-map-markerclustering` and Marker from `react-native-maps`
```javascript
import MapView from 'react-native-map-markerclustering';
import Marker from 'react-native-maps';
```

2. Inside render use MapView and Marker like this:
```javascript
        <MapView
            region={{ latitude: 28.5,
                      longitude: 25.2,
                      latitudeDelta: 7.6,
                      longitudeDelta: 7.6}}
            style={{width: 320, height: 500}}>
            <Marker coordinate={{latitude: 28.0, longitude: 24.2}} />
            <Marker coordinate={{latitude: 25.7, longitude: 24.7}} />
            <Marker coordinate={{latitude: 28.1, longitude: 24.4}} />
            <Marker coordinate={{latitude: 29.6, longitude: 24.3}} />
            <Marker coordinate={{latitude: 27.6, longitude: 24.0}} />
            <Marker coordinate={{latitude: 26.1, longitude: 24.8}} />
            <Marker coordinate={{latitude: 28.9, longitude: 25.9}} />
            <Marker coordinate={{latitude: 30.2, longitude: 25.0}} />
        </MapView>
```
