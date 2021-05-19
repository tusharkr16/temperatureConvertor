const calculateTemp=()=>
{
    
    const tempValue=document.getElementById('temp').value;
    const optionSelect=document.getElementById('temp_diff');
    const optionValue=temp_diff.options[optionSelect.selectedIndex].value

    const celtofeh=(cel)=>{
            let Ferenheit= Math.round((cel*9/5)+32);
            return Ferenheit;
    }

    const fehtocel=(feh) =>{
        let Celcius=math.round((feh-32)*5/9);
        return Celcius;
    }

    let result;
    if(optionValue=='cel'){
        result=celtofeh(tempValue);
        document.getElementById('resultContainer').innerHTML=`= ${result}°Fahrenheit`;
    } else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Celsius`;
    }
    

} 