
import DB from '../../../database/db'


const allAvos = async(req, res)=>{
  const db = new DB
  const allEntries = await db.getById(req.query.id)
  return res.status(200).json({results: allEntries})
}
export default allAvos