import DB from '@database'


const allAvos = async(req, res)=>{
  const db = new DB
  const allEntries = await db.getAll()
  return res.status(200).json({results: allEntries})
}
export default allAvos