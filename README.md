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


## How to use?

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
                      latitudeDelta: 6.5,
                      longitudeDelta: 6.5}}
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
## Extra Props

All the props of MapView of `react-native-maps` cab be used except **onRegionChangeComplete** as it overwrites this.

| Prop               | Type   | Default Value | Description                                                           |
|--------------------|--------|---------|----------------------------------------------------------------|
| clusterColor       | String | #F5F5F5 | Background color of cluster.                                         |
| clusterTextColor   | String | #FF5252 | Color of text in cluster.                                      |
| clusterBorderColor | String | #FF5252 | Color of border. Set to transparent if you don't want borders. |
| clusterBorderWidth | Int    | 1       | Width of border. Set to 0 if you don't want borders.           |
| onClusterPress | Function    | null       | Allows you to control cluster on click event.  Function returns coordinate of cluster.         |
| customClusterMarkerDesign | HTML element    | null       | Custom background for your clusters.           |

#### Example 1:
```
        <MapView
    clusterColor = '#ACB234'
    clusterTextColor = '#FFFFFF'
    clusterBorderColor = '#2A2A2A'
    clusterBorderWidth = {2}
    region={{latitude: 28.5, longitude: 25.2,
             latitudeDelta: 6.5, longitudeDelta: 6.5}}
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
#### Exapmle 2 (onClusterPress) :
```
    <MapView
        ref = {(ref)=>mapView=ref}
        onClusterPress={(coordinate)=>{
            this.animate(coordinate);
        }}
       ...
    </MapView>
```

#### Example 3 (customClusterMarkerDesign) :
```
    <MapView
        customClusterMarkerDesign =
        {(<Image style = {{width: imageWidth, height:imageHeight}}
        source = {require('./customCluster.png')}/>)}
           ...
    </MapView>
```

### For using ref

#### Inside render
```
    <MapView
            ref = {(ref)=>mapView=ref}
            ...
    </MapView>
```
#### Sample (to use `animateToRegion`)
```
    animate(){
       let r = {
            latitude: 42.5,
            longitude: 15.2,
            latitudeDelta: 7.5,
            longitudeDelta: 7.5,
        };
        mapView._root.animateToRegion(r, 2000);
    }
```
