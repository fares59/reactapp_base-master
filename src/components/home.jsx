
export function Home(props) {
const{src, title, desc} = props






    return (


                    
       
       
            <div className="card card text-white bg-dark">
              
              <img src={src} className="card-img-top" alt="..."/>
            
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                 <p className="card-text">{desc}</p>
                </div>
            </div>

         
        
 
    )}
