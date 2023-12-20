const ItemList = ({item})=>{
    return (
      <>
        {product.length > 0 ? (
          <>
            {product.map((item) => {
              return (
                <div key={item._id} className="bg-red-50">
                  {item.name}
                </div>
              );
            })}
          </>
        ) : (
          <div> No products to show </div>
        )}
      </>
    );
}

export default ItemList;