export default function transformNumber(x){
    const number = parseInt(x);

    if((number / 1000000) > 1){
        return (number / 1000000) + "M" 
    }
    else if((number / 1000) > 1){
        return (number / 1000) + "K"
    }
    return number 
}