class ModelUtils {
    model = null
  
    constructor(modelRef) {
      this.model = modelRef
    }
  
    updateOrCreate(values, condition) {
      const thenFnFindOne = (obj) => {
        if(obj) {
          return obj.update(values);
        }
        return this.model.create(values);
      }
      return this.model
        .findOne({ where: condition })
        .then(thenFnFindOne.bind(this))
    }
  }
  
  exports.ModelUtils = ModelUtils