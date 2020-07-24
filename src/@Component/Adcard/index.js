/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, SectionList} from 'react-native';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
  MediaView,
} from 'react-native-admob-native-ads';
import {moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {light, regular},
} = Config;

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Add() {
  return (
    <>
      <View style={{flex:1}}>
        <NativeAdView
          style={{
            width: '100%',
            alignSelf: 'center',
            height: moderateScale(210),
            backgroundColor: 'white',
          }}
          adUnitID="ca-app-pub-2085032768852939/2994627257" // TEST adUnitID
        >
          <View
            style={{
              height: 180,
              width: '100%',
              backgroundColor: Secondary,
            }}>
            <MediaView style={{height: 120, width: '100%'}} />
            <View />
            <View
              style={{
                height: 180,
                width: '100%',
                position: 'absolute',
                flexDirection: 'row',
                marginTop: moderateScale(120),
              }}>
              <IconView
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <View style={{}}>
                <HeadlineView
                  style={{
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: 'white',
                    fontFamily: light,
                  }}
                />
                <TaglineView
                  numberOfLines={1}
                  style={{
                    fontSize: 7,
                    color: 'white',
                  }}
                />
                <AdvertiserView
                  style={{
                    fontSize: 10,
                    color: 'white',
                  }}
                />
              </View>
            </View>
            <CallToActionView
              style={{
                height: 25,
                paddingHorizontal: 12,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                elevation: 10,
                marginTop: moderateScale(60),
              }}
              textStyle={{color: Primary, fontSize: 12}}
            />
          </View>
        </NativeAdView>
      </View>
    </>
  );
}
