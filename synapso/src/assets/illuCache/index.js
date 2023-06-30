/**
 * This is the index of the image to get
 * @param { number } number 
 * @return { string }
 */

export default function illuCache(number){
    return "http://web.synapso.com:4000/illustration?n=" + number;
}