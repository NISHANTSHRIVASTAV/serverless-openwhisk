'use strict';

function main(params) {
  const name = params.name || 'Iron Man';
  console.log('log', { payload: `Hello, ${name}` });
  return { payload: `Hello, ${name}!` };
}

exports.hello = hello;
