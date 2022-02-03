import { useEffect, useState } from "react";
import { Home } from "../components/home";
import { NewCollection } from "../components/newcollection";
import { Gender } from '../models/gender.model';
import { Product } from '../models/product.model';

export function HomeScreen() {
    const [homes, setHomes] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = Gender.from(await (await fetch('./data/gender.json')).json());
            setHomes(data);
        }
        fetchData().catch(console.error);;
    }, [homes])

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = Product.from(await (await fetch('./data/product.json')).json());
            console.log(data);
            data = data.filter(item => item.id < 4);
            setProducts(data);

        }
        fetchData().catch(console.error);;
    }, [])




    // const products = [
    //     { "id": 1, "title": "lectus", "price": 994.64, "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.", "image": "http://dummyimage.com/1000x200.bmp/dddddd/000000", "category_id": 1, "gender_id": 1 },
    //     { "id": 2, "title": "ultrices", "price": 852.18, "description": "Integer a nibh. In quis justo.", "image": "http://dummyimage.com/1000x200.jpg/abcdef/000000", "category_id": 2, "gender_id": 2 },
    //     { "id": 3, "title": "libero", "price": 155.36, "description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.", "image": "http://dummyimage.com/1000x200.png/ff4444/ffffff", "category_id": 3, "gender_id": 3 }

    // ];


    return (

        <div>
            
            <div className="container-fluid mt-3">
                <div className="row justify-content-center">


                    <div className="col-8">
                    <div className="row">
                        <NewCollection productscar={products} />
                    </div>
                    <br /><br />
                    <div className="container-fluid">
                   
                    
                        <div className="row">
                            {homes.map(home => {
                                return (


                                    <div className="col-3">
                                        <Home src={home.image} title={home.title} desc={home.description} />
                                    </div>
                                    
                                )
                            })}

                        </div>
                    </div>
                </div >
            </div>
        </div>
        </div>




    )
}

