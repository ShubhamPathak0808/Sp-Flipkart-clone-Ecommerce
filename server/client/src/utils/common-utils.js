
//Ellipsis matlab agar statement bada ho to ... aa jaee

export const addEllipsis = (text) => {
    if(text.length > 50){
        return (
            text.substring(0,50) + '...'
        );
    }
    else{
        return (text);
    }
}