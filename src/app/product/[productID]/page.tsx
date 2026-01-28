export default async function Productdetails({params,}:{
    params:Promise<{productID:string}>;
}){
    const productID=(await params).productID;
    return<h1>details about product {productID}</h1>;
}