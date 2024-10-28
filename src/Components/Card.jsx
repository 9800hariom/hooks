const Card=(value)=>{
    console.log(value);
   

    return(
        <div className="h-56 w-56 border-2 border-solid border-black">
<img className="h-1/2" src={value.value?.image} alt="" />


<div className="bg-red-800 h-1/2">
    <p className="">{value.value?.restaurant_name}</p>
    <p>{value.value?.rating} ⭐⭐⭐</p>
    <p className="line-clamp-2">{value.value?.dishes_offered}</p>

</div>
        </div>
    
    );
};
export default Card;