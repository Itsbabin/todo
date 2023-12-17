import { Router } from "express";
import creatData from "../routes/creatData.route.js";

  const datarouter = Router();

//   datarouter.route('/fetch').get(fetchData);
//   datarouter.route('/update').put(updateData);
datarouter.route('/create').post(creatData);
//   datarouter.route('/delete').delete(deleteData);

// coments are to do item 


export default datarouter;