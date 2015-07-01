(function(){
  function CustomersController(){

    this.customers = [{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}];

    // The customer object's property to sort by.
    // This will set to either 'joined', 'name', 'city' or 'orderTotal' 
    // by the doSort method
    this.sortBy = "city";  //default is to sort by customer's name
    this.reverse = true;

  };

  CustomersController.prototype.doSort = function(propName){
    this.sortBy = propName;
    this.reverse = !this.reverse;
  };

  CustomersController.prototype.numOfCustomers = function(){
    return this.customers.length;
  };

  // The Controller is part of the module.
  angular.module('customersApp').controller('CustomersController', CustomersController);

})(angular);
