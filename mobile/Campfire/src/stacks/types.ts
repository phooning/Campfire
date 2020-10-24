import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteProp } from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";

export type InsideStackParamList = {
  HomeScreen: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  InsideStackParamList,
  'HomeScreen'
>;

export type HomeScreenRouteProp = RouteProp<InsideStackParamList, 'HomeScreen'>;
