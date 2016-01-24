
var titleContent = {title: "Decoded Enigma Results"};

module.exports.getCode = function(encodedParamsObject, callback){

    var rotorI        = new enigmajs.Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
    var rotorIII      = new enigmajs.Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
    var rotorIV       = new enigmajs.Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
    var reflector     = new enigmajs.Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');
    var plugboard     = new enigmajs.Plugboard( 'AD CN ET FL GI JV KZ PU QY WX' );
    var entryWheel    = new enigmajs.EntryWheel('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    var enigma = new enigmajs.Enigma([rotorI, rotorIV, rotorIII], reflector, plugboard, entryWheel);

    var paramsObject = decodeURI(encodedParamsObject);

    if(paramsObject){
        callback(enigma.string( paramsObject ));
    }
    else{
        callback(null);
    }
};
