import bcrypt from "bcryptjs";

export async function genHash(pswd:string){
  let salt=bcrypt.genSaltSync(8);
  return bcrypt.hashSync(pswd,salt)
}
export async function compToHash(pswd:string,hash:string){
  var comp=bcrypt.compare(pswd,hash);
  return comp
}
