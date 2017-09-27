# react-native-map-markerClustering
Add marker clustering in airbnb/react-native-map for both iOS and Android.

## Prerequisites
  `react-native-maps`
### To install prerequisite with npm

```sh
npm install react-native-maps --save
react-native link react-native-maps
```
### To install prerequisite with yarn
```sh
yarn add react-native-maps 
react-native link react-native-maps
```

  - Minimum versions you need for this module:

        react: >=15.4.0
        react-native >=0.40
        react-native-maps >=0.15.0

## Installation

### To install it with npm

```sh
npm install react-native-map-markerclustering --save
```
### To install it with yarn
```sh
yarn add react-native-map-markerclustering
```


### Usage

Usage is very simple:
1. Import MapView
```javascript
import MapView from 'react-native-map-markerclustering';
```
- Import Marker
```javascript
import Marker from 'react-native-maps';
```
2. Add this to your render method (you can put your own markers and region):
```javascript
<MapView
    region={{latitude: 52.5, longitude: 19.2,
             latitudeDelta: 8.5, longitudeDelta: 8.5}}
    style={{width: mapWidth, height: mapHeight}}>
    <Marker coordinate={{latitude: 52.0, longitude: 18.2}} />
    <Marker coordinate={{latitude: 52.4, longitude: 18.7}} />
    <Marker coordinate={{latitude: 52.1, longitude: 18.4}} />
    <Marker coordinate={{latitude: 52.6, longitude: 18.3}} />
    <Marker coordinate={{latitude: 51.6, longitude: 18.0}} />
    <Marker coordinate={{latitude: 53.1, longitude: 18.8}} />
    <Marker coordinate={{latitude: 52.9, longitude: 19.4}} />
</MapView>
```
3. **That's all!**.

### Demo
![Alt Text](https://raw.githubusercontent.com/venits/react-native-map-clustering/master/demo.gif)
