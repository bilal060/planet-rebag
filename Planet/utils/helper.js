/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllItemsCategory} from '../Store/homeApi';

export default function Helper({}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItemsCategory({}));
  }, []);
}
