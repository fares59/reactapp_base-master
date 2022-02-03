import { useState, useEffect } from "react"


export function NewCollection(props) {
    // const{ image, title,  description, price} = props
    const { productscar } = props
    const [currentProduct, setCurrentProduct] = useState(productscar[0]);
    const [index, setIndex] = useState(0);
    const [isActive, setIsActive] = useState(true);


    const handlePrev = () => {
        console.log("handlePrev");
        if (index > 0) {
            setIndex(index - 1)
        }
        else {
            let MaxIndex = productscar.length - 1;
            setIndex(productscar.length - 1);
        }
        setCurrentProduct(productscar[index]);


    }
    const handleNext = () => {
        console.log("handleNext");
        if (index < productscar.length - 1) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
        setCurrentProduct(productscar[index]);

    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (index < productscar.length - 1) {
                    setIndex(index + 1)
                }
                else {
                    setIndex(0)
                }
                setCurrentProduct(productscar[index]);
                // handleNext();
            }, 3000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, index, productscar]);






    return (



        <div className="card text-white bg-dark">


            <img src={currentProduct?.image} className="card-img-top" alt="..." />

            <div className="card-body">

                <h5 className="card-title">{currentProduct?.title}</h5>
                <p className="card-text">{currentProduct?.description}</p>
            </div>
            <div className="card-footer">
                <button class="btn btn-outline-light"onClick={handlePrev}>Precédent</button>
                <button className= "btn btn-outline-light"onClick={handleNext}>Suivant</button>

            </div>
        </div>

             
    )
}
