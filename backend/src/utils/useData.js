import { Router } from "express";


  const datarouter = Router();

  datarouter.route('/fetch').get(fetchData);
  datarouter.route('/update').put(updateData);
  datarouter.route('/creat').post(creatData);
  datarouter.route('/delete').delete(deleteData);


  export default datarouter;