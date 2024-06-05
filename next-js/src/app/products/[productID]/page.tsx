type ParamsProp = {
    params: {productID: string};
}

export default function ProductDetails({ params }: ParamsProp){
    return (
        <p>Product details {params.productID}</p>
    )
}