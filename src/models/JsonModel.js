const fs = require('fs');
const path = require('path');

class JsonModel {
   constructor(name){
      this.modelName = name;
      this.modelPath = path.join(__dirname, `../data/${this.modelName}.json`);
   }

   getAll () {
      let fileContent = fs.readFileSync(this.modelPath, 'utf-8');
      return fileContent.length > 0 ? JSON.parse(fileContent) : [];
   }

   save (newData) {
      let allData = this.getAll();
      let id = this.generateId();
      newData = {id, ...newData}
      allData = [...allData, newData];
      fs.writeFileSync(this.modelPath, JSON.stringify(allData, null, ' '));
   }

   generateId () {
      let allData = this.getAll();
      if(allData.length === 0){
         return 1;
      }
      return ++allData.pop().id;
   }

   findByPK (id) {
      let allData = this.getAll();

      return allData.find( product => product.id == id);
   }

   update () {

   }

   destroy (id) {
      let allData = this.getAll();

      allData = allData.filter(product => product.id != id);

      fs.writeFileSync(this.modelPath, JSON.stringify(allData, null, ' '));
   }
}



module.exports = JsonModel;