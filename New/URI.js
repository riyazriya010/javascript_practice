/*
 This encode and decode is used to make secure the uri.

 The encodeUri method is used to encode the uri to make safe this will generate some random
 values in that main information
     """ but this will generate if the query params having any non-asci values or special characters
     it will not work for ascii charaters """

The decodeUri is used to decode the uri from encode to same original
*/

const uri = 'https://menscart.site/?name=Riyas ^ &place=Coimbatore';
const encode = encodeURI(uri);
console.log('encodeUri: ', encode);

try {
    console.log('decodeUri: ',decodeURI(encode));
} catch (e) {
    console.log(e)
}
