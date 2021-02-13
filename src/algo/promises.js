function myProise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve({users: ['ion']});
      reject(new Error("http error"));
    }, 3000);
  });
}
myProise()
  .then((users) => {
    debugger;
    console.log(users);
  })
  .catch((ex) => {
    debugger;
    console.log(ex);
  });


  //------------------

  1. login
  2. istoric cumparaturi
  3. istoric Payment
  4. grafic


  loginService.login('user', "password").then(user => {
    historyProduccts.getUserHistory(user.id).then(v=> {

    })
    .catch(ex => {
        // no prod
    })

    paymentHist.getUserHistory(user.id).then(userhist=> {
        paymentHist.showUserStatus(userhist.money).then(v=> {
        
        })
        .catch(ex => {
            // no prod
        })
    })
    .catch(ex => {
        // no prod
    })

  })
  .catch(ex => {
    // http, invalid user

  })


  try{
    const user = await loginService.login('user', "password").then(user => {
    const hist = await historyProduccts.getUserHistory(user.id);
    const xxx = await paymentHist.getUserHistory(user.id);
  }
  catch(ex => console.log(ex))

  try{
    const user = await loginService.login('user', "password").then(user => {
      const hist = await Promise.all([historyProduccts.getUserHistory(user.id), paymentHist.getUserHistory(user.id)]) ;
    }
    catch(ex => {
        
    })