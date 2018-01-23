import React, { Component } from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from  'react-native';
import {Marker} from 'react-native-maps';
import { width as w , height as h } from 'react-native-dimension';

const height = h(60);
const width = w(60);

export default class CustomMarker extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            props: {},
            value: 0,
            clusterColor: '#FC1424',
            clusterTextColor: '#FFFFFF',
            clusterBorderColor: '#FFFFFF',
            clusterBorderWidth: 1
        };
    }

    shouldComponentUpdate(nextProps, nextState){
        /* if(this.state.props.coordinate === nextProps.props.coordinate
         && this.state.value === nextProps.value){
             return(false);
         }else{
             return(true);
         }*/
        return(true);
    }

    render(){

        this.state.value = this.props.value;
        this.state.props = this.props.props;

        this.state.clusterColor = this.props.clusterColor;
        this.state.clusterTextColor = this.props.clusterTextColor;
        this.state.clusterBorderColor = this.props.clusterBorderColor;
        this.state.clusterBorderWidth = this.props.clusterBorderWidth;

        if( this.state.clusterColor === undefined || this.state.clusterColor == ''){
            this.state.clusterColor = '#FC1424';
        }if( this.state.clusterTextColor === undefined || this.state.clusterTextColor == ''){
            this.state.clusterTextColor = '#FFFFFF';
        }if( this.state.clusterBorderColor === undefined || this.state.clusterBorderColor == ''){
            this.state.clusterBorderColor = '#FFFFFF';
        }if( this.state.clusterBorderWidth === undefined || this.state.clusterBorderWidth == ''){
            this.state.clusterBorderWidth = 1;
        }

        let textForCluster = '';
        let markerWidth, markerHeight, textSize;
        let value = this.state.value;

        if(value>=2 && value<=10){
            textForCluster = value.toString();
            markerWidth = width*2/15;
            markerHeight = width*2/15;
            textSize = height/40;
        }if(value>10&&value<=25){
            textForCluster = '10+';
            markerWidth = width/7;
            markerHeight = width/7;
            textSize = height/40;
        }if(value>25&&value<=50){
            textForCluster = '25+';
            markerWidth = width*2/13;
            markerHeight = width*2/13;
            textSize = height/40;
        }if(value>50&&value<=100){
            textForCluster = '50+';
            markerWidth = width/6;
            markerHeight = width/6;
            textSize = height/38;
        }if(value>100){
            textForCluster = '100+';
            markerWidth = width*2/11;
            markerHeight = width*2/11;
            textSize = height/38;
        }

        let htmlElement;
        let isCluster;
        if(textForCluster !== ''){
            isCluster = 1;
            if(this.props.customClusterMarkerDesign && typeof this.props.customClusterMarkerDesign === "object"){
                htmlElement = <TouchableWithoutFeedback onPress = {()=>{
                      this.props.onClusterPress(this.state.props.coordinate);
                  }}><View style = {{width: markerWidth, height: markerHeight, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{width: markerWidth, textAlign: 'center', position:'absolute',
                        fontSize: textSize, backgroundColor: 'transparent', color: this.state.clusterTextColor, fontWeight: 'bold'}}
                          children = {textForCluster}/>
                    {this.props.customClusterMarkerDesign}
                </View></TouchableWithoutFeedback>;
            }else{
                htmlElement = (
                  <TouchableWithoutFeedback onPress = {()=>{
                        this.props.onClusterPress(this.state.props.coordinate);
                    }}><View style = {{ borderRadius: markerWidth, position: 'relative', backgroundColor: this.state.clusterColor, width: markerWidth, height: markerHeight,
                        borderWidth: this.state.clusterBorderWidth, borderColor: this.state.clusterBorderColor, justifyContent: 'center', alignItems: 'center'}}>
                        <Text
                            style = {{width: markerWidth, textAlign: 'center',
                                fontSize: textSize, backgroundColor: 'transparent', color: this.state.clusterTextColor, fontWeight: 'bold'}}>
                            {textForCluster}</Text>
                    </View></TouchableWithoutFeedback>);
            }
        }else{
            isCluster = 0;
            if(this.props.children !== undefined){
                htmlElement = this.props.children;
            }else{
                htmlElement = (null);
            }
        }

        if(isCluster === 1){
          const markerProps = Object.assign({}, this.state.props);
          delete markerProps.image; // To remove custom marker image if it is a cluster
            return(
                <Marker
                    key = {isCluster}
                    {...markerProps}
                    title={null}
                    onCalloutPress={null}>
                    {htmlElement}
                </Marker>
            );
        }else{
            return(
                <Marker
                    key = {isCluster}
                    {...this.state.props}>
                    {htmlElement}
                </Marker>
            );
        }
    }
}
