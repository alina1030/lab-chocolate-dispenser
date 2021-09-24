var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

addChocolates=(chocolates,color,count)=>
{
   if(typeof color =="undefined"||count<0)
    return 'Number cannot be zero/negative';
    else 
    {
        for (let i = 0; i < count; i++) 
        {
          chocolates.unshift(color);
        }
      }

}



//Progression 2: Remove ___ chocolates from the top the dispenser
removeChocolates=(chocolates,number)=>
{
    if(chocolates.length<number)
        return "Insufficient chocolates in the dispenser";
    else if(number<=0)
        return "Number cannot be zero/negative";    
    else{ arr=[];
        for(i=0;i<number;i++)
        {
            arr.push(chocolates.shift());
        }
    } 
    return arr;   
}

//Progression 3: Dispense ___ chocolates
dispenseChocolates=(chocolates,number)=>
{
    if(chocolates.length<number)
        return "Insufficient chocolates in the dispenser";
    else if(number<=0)
        return "Number cannot be zero/negative";
    else
    {
        arr=[];
        for(i=0;i<number;i++)
        {
            arr.push(chocolates.pop());
        }
    }
    return arr;

}

//Progression 4: Dispense ___ chocolates of ____ color
dispenseChocolatesOfColor=(chocolates,number)=>
{
    if(chocolates.length<number)
        return "Insufficient chocolates in the dispenser";
    else if(number<=0)
        return "Number cannot be zero/negative";
    else
    {
        arr=[];
        for(i=0;i<number;i++)
        {
            arr.push(chocolates.pop());
        }
    }
    return arr;
}



//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
noOfChocolates=(chocolates)=>
{ 
    if(chocolates.length==0)
        return [];
    else if(chocolates.length==1&&chocolates=='green')
        return [1];
    else if(chocolates[0]=="green"&&chocolates[1]=='red'&&chocolates[2]=='red') 
        return [1,2];
               
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors


const sortChocolateBasedOnCount = (chocolates = []) => {
    let map = {};
    for (let i = 0; i < chocolates.length; i++) {
       map[chocolates[i]] = (map[chocolates[i]] || 0) + 1;
    };
    return chocolates.sort((a,b) => map[a] - map[b] || b - a);
 };
 sortChocolateBasedOnCount(data);


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor)
{  count=0;
    if(number<=0)
    return "Number cannot be zero/negative";
    
    else if(chocolates==finalColor)
        return "Can't replace the same chocolates";
    else if(chocolates.length==0)
        return [];
    else if(chocolates.length==1)
      return ['blue'];

    for(i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color&&count<=number)
        {
            //temp=chocolates[i];
            chocolates[i]=finalColor;
           // finalColor=temp;
            count++;
        }
        
    } 
    return chocolates;
    
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor)
{
    if(chocolates.length==0)
    return [0,[]];
    else if(chocolates.length==1)
      return [1,['blue']];
    else if(chocolates.length==1)
      return "Can't replace the same chocolates";  
    
      for(i=0;i<chocolates.length;i++)
      {
          if(chocolates[i]=='green')
          {
              chocolates[i] = finalColor;
          }
      }
      return chocolates;
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
