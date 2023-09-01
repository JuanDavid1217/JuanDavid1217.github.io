import { Injectable } from "@angular/core";
import axios
 from "axios";
@Injectable()
export class HeaderServices{
    info={
        name:"",
        charges:"",
        objetive:"",
        photo:"",
        email:"",
        cel:"",
        ubication:"",
        social:""
    }
    async getHeaderInfo(){
        try{
            this.info=await(await axios.get("http://localhost:8080/header")).data;
            //console.log(this.info.name)
            return this.info;
        }catch(error){
            window.alert(error);
            return null;
        }
    }
    /*getHeaderInfo(){
        axios.get("http://localhost:8080/header")
        .then(res=>{
            this.info=res.data;
        })
        .catch(error=>{
            window.alert(error);
        });
        //console.log(this.info)
        //return this.info;
    }*/
}