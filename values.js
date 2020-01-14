   // var promise = new Promise(function(resolve, reject){
   //       resolve(" MANHATTAN");
   //    }).then(function attachTitle(resolve){
   //       return "DR." +  resolve
   //    }) .then(function(resolve){
   //    console.log(resolve)
   //    })  




   function attachTitle(title) {
      return 'DR. ' + title;
    }

    Promise.resolve('MANHATTAN')
      .then(attachTitle)
      .then(console.log);