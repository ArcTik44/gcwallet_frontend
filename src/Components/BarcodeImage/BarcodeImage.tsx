import Barcode from "react-barcode";

interface Props{
    barcode:string;
}

const BarcodeImage:React.FC<Props> = ({barcode}) =>{

    return (<>
<div>
    <Barcode 
        lineColor="#000000"
        background="#D9D9D9"
        width={(2)} 
        height={(60)} 
        format="CODE128" 
        value={barcode}/>
</div>
    </>)
};
export default BarcodeImage;