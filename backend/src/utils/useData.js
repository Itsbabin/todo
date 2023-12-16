import { Router } from "express";
import creatData from "../routes/creatData.route";

  const datarouter = Router();

  datarouter.route('/fetch').get(fetchData);
  datarouter.route('/update').put(updateData);
  datarouter.route('/creat').post(creatData);
  datarouter.route('/delete').delete(deleteData);


  export default datarouter;