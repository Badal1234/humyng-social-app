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
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          width: width,
          height: height,
        }}>
        <NativeAdView
          style={{
            width: '100%',
            alignSelf: 'center',
            height: height,
          }}
          adUnitID="ca-app-pub-2085032768852939/2994627257" // TEST adUnitID
        >
          <View
            style={{
              height: 100,
              width: '100%',
              backgroundColor: Secondary,
            }}>
            <View>
              <MediaView style={{height: height - 200}} />
            </View>
            <View
              style={{
                height: 100,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <IconView
                style={{
                  width: 60,
                  height: 60,
                }}
              />
              <View
                style={{
                  width: '65%',
                  maxWidth: '65%',
                  paddingHorizontal: 6,
                }}>
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
                    fontSize: 11,
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
              <AdBadge
                style={{
                  marginLeft: moderateScale(20),
                  backgroundColor: 'white',
                }}
              />

              <CallToActionView
                style={{
                  height: 45,
                  paddingHorizontal: 12,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  elevation: 10,
                }}
                textStyle={{color: Primary, fontSize: 14}}
              />
            </View>
          </View>
        </NativeAdView>
      </View>
    </>
  );
}
