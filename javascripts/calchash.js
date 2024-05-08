$(document).ready(function() {
    
    var hashValue, kilohashvalue, megahashvalue, gigahashvalue, terahashvalue, petahashvalue, exahashvalue;
    
    
    
    $("input").keyup(function(){
        var value = $(this).val();
        var type = $(this).attr("name");
        if(value != '' && !(value[value.length - 1] == '.' || value[value.length - 1] == ',') && parseFloat(value) != 0){
            value = value.replace(',', '.');
            value = parseFloat(value);
            if(type == 'hash'){
                hashValue        = correctValue(value);
                kilohashvalue    = correctValue(value/1000);
                megahashvalue    = correctValue(value/1000000);
                gigahashvalue    = correctValue(value/1000000000);
                terahashvalue    = correctValue(value/1000000000000);
                petahashvalue    = correctValue(value/1000000000000000);
                exahashvalue     = correctValue(value/1000000000000000000);
            }else if(type == 'kilohash'){
                hashValue        = correctValue(value*1000);
                kilohashvalue    = correctValue(value);
                megahashvalue    = correctValue(value/1000);
                gigahashvalue    = correctValue(value/1000000);
                terahashvalue    = correctValue(value/1000000000);
                petahashvalue    = correctValue(value/1000000000000);
                exahashvalue     = correctValue(value/1000000000000000);
            }else if(type == 'megahash'){
                hashValue        = correctValue(value*1000000);
                kilohashvalue    = correctValue(value*1000);
                megahashvalue    = correctValue(value);
                gigahashvalue    = correctValue(value/1000);
                terahashvalue    = correctValue(value/1000000);
                petahashvalue    = correctValue(value/1000000000);
                exahashvalue     = correctValue(value/1000000000000);
            }else if(type == 'gigahash'){
                hashValue        = correctValue(value*1000000000);
                kilohashvalue    = correctValue(value*1000000);
                megahashvalue    = correctValue(value*1000);
                gigahashvalue    = correctValue(value);
                terahashvalue    = correctValue(value/1000);
                petahashvalue    = correctValue(value/1000000);
                exahashvalue     = correctValue(value/1000000000);
            }else if(type == 'terahash'){
                hashValue        = correctValue(value*1000000000000);
                kilohashvalue    = correctValue(value*1000000000);
                megahashvalue    = correctValue(value*1000000);
                gigahashvalue    = correctValue(value*1000);
                terahashvalue    = correctValue(value);
                petahashvalue    = correctValue(value/1000);
                exahashvalue     = correctValue(value/1000000);
            }else if(type == 'petahash'){
                hashValue        = correctValue(value*1000000000000000);
                kilohashvalue    = correctValue(value*1000000000000);
                megahashvalue    = correctValue(value*1000000000);
                gigahashvalue    = correctValue(value*1000000);
                terahashvalue    = correctValue(value*1000);
                petahashvalue    = correctValue(value);
                exahashvalue     = correctValue(value/1000);
            }else if(type == 'exahash'){
                hashValue        = correctValue(value*1000000000000000000);
                kilohashvalue    = correctValue(value*1000000000000000);
                megahashvalue    = correctValue(value*1000000000000);
                gigahashvalue    = correctValue(value*1000000000);
                terahashvalue    = correctValue(value*1000000);
                petahashvalue    = correctValue(value*1000);
                exahashvalue     = correctValue(value);
            }
    
            $('input#hash').val(hashValue);
            $('input#kilohash').val(kilohashvalue);
            $('input#megahash').val(megahashvalue);
            $('input#gigahash').val(gigahashvalue);
            $('input#terahash').val(terahashvalue);
            $('input#petahash').val(petahashvalue);
            $('input#exahash').val(exahashvalue);
        }
    });
    
    function correctValue(number){
        var roundedNumber;
    
        roundedNumber = Math.round(1000*number)/1000;
        if(roundedNumber>0) return roundedNumber;
    
        roundedNumber = Math.round(10000*number)/10000;
        if(roundedNumber>0) return roundedNumber;
    
        roundedNumber = Math.round(100000*number)/100000;
        if(roundedNumber>0) return roundedNumber;
    
        roundedNumber = Math.round(1000000*number)/1000000;
        if(roundedNumber>0) return roundedNumber;
    
        var numberArray = String(number).split('e-');
        if(numberArray.length>1){
            var toFixedNum = parseInt(numberArray[1]) + 3;
            return number.toFixed(toFixedNum);
        }else{
            return number;
        }
    }

});