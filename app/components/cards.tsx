
import Image from "next/image";

export function Card({
    Name,
    Position,
    Date,
    Description,
    srcImage
  }: {
    Name: string;
    Position: string;
    Date: string;
    Description:string;
    srcImage : string;
  }) {
  
    return (
      <div className="project-card">
        <div className="header">
          <div className="caption">
            <h3 className="title">{Name}</h3>
            <h3 className="title">{Position}</h3>
            <h3 className="title">{Date}</h3>
            
          </div>
          <Image className= "proj-img" src = {srcImage} alt = "none" width = {100} height = {100}>
        </Image>
        </div>
        <p
          className="body"
        >
        
        {Description}
        

        </p> 
        
      </div>
      
    );
  }
