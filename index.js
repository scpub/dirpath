import { fileURLToPath, URL } from 'node:url';  
import { dirname } from 'node:path';


class Joim {  
    constructor() {     
      this.f = String;
      this.d = String
    }
    
    dir() { 
      this.f = fileURLToPath(new URL(import.meta.url));
      this.d = dirname(this.f);
      return this.d
    } 

    dip() { 
        this.f=fileURLToPath(new URL('.',import.meta.url));
        this.d = dirname(this.f);      
        return this.d
    } 
  }  

  const dir=new Joim().dir();
  const dip=new Joim().dip();
  

export {
  dir,dip
}
