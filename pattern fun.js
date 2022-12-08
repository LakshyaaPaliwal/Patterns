function RTriangle()
{
    a.value = ''; 
   let i,j,k;

   for(i=1;i<=6;i++)
   {
    for(j=1;j<=i;j++)
    {
        a.value += "*";
    } 
        a.value  +="\n" ;
   }
}

function ReTriangle()
{
    a.value = ''; 
   let i,j,k;

   for(i=1;i<=6;i++)
   {
    for(j=1;j<=6+1-i;j++)
    {
        a.value += "*";
    } 
        a.value  +="\n" ;
   }
}

function Pyramid()
{
    a.value = ''; 
    let i,j,k;

   for(i=0;i<=6;i++)
   {
    for(j=0;j<=6+1-i;j++)
    {
        a.value += " ";
    } 
    for(k=0;k<=i*2;k++)
    {
        a.value += "*";
    } 
        a.value  +="\n" ;
   }
}

function clearpage()
{
    debugger
    //(".sm-new").clear();        
    button6.addEventListener('click', function handleClick() 
                                     {  a.value = ''; 
                                     });
}