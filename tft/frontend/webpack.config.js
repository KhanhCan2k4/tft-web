const path = require('path');
const dgram = require('dgram');
const net = require('net');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const stream = require('stream');
const http = require('http');
const https = require('https');
const zlib = require('zlib');

module.exports = {
    mode: 'development',
    resolve: {
        fallback: {
          path: require.resolve('path-browserify'),
          dgram: require.resolve('dgram-browserify'),
          net: require.resolve('net-browserify'),
          fs: require.resolve('fs'),
          os: require.resolve('os-browserify/browser'),
          crypto: require.resolve('crypto-browserify'),
          stream: require.resolve('stream-browserify'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          zlib: require.resolve('browserify-zlib')
        }
      }
      
};
