
const coffeesASCIIArray = 
[
`\
      (
      ))
.-(--(( --.
'---------'
|         |-
|  café   | )
|         |/
'---------'
`,
`\
     ))
 (  ((
.-)---)---.
'---------'
|         |-
|  café   | )
|         |/
'---------'`,
`\
  (  ((
   )   )
.-(-------.
'---------'
|         |-
|  café   | )
|         |/
'---------'`,
`\
   )  )
  (  
.----)----.
'---------'
|         |-
|  café   | )
|         |/
'---------'
`
]
 
/*
    return void
    coffee
*/
function changeCoffeeTo(coffees=coffeesASCIIArray, index=0, pre)
{
    setTimeout(()=>{
        if(index == coffees.length) index = 0;
        pre.innerHTML = coffees[index]

        changeCoffeeTo(coffees, ++index, pre)
    },400);
}

export {changeCoffeeTo, coffeesASCIIArray}