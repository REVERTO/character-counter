import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import App from './App'

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });

// デバッグは以下のコマンドをターミナルで実行
// ./node_modules/.bin/webpack-dev-server -d --config ./web/webpack.config.js --inline --hot --colors

// リリース用バンドル出力は以下のコマンドをターミナルで実行
// ./node_modules/.bin/webpack -p --config ./web/webpack.config.js
