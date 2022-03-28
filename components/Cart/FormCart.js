import { useEffect , useState} from "react"
export default function FormCart(){
    let[data,setData]=useState(JSON.parse(window.localStorage.getItem("products")) || [])
    let [totalPrice,setTotal]=useState(0)

    useEffect(()=>{
        if(data.length!==0){
            for(let i=0;i<data.length;i++){
                setTotal(pre=> pre+( data[i].quanyity * data[i].price ))
            }
        }
        console.log("ssss");
    },[window.localStorage.getItem('products')])
    
    console.log(data);
    // console.log(data);
    // data.forEach(da=>{
    //     setTotal(pre => pre+parseFloat(da.quanyity * da.price))
    // })
    
    return(
        <div>
            <div>
                <h3>apply coupon</h3>
                <input type={'text'} placeholder={'Enter your Coupon'}/>
                <button>apply</button>
            </div>
            <div>
                <h3>cart totals</h3>
                <table>
                    <tr>
                        <td>cart subtotal</td>
                        <td>$ {totalPrice}</td>
                    </tr>
                    <tr>
                        <td>shipping</td>
                        <td>free</td>
                    </tr>
                    <tr>
                        <td>totla</td>
                        <td>$ {totalPrice}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}