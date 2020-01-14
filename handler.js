function main(params) {
  // log the parameters to stdout
     console.log('params:', params);
  //
  //     // if a value for name is provided, use it else use a default
         var name = params.name || 'rishi';
  //
  //         // if a value for place is provided, use it else use a default
             var place = params.place || 'nashik';
  //
  //             // construct the message using the values for name and place
                 return {msg:  'Hello, ' + name + ' from ' + place + '!'};
                 }
