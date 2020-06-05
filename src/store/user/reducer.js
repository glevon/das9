let gState ={
    user:[
        {
          id:101,
          name:"Inga",
          surname:"grigoryan",
          age:28,
          image:"./images/1.png", 
        },
        {
          id:102,
          name:"Hasmik",
          surname:"Aeraqelyan",
          age:32,
          image:"./images/2.png", 

        },
        {
          id:103,
          name:"Vardan",
          surname:"makaryan",
          age:50,
          image:"./images/3.png", 

        },
        {
          id:104,
          name:"Ani",
          surname:"Manukyan",
          age:16,
          image:"./images/4.png", 

        },
        {
          id:105,
          name:"Karen",
          surname:"Vardanyan",
          age:30,
          image:"./images/5.png", 

        },
      ],
    rev:1,
}

export  function userReducer(state=gState,action) {
    switch(action.type){
        case "delete":return{
            user:state.user.filter(a=>a.id!==action.value)
        }
        case "sort":return{
        // user:state.user.sort((a,b)=>a[action.value]-b[action.value])
        // user:state.user.sort((a,b)=>typeof(a[action.value])==="number"?a[action.value]-b[action.value]:a[action.value].localeCompare(b[action.value]))
        user:[...state.user].sort((a,b)=>a[action.value]>b[action.value]?state.rev:-state.rev),
        rev:state.rev*(-1)
      }


    }
    return state
}