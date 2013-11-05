$(function() {
  // Document is ready
  render(com.dawgpizza.menu.pizzas, $('.menuItems'), $('.pizzaMenu'));
  render(com.dawgpizza.menu.drinks, $('.drinks'), $('.drinksMenu'));
  render(com.dawgpizza.menu.desserts, $('.desserts'), $('.dessertsMenu'));
});


function render(entries, template, container) {
    var instance;
    container.hide();
    container.empty();

    $.each(entries, function(){
        instance = template.clone();
        for (property in this) {
        	 instance.find('.' + property);
        	 if (property == 'prices') {
        	 	instance.find('.' + property).html('Small: ' + this.prices[0] + ' Medium: ' + this.prices[1] + ' Large: ' + this.prices[2]);        	 	
        	 } else {
        	 	instance.find('.' + property).html(this[property]);
        	 }
        }
        instance.removeClass('template');
        container.append(instance);
        container.fadeIn(1000);
    });
}